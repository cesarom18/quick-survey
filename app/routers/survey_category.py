from fastapi import APIRouter, HTTPException, status
from sqlmodel import select

from app.config.database import SessionDep
from app.models.survey_category import SurveyCategory

router = APIRouter(prefix="/survey-category", tags=["SurveyCategory"])


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


@router.get(
    "/{category_id}",
    summary="Get survey category",
    description="Get survey category by id",
    response_model=SurveyCategory,
)
async def get_by_id(session: SessionDep, category_id: int):
    try:
        result = await session.execute(
            select(SurveyCategory).where(SurveyCategory.id == category_id)
        )
        category = result.scalar_one_or_none()
        if not category:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Survey category not found",
            )
        return category
    except Exception as ex:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=ex
        )
