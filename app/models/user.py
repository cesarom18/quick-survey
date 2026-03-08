from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, Text

class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=100)
    email: str = Field(unique=True)
    password: str = Field(min_length=8, sa_column=Column(Text))
    # Survey Relationship
    surveys: list["Survey"] = Relationship(back_populates="user")
    # Survey Response Relationship
    survey_responses: list["SurveyResponse"] = Relationship(back_populates="user")
