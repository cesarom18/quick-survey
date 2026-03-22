# app/schemas/answer.py
from pydantic import BaseModel, ConfigDict, Field


class BaseAnswer(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


class GetAnswer(BaseModel):
    id: int
    text: str | None = None
    user_id: int
    question_id: int
    question_option_id: int


class CreateAnswer(BaseAnswer):
    text: str | None = Field(default=None, max_length=255)
    user_id: int = Field(gt=0)
    question_id: int = Field(gt=0)
    question_type_id: int = Field(gt=0)
