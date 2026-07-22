from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.room_category import RoomCategoryRead
from app.services.room import list_room_categories

router = APIRouter(
    prefix="/room-categories",
    tags=["Room Categories"],
)


@router.get(
    "/",
    response_model=list[RoomCategoryRead],
)
async def get_rooms(
    db: AsyncSession = Depends(get_db),
):
    return await list_room_categories(db)