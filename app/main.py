from fastapi import FastAPI

from app.routers import survey_category

app = FastAPI() # Create fastapi instance

app.include_router(survey_category.router, prefix="/api")
