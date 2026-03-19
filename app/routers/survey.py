# app/routers/survey.py
from fastapi import APIRouter, Path, HTTPException, status
from typing import Annotated
from sqlmodel import select

from app.config.database import SessionDep
from app.models.survey import Survey
from app.schemas.survey import GetSurvey, CreateSurvey, UpdateSurvey
from app.utilities import GetTokenDep, GetOptionalTokenDep

router = APIRouter(prefix="/surveys", tags=["Survey"])


@router.get(
    "/",
    summary="Get surveys",
    description="Get surveys",
    status_code=status.HTTP_200_OK,
    response_model=list[GetSurvey],
)
async def get_surveys(session: SessionDep, token: GetOptionalTokenDep):
    result = await session.execute(select(Survey))
    surveys = result.scalars().all()
    return surveys


@router.get(
    "/{survey_id}",
    summary="Get survey",
    description="Get survey",
    status_code=status.HTTP_200_OK,
    response_model=Survey,
)
async def get_survey(session: SessionDep, survey_id: Annotated[int, Path(gt=0)]):
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
    survey = Survey(**data.model_dump())
    session.add(survey)
    await session.commit()
    await session.refresh(survey)
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
    survey = await session.get(Survey, survey_id)
    if not survey:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Survey not found",
        )
    await session.delete(survey)
    await session.commit()
