# app/routers/answer.py
from fastapi import APIRouter, Query, status
from sqlmodel import select
from typing import Annotated

from app.config.database import SessionDep
from app.schemas.answer import GetAnswer, CreateAnswer
from app.models.answer import Answer
from app.utilities import GetTokenDep

router = APIRouter(prefix="/answer", tags=["Answer"])


@router.get(
    "/",
    summary="Get answers",
    description="Get answers",
    status_code=status.HTTP_200_OK,
    response_model=list[GetAnswer],
)
async def get_answers(
    session: SessionDep,
    token: GetTokenDep,
    user_id: Annotated[int | None, Query(gt=0)] = None,
    question_id: Annotated[int | None, Query(gt=0)] = None,
):
    """Get anwers

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        user_id (int | None = None): User ID query param, None is by default
        question_id (int | None = None): Question ID query param, None is by default

    Returns:
        answers (list[GetAnswer]): Answers
    """
    query = select(Answer)
    # Query param filters
    if user_id:
        query = query.where(Answer.user_id == user_id)
    if question_id:
        query = query.where(Answer.question_id == question_id)
    result = await session.execute(query)
    answers = result.scalars().all()
    return answers


@router.post(
    "/",
    summary="Post answer",
    description="Create answer",
    status_code=status.HTTP_201_CREATED,
    response_model=GetAnswer,
)
async def create_answer(session: SessionDep, token: GetTokenDep, data: CreateAnswer):
    """Create answer

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        data (CreateAnswer): Answer data

    Returns:
        answer (GetAnswer): Answer
    """
    answer = Answer(**data.model_dump())
    session.add(answer)
    await session.commit()
    await session.refresh(answer)
    return answer
