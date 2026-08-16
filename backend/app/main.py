from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.room import router as room_router

app = FastAPI(title="Hotel Website API")

app.include_router(room_router)


app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)