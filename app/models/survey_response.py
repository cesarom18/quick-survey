from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime

from models.user import User
from models.survey import Survey

class SurveyResponse(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    submmited_at: datetime 
    # User Relationship
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="survey_responses")
    # Survey Relationship
    survey_id: int = Field(foreign_key="survey.id")
    survey: Survey = Relationship(back_populates="survey_responses")
