# app/schemas/user.py
from pydantic import (
    BaseModel,
    ConfigDict,
    EmailStr,
    Field,
    model_validator,
    field_validator,
)


class BaseUser(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


class GetUser(BaseModel):
    id: int
    name: str
    email: str


class CreateUser(BaseUser):
    name: str = Field(max_length=100)
    email: EmailStr
    password: str = Field(min_length=8)
    confirm_password: str = Field(min_length=8)

    @model_validator(mode="after")
    def validate_password(self):
        if not self.password.isalnum():
            raise ValueError("Password must be alfanumeric")
        if self.password != self.confirm_password:
            raise ValueError("Password do not match")
        return self


class LoginUser(BaseUser):
    email: EmailStr
    password: str = Field(min_length=8)

    @field_validator("password", mode="after")
    @classmethod
    def validate_password(cls, value: str) -> str:
        if not value.isalnum():
            raise ValueError("Password must be alfanumeric")
        return value


class UpdateUser(BaseUser):
    name: str = Field(max_length=100)
