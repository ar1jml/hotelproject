from argon2 import PasswordHasher
from sqlalchemy.orm import Session

from app.models import Role, User, UserRole
from app.schemas.auth import RegisterRequest


password_hasher = PasswordHasher()


def register_user(db: Session, data: RegisterRequest) -> User:
    existing_user = (
        db.query(User)
        .filter(User.email == data.email)
        .first()
    )

    if existing_user:
        raise ValueError("User with this email already exists")

    password_hash = password_hasher.hash(data.password)

    user = User(
        email=data.email,
        password_hash=password_hash,
        first_name=data.first_name,
        last_name=data.last_name,
        phone=data.phone,
    )

    db.add(user)
    db.flush()

    guest_role = (
        db.query(Role)
        .filter(Role.name == "guest")
        .first()
    )

    if guest_role:
        user_role = UserRole(
            user_id=user.id,
            role_id=guest_role.id,
        )
        db.add(user_role)

    db.commit()
    db.refresh(user)

    return user