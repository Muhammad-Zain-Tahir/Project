# Orders Module

> **Subsystem:** SmartDine Backend  
> **Traceability:** Module 6: Order Management System (Weeks 11–12)

## Overview
The Orders module manages the end-to-end lifecycle of restaurant orders across Dine-In, Takeaway, and Delivery channels. It supports item customization before confirmation, calculations, and order status transitions.

## File Structure
- `orders.controller.js` — HTTP handlers for creating, retrieving, and updating orders.
- `orders.model.js` — Mongoose schema for the `orders` collection with embedded item documents.
- `orders.routes.js` — Express routes for order lifecycle handling.
- `orders.service.js` — Order calculation routines, status state machine, and database persistence.
- `orders.validation.js` — Payload validation for order channels and items.

## Endpoints
- `POST /api/orders` — Create new order ticket.
- `GET /api/orders` — List orders (with status and type filters).
- `GET /api/orders/:id` — Fetch complete order breakdown.
- `PUT /api/orders/:id` — Update ticket items before confirmation.
- `PUT /api/orders/:id/status` — Update order status.
