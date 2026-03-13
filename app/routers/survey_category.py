from fastapi import APIRouter, HTTPException, status
from sqlmodel import select

from app.config.database import SessionDep
from app.models.survey_category import SurveyCategory

router = APIRouter(prefix="/survey-category")


@router.get(
    "/",
    summary="List survey categories",
    description="Get all survey categories paginated, also you can search by name",
    response_model=list[SurveyCategory],
)
async def get_all(session: SessionDep):
    try:
        result = await session.execute(select(SurveyCategory))
        categories = result.scalars().all()
        return categories
    except Exception as ex:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=ex
        )

