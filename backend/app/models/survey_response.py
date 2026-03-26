# app/models/survey_response.py
from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime, timezone

from app.models.user import User
from app.models.survey import Survey


class SurveyResponse(SQLModel, table=True):
    """Survey response model

    Attributes:
        id (int): Survey response ID
        submitted_at (datetime): Suvey response submitted datetime
        user_id (int): User ID
        user (User): Related user instance
        survey_id (int): Survey ID
        survey (Survey): Related survey instance
    """

    __tablename__ = "survey_response"
    id: int | None = Field(default=None, primary_key=True)
    submitted_at: datetime = Field(default=lambda: datetime.now(timezone.utc))
    # User Relationship
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="survey_responses")
    # Survey Relationship
    survey_id: int = Field(foreign_key="survey.id")
    survey: Survey = Relationship(back_populates="survey_responses")
