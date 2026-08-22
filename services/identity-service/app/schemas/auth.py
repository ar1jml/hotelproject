from pydantic import BaseModel, EmailStr, Field


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)
    first_name: str = Field(min_length=1, max_length=100)
    last_name: str = Field(min_length=1, max_length=100)
    phone: str | None = Field(default=None, max_length=30)


class RegisterResponse(BaseModel):
    id: str
    email: str
    first_name: str
    last_name: str
    phone: str | None
    is_active: bool
    is_verified: bool