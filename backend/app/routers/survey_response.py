# app/routers/survey_response.py
from fastapi import APIRouter, status
from sqlmodel import select

from app.config.database import SessionDep
from app.models.survey_response import SurveyResponse
from app.schemas.survey_response import GetSurveyResponse, CreateSurveyResponse
from app.utilities import GetTokenDep

router = APIRouter(prefix="/survey_responses", tags=["SurveyResponse"])


@router.get(
    "/",
    summary="Get summary responses",
    description="Get summary responses",
    status_code=status.HTTP_200_OK,
    response_model=list[GetSurveyResponse],
)
async def get_survey_responses(session: SessionDep, token: GetTokenDep):
    """Get survey responses

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token

    Returns:
        responses (list[GetSurveyResponse]): Survey responses
    """
    result = await session.execute(select(SurveyResponse))
    responses = result.scalars().all()
    return responses


@router.post(
    "/",
    summary="Post survey response",
    description="Create survey response",
    status_code=status.HTTP_201_CREATED,
    response_model=GetSurveyResponse,
)
async def create_survey_response(
    session: SessionDep, token: GetTokenDep, data: CreateSurveyResponse
):
    """Create survey response

    Args:
        session (SessionDep): Database session dependency
        token (GetTokenDep): User access token
        data (CreateSurveyResponse): Survey response data

    Returns:
        response (GetSurveyResponse): Survey response
    """
    response = SurveyResponse(**data.model_dump())
    session.add(response)
    await session.commit()
    await session.refresh(response)
    return response
