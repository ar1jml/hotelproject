from fastapi import FastAPI

from app.api.room import router as room_router

app = FastAPI(title="Hotel API")

app.include_router(room_router)