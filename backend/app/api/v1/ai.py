from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.ai.services.room_ai import recommend_rooms


router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.post("/rooms")
async def room_ai(
    question: str,
    db: AsyncSession = Depends(get_db)
):

    result = await recommend_rooms(
        db,
        question
    )

    return result