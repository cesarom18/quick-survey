from fastapi import APIRouter, HTTPException, status
from sqlmodel import select

from app.config.database import SessionDep
from app.models.survey_category import SurveyCategory
from app.schemas.survey_category import GetSurveyCategory, CreateSurveyCategory

router = APIRouter(prefix="/survey-category", tags=["SurveyCategory"])


@router.get(
    "/",
    summary="List survey categories",
    description="Get all survey categories paginated, also you can search by name",
    response_model=list[GetSurveyCategory],
)
async def get_survey_categories(session: SessionDep):
    try:
        result = await session.execute(select(SurveyCategory))
        categories = result.scalars().all()
        return categories
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal server error"
        )


@router.get(
    "/{category_id}",
    summary="Get survey category",
    description="Get survey category by id",
    response_model=GetSurveyCategory,
)
async def get_survey_category(session: SessionDep, category_id: int):
    try:
        result = await session.execute(
            select(SurveyCategory).where(SurveyCategory.id == category_id)
        )
        category = result.scalar_one_or_none()
        # Check if category exists
        if not category:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Survey category not found",
            )
        return category
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal server error"
        )


@router.post(
    "/",
    summary="Post survey category",
    description="Create survey category",
    response_model=GetSurveyCategory,
)
async def create_survey_category(session: SessionDep, data: CreateSurveyCategory):
    try:
        category = SurveyCategory(**data.model_dump())
        session.add(category)
        await session.commit()
        await session.refresh(category)
        return category 
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal server error"
        )
