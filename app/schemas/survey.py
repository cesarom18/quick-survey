# app/schemas/survey.py
from pydantic import BaseModel, ConfigDict
from datetime import datetime


class BaseSurvey(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


class GetSurvey(BaseModel):
    id: int
    title: str
    description: str | None = None
    image: str
    created_at: datetime
