from sqlmodel import SQLModel, Field, Relationship

from models.user import User
from models.question import Question


class Answer(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    # User Relationship
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="answers")
    # Question Relationship
    question_id: int = Field(foreign_key="question.id")
    question: Question = Relationship(back_populates="answers")
