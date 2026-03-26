from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import survey_category, auth, survey
from app.exceptions.handlers import register_exception_handlers
from app.config.config import get_settings

app = FastAPI()  # Create fastapi instance
settings = get_settings()
register_exception_handlers(app)
# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_domain],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)
# Add routers
app.include_router(survey_category.router, prefix="/api")
app.include_router(auth.router, prefix="/api")
app.include_router(survey.router, prefix="/api")
