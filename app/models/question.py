from sqlmodel import SQLModel, Field, Relationship

from models.question_type import QuestionType

class Question(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    order_index: int
    # Question Type Relationship
    question_type_id: int = Field(foreign_key="question_type.id")
    question_type: QuestionType = Relationship(back_populates="questions")
