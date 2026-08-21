from fastapi import FastAPI
from sqlalchemy import text

from app.database import engine


app = FastAPI(title="Identity Service")


@app.get("/health")
def health():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "healthy",
            "service": "identity-service",
            "database": "connected",
        }

    except Exception as e:
        return {
            "status": "unhealthy",
            "service": "identity-service",
            "database": "disconnected",
            "error": str(e),
        }