# app/schemas/question.py
from pydantic import BaseModel, ConfigDict, Field


class BaseQuestion(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


class GetQuestion(BaseModel):
    id: int
    text: str
    order_index: int
    question_type_id: int
    survey_id: int


class CreateQuestion(BaseQuestion):
    text: str = Field(max_length=255)
    order_index: int = Field(ge=0)
    question_type_id: int = Field(gt=0)


class UpdateQuestion(BaseQuestion):
    text: str = Field(max_length=255)
    order_index: int = Field(ge=0)
