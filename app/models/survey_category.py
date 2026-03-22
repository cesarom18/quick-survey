# app/models/survey_category.py
from sqlmodel import SQLModel, Field, Relationship


class SurveyCategory(SQLModel, table=True):
    """Survey category model

    Attributes:
        id (int): Survey category ID
        name (str): Survey category name
        surveys (list[Survey]): Related survey instance
    """

    __tablename__ = "survey_category"
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    # Survey Relationship
    surveys: list["Survey"] = Relationship(back_populates="survey_category")
