# app/schemas/survey_response.py
from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime


class BaseSurveyResponse(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


class GetSurveyResponse(BaseModel):
    id: int
    submmited_at: datetime
    user_id: int = Field(gt=0)
    survey_id: int = Field(gt=0)


class CreateSurveyResponse(BaseSurveyResponse):
    user_id: int = Field(gt=0)
    survey_id: int = Field(gt=0)
