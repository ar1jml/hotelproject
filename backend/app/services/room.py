from sqlalchemy.ext.asyncio import AsyncSession

from app.crud.room import get_room_categories


async def list_room_categories(db: AsyncSession):
    return await get_room_categories(db)