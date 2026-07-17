from decimal import Decimal

from sqlalchemy import Numeric, String, Text
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base

class RoomCategory(Base):
    __tablename__ = "room_categories"

    id: Mapped[int] = mapped_column(primary_key=True)

    name: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        index=True,
    )

    description: Mapped[str] = mapped_column(Text)

    base_price: Mapped[Decimal] = mapped_column(
        Numeric(10, 2)
    )

    total_rooms: Mapped[int]

    capacity: Mapped[int]

    image_urls: Mapped[list[str]] = mapped_column(
        ARRAY(String)
    )

    