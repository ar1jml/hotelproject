from app.crud.room import get_room_categories


async def recommend_rooms(db, request_text):

    rooms = await get_room_categories(db)

    # Later AI will analyze this
    recommendations = []

    for room in rooms:
        recommendations.append({
            "name": room.name,
            "price": room.price,
            "description": room.description
        })

    return {
        "message": "Room recommendations",
        "request": request_text,
        "rooms": recommendations
    }