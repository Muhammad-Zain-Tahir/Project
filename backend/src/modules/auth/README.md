# Auth Module

> **Subsystem:** SmartDine Backend  
> **Traceability:** Module 4: Database Design and Authentication (Weeks 7–8)

## Overview
The Auth module handles user authentication, registration, password hashing (bcrypt), token issuance, and credential validation.

## File Structure
- `auth.controller.js` — HTTP handlers for register, login, and verify profile.
- `auth.model.js` — Model definitions for authentication credentials and sessions.
- `auth.routes.js` — Express router binding routes to controllers.
- `auth.service.js` — Core authentication logic, hash comparison, and JWT generation.
- `auth.validation.js` — Joi/manual schema validation for input payloads.

## Endpoints
- `POST /api/auth/register` — Register staff account.
- `POST /api/auth/login` — Authenticate and receive JWT token.
- `GET /api/auth/profile` — Fetch authenticated user profile.
