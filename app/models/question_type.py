from sqlmodel import SQLModel, Field, Relationship


class QuestionType(SQLModel, table=True):
    __tablename__ = "question_type"
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    # Question Relationship
    questions: list["Question"] = Relationship(back_populates="question_type")
