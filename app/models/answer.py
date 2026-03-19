# app/models/answer.py
from sqlmodel import SQLModel, Field, Relationship

from app.models.user import User
from app.models.question import Question
from app.models.question_option import QuestionOption


class Answer(SQLModel, table=True):
    """Answer model

    Attributes:
        id (int): Answer ID
        text (str): Answer text
        user_id (int): User ID
        user (User): Related user instance
        question_id (int): Question ID
        question (Question): Related question instance
        question_option_id (int | None = None): Question option ID
        question_option (QuestionOption | None): Related question option instance
    """

    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    # User Relationship
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="answers")
    # Question Relationship
    question_id: int = Field(foreign_key="question.id")
    question: Question = Relationship(back_populates="answers")
    # Question Option Relationship
    question_option_id: int | None = Field(
        default=None, foreign_key="question_option.id"
    )
    question_option: QuestionOption | None = Relationship(back_populates="answers")
