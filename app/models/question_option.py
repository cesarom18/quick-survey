from sqlmodel import SQLModel, Field, Relationship

class QuestionOption(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    # Answer Relationship
    answers: list["Answer"] = Relationship(back_populates="question_option")
