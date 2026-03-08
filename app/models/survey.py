from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, Text

from models.survey_category import SurveyCategory
from models.user import User

class Survey(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=150)
    description: str | None = Field(default=None, max_length=255)
    image: str = Field(sa_column=Column(Text))
    # SurveyCategory Relationship
    survey_category_id: int = Field(foreign_key="survey_category.id")
    survey_category: SurveyCategory = Relationship(back_populates="surveys")
    # User Relationship
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="surveys")
    # Survey Reponse Relationship
    survey_responses: list["SurveyResponse"] = Relationship(back_populates="survey")
