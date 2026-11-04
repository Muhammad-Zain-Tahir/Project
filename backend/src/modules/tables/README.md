# Tables Module

> **Subsystem:** SmartDine Backend  
> **Traceability:** Module 9: Table, Takeaway, and Delivery Management (Weeks 17–18)

## Overview
The Tables module manages the physical dining room configuration, table seating capacities, and real-time occupancy states (`Available`, `Occupied`, `Reserved`), linking active orders to dining tables.

## File Structure
- `tables.controller.js` — HTTP handlers for table listing and occupancy updates.
- `tables.model.js` — Mongoose schema for the `tables` collection.
- `tables.routes.js` — Express routes for table management.
- `tables.service.js` — Logic for table allocation, occupancy assignment, and checkout release.
- `tables.validation.js` — Validation rules for table numbers and capacities.

## Endpoints
- `GET /api/tables` — List all dining tables and occupancy status.
- `POST /api/tables` — Create new table (Manager only).
- `PUT /api/tables/:id/status` — Update table occupancy status manually or automatically.
