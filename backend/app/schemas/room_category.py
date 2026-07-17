from decimal import Decimal

from pydantic import BaseModel, ConfigDict


class RoomCategoryBase(BaseModel):
    name: str
    description: str
    base_price: Decimal
    total_rooms: int
    capacity: int
    image_urls: list[str]


class RoomCategoryCreate(RoomCategoryBase):
    pass


class RoomCategoryRead(RoomCategoryBase):
    id: int

    model_config = ConfigDict(from_attributes=True)