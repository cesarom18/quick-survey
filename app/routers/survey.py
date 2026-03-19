# app/routers/survey.py
from fastapi import APIRouter, Path, status
from typing import Annotated
from sqlmodel import select

from app.config.database import SessionDep
from app.models.survey import Survey
from app.utilities import GetOptionalTokenDep

router = APIRouter(prefix="/surveys", tags=["Survey"])


@router.get(
    "/",
    summary="Get surveys",
    description="Get surveys",
    status_code=status.HTTP_200_OK,
    response_model=list[Survey],
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
