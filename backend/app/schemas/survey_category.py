# app/schemas/survey_category.py
from pydantic import BaseModel, ConfigDict, Field


class BaseSurveyCategory(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


class GetSurveyCategory(BaseModel):
    id: int
    name: str


class CreateSurveyCategory(BaseSurveyCategory):
    name: str = Field(max_length=255)
