from typing import Annotated
from fastapi import APIRouter, HTTPException, Path, status
from sqlmodel import select

from app.config.database import SessionDep
from app.models.survey_category import SurveyCategory
from app.schemas.survey_category import GetSurveyCategory, CreateSurveyCategory

router = APIRouter(prefix="/survey-categories", tags=["SurveyCategory"])


@router.get(
    "/",
    summary="List survey categories",
    description="Get all survey categories paginated, also you can search by name",
    status_code=status.HTTP_200_OK,
    response_model=list[GetSurveyCategory],
)
async def get_survey_categories(session: SessionDep):
    result = await session.execute(select(SurveyCategory))
    categories = result.scalars().all()
    return categories


@router.get(
    "/{category_id}",
    summary="Get survey category",
    description="Get survey category by id",
    status_code=status.HTTP_200_OK,
    response_model=GetSurveyCategory,
)
async def get_survey_category(session: SessionDep, category_id: int):
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


@router.post(
    "/",
    summary="Post survey category",
    description="Create survey category",
    status_code=status.HTTP_201_CREATED,
    response_model=GetSurveyCategory,
)
async def create_survey_category(session: SessionDep, data: CreateSurveyCategory):
    category = SurveyCategory(**data.model_dump())
    session.add(category)
    await session.commit()
    await session.refresh(category)
    return category


@router.put(
    "/{category_id}",
    summary="Put survey category",
    description="Update survey category",
    status_code=status.HTTP_200_OK,
    response_model=GetSurveyCategory,
)
async def update_survey_category(
    session: SessionDep,
    category_id: Annotated[int, Path(gt=0)],
    data: CreateSurveyCategory,
):
    category = await session.get(SurveyCategory, category_id)
    if not category:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Survey category not found",
        )
    updated_data = data.model_dump(exclude_unset=True)
    for key, value in updated_data.items():
        setattr(category, key, value)
    session.add(category)
    await session.commit()
    await session.refresh(category)
    return category


@router.delete(
    "/{category_id}",
    summary="Delete survey category",
    description="Delete survey category",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_survey_category(
    session: SessionDep, category_id: Annotated[int, Path(gt=0)]
):
    category = await session.get(SurveyCategory, category_id)
    if not category:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Survey category not found",
        )
    await session.deleted(category)
    await session.commit()
