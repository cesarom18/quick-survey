# app/routers/question.py
from fastapi import APIRouter, Query, Path, HTTPException, status
from typing import Annotated
from sqlmodel import select

from app.config.database import SessionDep
from app.models.question import Question
from app.models.answer import Answer
from app.schemas.question import GetQuestion, UpdateQuestion, CreateQuestion
from app.utilities import GetTokenDep

router = APIRouter(prefix="/questions", tags=["Question"])


@router.get(
    "/",
    summary="Get questions",
    description="Get questions",
    status_code=status.HTTP_200_OK,
    response_model=list[GetQuestion],
)
async def get_questions(
    session: SessionDep,
    token: GetTokenDep,
    survey_id: Annotated[int | None, Query(gt=0)] = None,
):
    """Get questions

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        survey_id (int | None): Survey id to filter by this field, otherwise by default is None

    Returns:
        questions (list[GetQuestion]): Survey questions
    """
    query = select(Question)
    if survey_id:
        query = query.where(Question.survey_id == survey_id)
    result = await session.execute(query)
    questions = result.scalars().all()
    return questions


@router.get(
    "/{question_id}",
    summary="Get question",
    description="Get question",
    status_code=status.HTTP_200_OK,
    response_model=GetQuestion,
)
async def get_question(
    session: SessionDep, token: GetTokenDep, question_id: Annotated[int, Path(gt=0)]
):
    """Get question by ID

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        question_id (int): Question ID
    """
    question = await session.get(Question, question_id)
    if not question:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Question not found"
        )
    return question


@router.post(
    "/",
    summary="Post question",
    description="Create question",
    status_code=status.HTTP_201_CREATED,
    response_model=GetQuestion,
)
async def create_question(
    session: SessionDep, token: GetTokenDep, data: CreateQuestion
):
    """Create question

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        data (CreateQuestion): Question data

    Returns:
        question (GetQuestion): Question
    """
    question = Question(**data.model_dump())
    session.add(question)
    await session.commit()
    await session.refresh(question)
    return question


@router.put(
    "/{question_id}",
    summary="Put question",
    description="Update question",
    status_code=status.HTTP_200_OK,
    response_model=GetQuestion,
)
async def update_question(
    session: SessionDep,
    token: GetTokenDep,
    question_id: Annotated[int, Path(gt=0)],
    data: UpdateQuestion,
):
    """Update question

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        data (UpdateQuestion): Question data
        question_id (int): Question ID

    Raises:
        HTTPException: Raise exception if question doesn't exists

    Returns:
        question (GetQuestion): Question
    """
    question = await session.get(Question, question_id)
    if not question:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Question not found",
        )
    updated_data = data.model_dump(exclude_unset=True)
    result = await session.execute(
        select(Answer).where(Answer.question_id == question_id)
    )
    answers = result.scalars().first()
    # Only update "text" field if question has no answers
    if answers:
        del updated_data["text"]
    for key, value in updated_data.items():
        setattr(question, key, value)
    session.add(question)
    await session.commit()
    await session.refresh(question)
    return question
