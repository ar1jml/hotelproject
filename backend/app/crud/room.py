from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.room_category import RoomCategory


async def get_room_categories(db: AsyncSession):
    result = await db.execute(
        select(RoomCategory)
    )

    return result.scalars().all()