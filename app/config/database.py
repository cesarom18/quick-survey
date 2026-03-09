# app/database.py
from sqlalchemy.ext.asyncio import (
    create_async_engine,
    async_sessionmaker,
    AsyncEngine,
    AsyncSession,
)
from app.config import get_settings

settings = get_settings()
# Create engine
engine: AsyncEngine = create_async_engine(
    url=f"mysql+asyncmy://{settings.db_user}:{settings.db_password}@{settings.db_host}/{settings.db_name}?charset=utf8mb4",
    echo=settings.echo,
)
# Create session
async_session = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False,
)

async def get_session():
    async with async_session() as session:
        yield session

async def close_db():
    await engine.dispose()
