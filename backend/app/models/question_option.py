# app/models/question_option.py
from sqlmodel import SQLModel, Field, Relationship

from app.models.question import Question


class QuestionOption(SQLModel, table=True):
    """Question option model

    Attributes:
        id (int): Question option ID
        text (str): Question type text
        question_id (int): Question ID
        question (Question): Related question instance
        answers (list[Answer]): Related answers instance
    """

    __tablename__ = "question_option"
    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    # Question Relationship
    question_id: int = Field(foreign_key="question.id", ondelete="CASCADE")
    question: Question = Relationship(back_populates="question_options")
    # Answer Relationship
    answers: list["Answer"] = Relationship(back_populates="question_option")
