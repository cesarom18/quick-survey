from fastapi import FastAPI

from app.routers import survey_category
from app.exceptions.handlers import register_exception_handlers

app = FastAPI() # Create fastapi instance
register_exception_handlers(app)
# Add routers
app.include_router(survey_category.router, prefix="/api")
