# app/models/question.py
from sqlmodel import SQLModel, Field, Relationship

from app.models.question_type import QuestionType
from app.models.survey import Survey


class Question(SQLModel, table=True):
    """Question model

    Attributes:
        id (int): Question ID
        text (str): Question text
        order_index (int): Question order index
        question_type_id (int): Question type ID
        question_type (QuestionType): Related question type instance
        survey_id (int): Survey ID
        survey (Survey): Related survey instance
        answers (list[Answer]): Related answer instances
        question_options (list[QuestionOption]): Related question option instance
    """

    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    order_index: int
    # Question Type Relationship
    question_type_id: int = Field(foreign_key="question_type.id")
    question_type: QuestionType = Relationship(back_populates="questions")
    # Survey Relationship
    survey_id: int = Field(foreign_key="survey.id", ondelete="CASCADE")
    survey: Survey = Relationship(back_populates="questions")
    # Answer Relationship
    answers: list["Answer"] = Relationship(back_populates="question")
    # Question Option Relationship
    question_options: list["QuestionOption"] = Relationship(back_populates="question", cascade_delete=True)
