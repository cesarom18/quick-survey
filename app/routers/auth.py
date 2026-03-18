# app/routers/auth.py
from fastapi import APIRouter, HTTPException, Response, Depends, status
from fastapi.responses import JSONResponse
from sqlmodel import select
import bcrypt

from app.config.database import SessionDep
from app.models.user import User
from app.schemas.user import CreateUser, GetUser, LoginUser
from app.utilities import hash_password, create_access_token, GetTokenDep

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.get(
    "/me",
    summary="Get authenticated user",
    description="Get authenticated user",
    status_code=status.HTTP_200_OK,
    response_model=GetUser,
)
async def get_authenticated_user(session: SessionDep, access_token: GetTokenDep):
    """Get authenticated user

    Args:
        session (SessionDep): Database session dependency
        access_token (GetAccessTokenDep): User access token

    Returns:
        user (GetUser): Normal user
    """
    return await session.get(User, access_token.get("sub"))


@router.post(
    "/register",
    summary="Register user",
    description="Register user",
    status_code=status.HTTP_201_CREATED,
    response_model=GetUser,
)
async def register(session: SessionDep, data: CreateUser):
    """Endpoint to register users

    Args:
        session (SessionDep): Database session dependency
        data (CreateUser): User data

    Raises:
        HTTPException: Client bad request

    Returns:
        user (GetUser): Normal user
    """
    result = await session.execute(select(User).where(User.email == data.email))
    user = result.scalar_one_or_none()
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is already registered",
        )
    hashed_password = hash_password(data.password)
    user = User(
        **data.model_dump(exclude={"password", "confirm_password"}),
        password=hashed_password
    )
    session.add(user)
    await session.commit()
    await session.refresh(user)
    return user


@router.post(
    "/login",
    summary="Login user",
    description="Login user",
    status_code=status.HTTP_200_OK,
)
async def login(session: SessionDep, data: LoginUser):
    """Endpoint to login users

    Args:
        session (SessionDep): Database session dependency
        data (LoginUser): User login data

    Raises:
        HTTPException: Invalid user email or password
    """
    result = await session.execute(select(User).where(User.email == data.email))
    user = result.scalar_one_or_none()
    if not user or not bcrypt.checkpw(
        data.password.encode("utf-8"), user.password.encode("utf-8")
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid user email or password",
        )
    access_token = create_access_token(
        {
            "sub": str(user.id),
        }
    )
    response = JSONResponse(content={"detail": "Login successfully"})
    response.set_cookie(
        key="access_token",
        value=access_token,
        secure=True,
        httponly=True,
        samesite="lax",
    )
    return response


@router.post("/logout", summary="Logout user", description="Logout user")
async def logout(response: Response, token: GetTokenDep):
    """Logout user

    Args:
        response (Response): FastAPI response

        access_token (dict[str, Any]): User access token

    Returns:
        response (Response): Response with access token cookie
    """
    response.delete_cookie(
        key="access_token",
        secure=True,
        httponly=True,
        samesite="lax",
    )
    response.status_code = status.HTTP_200_OK
    return response
