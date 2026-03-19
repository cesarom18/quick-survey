from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime, timezone

from app.models.user import User
from app.models.survey import Survey


class SurveyResponse(SQLModel, table=True):
    __tablename__ = "survey_response"
    id: int | None = Field(default=None, primary_key=True)
    submmited_at: datetime = Field(default=lambda: datetime.now(timezone.utc))
    # User Relationship
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="survey_responses")
    # Survey Relationship
    survey_id: int = Field(foreign_key="survey.id")
    survey: Survey = Relationship(back_populates="survey_responses")
