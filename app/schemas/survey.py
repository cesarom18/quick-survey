# app/schemas/survey.py
from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime


class BaseSurvey(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


class GetSurvey(BaseModel):
    id: int
    title: str
    description: str | None = None
    image: str
    created_at: datetime


class CreateSurvey(BaseSurvey):
    title: str = Field(max_length=150)
    description: str | None = Field(default=None, max_length=255)
    image: str
    survey_category_id: int
    user_id: int


class UpdateSurvey(BaseSurvey):
    title: int = Field(max_length=150)
    description: str | None = Field(default=None, max_length=255)
    image: str
    survey_category_ind: int
