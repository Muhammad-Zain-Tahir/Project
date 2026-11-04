# Module 4 Plan: Database Design and Authentication

## 1. Technical Strategy

- **Database Schemas:** Define Mongoose schemas for `User`, `MenuItem`, and `Order` with strict type checking, default values, and indexes.
- **Security:** Password hashing using bcrypt; session tokens generated using jsonwebtoken (JWT).
- **Architecture:** Encapsulated in `backend/src/modules/auth/` and `backend/src/modules/users/`.

---

## 2. API Contract & Middleware Design

- **Routes:**
  - `POST /api/auth/register` (Validation: non-empty name, valid email, password length >= 6, valid role)
  - `POST /api/auth/login` (Validation: credentials match, generates JWT)
  - `GET /api/auth/profile` (Protected: returns authenticated user data)
- **Middleware:**
  - `auth.middleware.js`: Verifies `Bearer <token>`, populates `req.user`.
  - `error.middleware.js`: Intercepts unhandled rejections, Mongoose validation errors, and custom API errors.

---

## 3. Weekly Milestones (Weeks 7–8)

- **Week 7:**
  - Design and define MongoDB schemas for Users, Menu Items, and Orders.
  - Implement password hashing, user registration, and credential validation logic.
- **Week 8:**
  - Implement login controller and JWT token generation.
  - Build and integrate role-based authorization middleware.
  - Configure global error handling and testing via Postman.
