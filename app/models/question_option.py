from sqlmodel import SQLModel, Field, Relationship

from models.question import Question


class QuestionOption(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    # Question Relationship
    question_id: int = Field(foreign_key="question.id")
    question: Question = Relationship(back_populates="question_options")
    # Answer Relationship
    answers: list["Answer"] = Relationship(back_populates="question_option")
