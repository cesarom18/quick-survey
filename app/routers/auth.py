from fastapi import APIRouter, HTTPException, status
from sqlmodel import select

from app.config.database import SessionDep
from app.models.user import User
from app.schemas.user import CreateUser, GetUser
from app.utilities import hash_password

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post(
    "/register",
    summary="Register user",
    description="Register user",
    status_code=status.HTTP_201_CREATED,
    response_model=GetUser,
)
async def register(session: SessionDep, data: CreateUser):
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
