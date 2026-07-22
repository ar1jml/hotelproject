from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

<<<<<<< HEAD:app/main.py
from app.api.v1.room import router as room_router
=======
from app.api.room import router as room_router
>>>>>>> 193456196eb410599095fef9adb5b4f95856fed7:backend/app/main.py

app = FastAPI(title="Hotel API")

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