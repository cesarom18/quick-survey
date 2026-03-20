# app/routers/survey.py
from fastapi import APIRouter, Path, HTTPException, status
from typing import Annotated
from sqlmodel import select

from app.config.database import SessionDep
from app.models.survey import Survey
from app.models.survey_response import SurveyResponse
from app.models.question import Question
from app.schemas.survey import GetSurvey, CreateSurvey, UpdateSurvey
from app.utilities import GetTokenDep

router = APIRouter(prefix="/surveys", tags=["Survey"])


@router.get(
    "/",
    summary="Get surveys",
    description="Get surveys",
    status_code=status.HTTP_200_OK,
    response_model=list[GetSurvey],
)
async def get_surveys(session: SessionDep):
    """Get surveys

    Args:
        session (SessionDep): Database session dependency
        token (GetOptionalTokenDep): User access token

    Returns:
        surveys (GetSurvey): Surveys
    """
    result = await session.execute(select(Survey))
    surveys = result.scalars().all()
    return surveys


@router.get(
    "/{survey_id}",
    summary="Get survey",
    description="Get survey",
    status_code=status.HTTP_200_OK,
    response_model=GetSurvey | None,
)
async def get_survey(session: SessionDep, survey_id: Annotated[int, Path(gt=0)]):
    """Get survey by ID

    Args:
        session (SessionDep): Database session dependency
        survey_id (int): Survey ID

    Returns:
        survey (GetSurvey): Survey
    """
    result = await session.execute(select(Survey).where(Survey.id == survey_id))
    surveys = result.scalar_one_or_none()
    return surveys


@router.post(
    "/",
    summary="Post survey",
    description="Create survey",
    status_code=status.HTTP_201_CREATED,
    response_model=GetSurvey,
)
async def create_survey(session: SessionDep, token: GetTokenDep, data: CreateSurvey):
    """Create survey

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        data (CreateSurvey): Survey data

    Raises:
        HTTPException: Survey ID not generated

    Returns:
        survey (GetSurvey): Survey
    """
    # Create survey
    survey = Survey(**data.model_dump(exclude={"questions"}), user_id=int(token.sub))
    session.add(survey)
    await session.flush()
    if survey.id is None:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Survey ID was not generated",
        )
    # Create questions
    for question in data.questions:
        session.add(Question(**question.model_dump(), survey_id=survey.id))
    await session.commit()
    return survey


@router.put(
    "/{survey_id}",
    summary="Put survey",
    description="Update survey",
    status_code=status.HTTP_200_OK,
    response_model=GetSurvey,
)
async def update_survey(
    session: SessionDep,
    survey_id: Annotated[int, Path(gt=0)],
    data: UpdateSurvey,
):
    """Update survey

    Args:
        session (SessionDep): Database session dependency
        data (UpdateSurvey): Survey data
        survey_id (int): Survey ID

    Raises:
        HTTPException: Survey not found

    Returns:
        survey (GetSurvey): Survey
    """
    survey = await session.get(Survey, survey_id)
    if not survey:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Survey not found",
        )
    updated_data = data.model_dump(exclude_unset=True)
    for key, value in updated_data.items():
        setattr(survey, key, value)
    session.add(survey)
    await session.commit()
    await session.refresh(survey)
    return survey


@router.delete(
    "/{survey_id}",
    summary="Delete survey",
    description="Delete survey",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_survey(
    session: SessionDep, token: GetTokenDep, survey_id: Annotated[int, Path(gt=0)]
):
    """Delete survey

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        survey_id (int): Survey ID

    Raises:
        HTTPException: If survey has already responses or survey not found
    """
    # Delete only if there are no responses
    result = await session.execute(
        select(SurveyResponse).where(SurveyResponse.survey_id == survey_id)
    )
    answer = result.first()
    if answer:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Survey canno't be deleted because has already responses",
        )
    survey = await session.get(Survey, survey_id)
    if not survey:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Survey not found",
        )
    await session.delete(survey)
    await session.commit()
