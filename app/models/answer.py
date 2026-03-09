from sqlmodel import SQLModel, Field, Relationship

from app.models.user import User
from app.models.question import Question
from app.models.question_option import QuestionOption


class Answer(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    # User Relationship
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="answers")
    # Question Relationship
    question_id: int = Field(foreign_key="question.id")
    question: Question = Relationship(back_populates="answers")
    # Question Option Relationship
    question_option_id: int | None = Field(default=None, foreign_key="question_option.id")
    question_option: QuestionOption | None = Relationship(back_populates="answers")
