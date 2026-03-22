# app/models/user.py
from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, Text
from datetime import datetime, timezone


class User(SQLModel, table=True):
    """User model

    Attributes:
        id (int): User ID
        name (str): User name
        email (str): User email
        password (str): User hashed password
        create_at (datetime): User created at datetime
        surveys (list[Survey]): Related survey instances
        survey_response (list[SurveyResponse]): Related survey response instance
        answers (list[Answer]): Related answer instances
    """

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=100)
    email: str = Field(unique=True)
    password: str = Field(min_length=8, sa_column=Column(Text))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    # Survey Relationship
    surveys: list["Survey"] = Relationship(back_populates="user")
    # Survey Response Relationship
    survey_responses: list["SurveyResponse"] = Relationship(back_populates="user")
    # Answer Relationship
    answers: list["Answer"] = Relationship(back_populates="user")
