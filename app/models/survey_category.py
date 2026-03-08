from sqlmodel import SQLModel, Field, Relationship

class SurveyCategory(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    # Survey Relationship
    surveys: list["Survey"] = Relationship(back_populates="survey_category")
