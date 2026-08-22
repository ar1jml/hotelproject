# Hotel Microservices

A hotel management system being migrated from a monolithic backend to a microservices architecture.

## Architecture

The backend is being divided into independent services based on business responsibilities.

```text
services/
├── identity-service/
├── room-service/
├── booking-service/
├── restaurant-service/
└── content-service/
```

## Services

### Identity Service

Handles:

* User registration
* Authentication
* Login
* Roles
* JWT access tokens
* Refresh tokens

Database:

```text
identity_db
```

Current tables:

```text
users
roles
user_roles
refresh_tokens
```

Status:

**In development**

---

### Room Service

Handles:

* Room categories
* Rooms
* Room availability
* Room status

Database:

```text
room_db
```

Status:

**Not started**

---

### Booking Service

Handles:

* Hotel bookings
* Reservations
* Booking status
* Check-in
* Check-out

Database:

```text
booking_db
```

Status:

**Not started**

---

### Restaurant Service

Handles:

* Restaurant menu
* Menu categories
* Food items
* Restaurant operations

Database:

```text
restaurant_db
```

Status:

**Not started**

---

### Content Service

Handles:

* Blog posts
* Gallery
* Hotel information
* Website content

Database:

```text
content_db
```

Status:

**Not started**

## Database Architecture

Each microservice owns its own database.

```text
identity-service       → identity_db
room-service           → room_db
booking-service        → booking_db
restaurant-service     → restaurant_db
content-service        → content_db
```

Services will not directly access another service's database.

Communication between services will happen through APIs.

## Technology Stack

### Backend

* Python
* FastAPI
* SQLAlchemy
* Alembic
* PostgreSQL
* JWT
* Argon2

### Planned Infrastructure

* API Gateway
* Docker
* Docker Compose
* Service-to-service communication
* Centralized logging
* CI/CD

## Migration Strategy

The migration is being performed incrementally.

```text
Monolith
   │
   ▼
Identify Business Domain
   │
   ▼
Create Microservice
   │
   ▼
Create Database
   │
   ▼
Create Models
   │
   ▼
Configure Alembic
   │
   ▼
Build API
   │
   ▼
Test
   │
   ▼
Move to Next Service
```

## Current Progress

| Service            | Status         |
| ------------------ | -------------- |
| Identity Service   | In development |
| Room Service       | Not started    |
| Booking Service    | Not started    |
| Restaurant Service | Not started    |
| Content Service    | Not started    |

## Project Goal

The goal is to transform the existing hotel management backend from a monolithic architecture into independently maintainable and deployable microservices with clear business boundaries and independent database ownership.
