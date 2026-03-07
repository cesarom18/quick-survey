from sqlmodel import SQLModel, Field

class Question(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    text: str = Field(max_length=255)
    order_index: int
