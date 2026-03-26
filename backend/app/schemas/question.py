# app/schemas/question.py
from enum import IntEnum
from pydantic import BaseModel, ConfigDict, Field, model_validator


class QuestionTypeEnum(IntEnum):
    text = 1
    select = 2
    radio = 3
    checkbox = 4
    number = 5
    date = 6


ALLOWED_OPTION_TYPES = {
    QuestionTypeEnum.select,
    QuestionTypeEnum.radio,
    QuestionTypeEnum.checkbox,
}


class BaseQuestion(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


class CreateQuestionOption(BaseModel):
    text: str = Field(max_length=255)


class GetQuestion(BaseModel):
    id: int
    text: str
    order_index: int
    question_type_id: int
    survey_id: int


class CreateQuestion(BaseQuestion):
    text: str = Field(max_length=255)
    order_index: int = Field(ge=0)
    question_type_id: QuestionTypeEnum = Field(gt=0)
    question_options: list[CreateQuestionOption] | None = None

    @model_validator(mode="after")
    def validate_question_option(self):
        if self.question_type_id in ALLOWED_OPTION_TYPES and not self.question_options:
            raise ValueError(
                'Question option data must be in if question type is "select", "radio" or "checkbox"'
            )
        if self.question_options and self.question_type_id not in ALLOWED_OPTION_TYPES:
            raise ValueError(
                'Question type must be "select", "radio" or  "checkbox" if question_option is present'
            )
        return self


class UpdateQuestion(BaseQuestion):
    text: str = Field(max_length=255)
    order_index: int = Field(ge=0)
