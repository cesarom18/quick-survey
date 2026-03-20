# app/utilities.py
import bcrypt
import jwt
from fastapi import Request, HTTPException, Depends, status
from typing import Annotated, Any
from datetime import datetime, timezone, timedelta

from app.config.config import get_settings
from app.schemas.user import UserAccessToken

ALGORITHM = "HS256"
settings = get_settings()


def hash_password(password: str) -> str:
    """Hash user password

    Args:
        password (str): User password

    Returns:
        hashed_password (str): User hashed password
    """
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def create_access_token(data: dict) -> str:
    """Create user access token

    Args:
        data (dict): Data to encode inside of token

    Returns:
        token (str): User access token
    """
    to_encode = data
    to_encode.update(
        {
            "exp": datetime.now(timezone.utc) + timedelta(minutes=2),
            "nbf": datetime.now(timezone.utc),
            "aud": settings.frontend_domain,
        }
    )
    return jwt.encode(to_encode, settings.jwt_secret, algorithm=ALGORITHM)


def get_token(request: Request) -> UserAccessToken:
    """Get user access token

    Args:
        request (Request): FastAPI request

    Raises:
        HTTPException: Unauthorized user or invalid token

    Returns:
        payload (User access token): User access token
    """
    token = request.cookies.get("access_token")
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized user"
        )
    try:
        payload = jwt.decode(
            token,
            settings.jwt_secret,
            algorithms=[ALGORITHM],
            options={
                "require": ["sub", "exp", "nbf", "aud"],
            },
            audience=settings.frontend_domain,
        )
        return UserAccessToken(**payload)
    except (jwt.ExpiredSignatureError, jwt.PyJWTError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid access token"
        )


def get_optional_token(request: Request) -> UserAccessToken | None:
    """Get optional accesss token

    Args:
        request (Request): FastAPI request

    Returns:
        payload (UserAccessToken | None): User access token, otherwise None
    """
    token = request.cookies.get("access_token")
    if not token:
        return None
    try:
        payload = jwt.decode(
            token,
            settings.jwt_secret,
            algorithms=[ALGORITHM],
            options={
                "require": ["sub", "exp", "nbf", "aud"],
            },
            audience=settings.frontend_domain,
        )
        return UserAccessToken(**payload)
    except (jwt.ExpiredSignatureError, jwt.PyJWTError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid access token"
        )


GetTokenDep = Annotated[UserAccessToken, Depends(get_token)]
GetOptionalTokenDep = Annotated[UserAccessToken | None, Depends(get_optional_token)]
