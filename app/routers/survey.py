# app/routers/survey.py
from fastapi import APIRouter, status
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
async def get_surveys(
    session: SessionDep,
    token: GetOptionalTokenDep,
    exclude_own: bool = False,
):
    query = select(Survey)
    if exclude_own and token:
        query = query.where(Survey.user_id != token.get("sub"))
    result = await session.execute(query)
    surveys = result.scalars().all()
    return surveys
