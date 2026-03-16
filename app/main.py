from fastapi import FastAPI

from app.routers import survey_category, user, survey
from app.exceptions.handlers import register_exception_handlers

app = FastAPI() # Create fastapi instance
register_exception_handlers(app)
# Add routers
app.include_router(survey_category.router, prefix="/api")
app.include_router(user.router, prefix="/api")
app.include_router(survey.router, prefix="/api")
