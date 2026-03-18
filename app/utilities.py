# app/utilities.py
import bcrypt
import jwt
from datetime import datetime, timezone, timedelta

from app.config.config import get_settings

ALGORITHM = "HS256"
settings = get_settings()


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def create_access_token(data: dict) -> str:
    to_encode = data
    to_encode.update(
        {
            "exp": datetime.now(timezone.utc) + timedelta(seconds=30),
            "nbf": datetime.now(timezone.utc),
            "aud": settings.frontend_domain,
        }
    )
    return jwt.encode(to_encode, settings.jwt_secret, algorithm=ALGORITHM)
