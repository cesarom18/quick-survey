# app/database.py
import asyncio
from typing import Annotated
from fastapi import Depends
from sqlmodel import SQLModel
from sqlalchemy.ext.asyncio import (
    create_async_engine,
    async_sessionmaker,
    AsyncEngine,
    AsyncSession,
)

from app.config.config import get_settings
from app.models import (
    answer,
    question,
    question_option,
    question_type,
    survey,
    survey_category,
    survey_response,
    user,
)

settings = get_settings()
# Create engine
engine: AsyncEngine = create_async_engine(
    url=f"mysql+asyncmy://{settings.db_user}:{settings.db_password}@{settings.db_host}/{settings.db_name}?charset=utf8mb4",
    echo=settings.echo,
)
# Create session
async_session = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False,
)


async def get_session():
    async with async_session() as session:
        yield session

SessionDep = Annotated[AsyncSession, Depends(get_session)] # Create session dependencie


async def close_db():
    await engine.dispose()


async def init_db():
    # Create table
    async with engine.begin() as conn:  # Begin with the current transcation and end it, otherwise rollback
        await conn.run_sync(SQLModel.metadata.create_all)
    # Seed tables
    async with async_session() as session:
        session.add_all(
            [
                question.QuestionType(name="text"),
                question.QuestionType(name="select"),
                question.QuestionType(name="radio"),
                question.QuestionType(name="checkbox"),
                question.QuestionType(name="number"),
                question.QuestionType(name="date"),
                survey_category.SurveyCategory(name="Education"),
                survey_category.SurveyCategory(name="Technology"),
                survey_category.SurveyCategory(name="Business"),
                survey_category.SurveyCategory(name="Health"),
                survey_category.SurveyCategory(name="Entertaiment"),
            ]
        )
        await session.commit()


if __name__ == "__main__":
    asyncio.run(init_db())
