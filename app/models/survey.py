from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, Text
from datetime import datetime, timezone

from app.models.survey_category import SurveyCategory
from app.models.user import User


class Survey(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=150)
    description: str | None = Field(default=None, max_length=255)
    image: str = Field(sa_column=Column(Text))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    # SurveyCategory Relationship
    survey_category_id: int = Field(foreign_key="survey_category.id")
    survey_category: SurveyCategory = Relationship(back_populates="surveys")
    # User Relationship
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="surveys")
    # Survey Reponse Relationship
    survey_responses: list["SurveyResponse"] = Relationship(back_populates="survey")
    # Question Relationship
    questions: list["Question"] = Relationship(back_populates="survey")
