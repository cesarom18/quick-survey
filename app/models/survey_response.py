from sqlmodel import SQLModel, Field
from datetime import datetime

class SurveyResponse(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    submmited_at: datetime 
