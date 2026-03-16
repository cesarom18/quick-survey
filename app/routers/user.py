from typing import Annotated
from fastapi import APIRouter, HTTPException, Path, status
from sqlmodel import select

from app.config.database import SessionDep
from app.models.user import User
from app.schemas.user import GetUser, CreateUser

router = APIRouter(prefix="/users", tags=["User"])

@router.get("/", summary="Get users", description="Get users", status_code=status.HTTP_200_OK, response_model=list[GetUser])
async def get_users(session: SessionDep):
    result = await session.execute(select(User))
    users = result.scalars().all()
    return users

@router.get(
    "/{user_id}",
    summary="Get user",
    description="Get user by id",
    status_code=status.HTTP_200_OK,
    response_model=GetUser,
)
async def get_user(session: SessionDep, user_id: Annotated[int, Path(gt=0)]):
    user = await session.get(User, user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return User 


@router.post(
    "/",
    summary="Post user",
    description="Create user",
    status_code=status.HTTP_201_CREATED,
    response_model=CreateUser,
)
async def create_user(session: SessionDep, data: CreateUser):
    user = User(**data.model_dump())
    session.add(user)
    await session.commit()
    await session.refresh(user)
    return user 


@router.put(
    "/{user_id}",
    summary="Put user",
    description="Update user",
    status_code=status.HTTP_200_OK,
    response_model=GetUser,
)
async def update_user(
    session: SessionDep,
    user_id: Annotated[int, Path(gt=0)],
    data: CreateUser,
):
    user = await session.get(User, user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    updated_data = data.model_dump(exclude_unset=True)
    for key, value in updated_data.items():
        setattr(user, key, value)
    session.add(user)
    await session.commit()
    await session.refresh(user)
    return user 



