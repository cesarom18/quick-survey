from fastapi import APIRouter, status
from sqlmodel import select

from app.config.database import SessionDep
from app.models.user import User
from app.schemas.user import GetUser

router = APIRouter(prefix="/users", tags=["User"])

@router.get("/", summary="Get users", description="Get users", status_code=status.HTTP_200_OK, response_model=list[GetUser])
async def get_users(session: SessionDep):
    result = await session.execute(select(User))
    users = result.scalars().all()
    return users
