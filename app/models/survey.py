from sqlmodel import SQLModel, Field, table
from sqlalchemy import Column, Text

class Survey(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=150)
    description: str | None = Field(default=None, max_length=255)
    image: str = Field(sa_column=Column(Text))
