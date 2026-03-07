from sqlmodel import SQLModel, Field

class SurveyCategory(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
