import asyncio

from app.core.database import engine
from app.models.base import Base

# important: import models so SQLAlchemy knows them
from app.models.room_category import RoomCategory


async def create_tables():

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


asyncio.run(create_tables())