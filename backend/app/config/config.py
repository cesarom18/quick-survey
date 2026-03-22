# app/config.py
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import (
    lru_cache,
)


class Settings(BaseSettings):  # Class will attempt to determine values from .env file
    # DB info
    db_user: str = "root"
    db_password: str = "example"
    db_host: str = "localhost"
    db_name: str = "example"
    # DB connection settings
    echo: bool = False
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")
    # Other
    frontend_domain: str = "example"
    jwt_secret: str = "secret"


@lru_cache()  # This return the previous value if the args were the same
def get_settings() -> Settings:
    return Settings()
