from sqlmodel import SQLModel, Field

class QuestionOption(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
