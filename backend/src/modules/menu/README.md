# Menu Module

> **Subsystem:** SmartDine Backend  
> **Traceability:** Module 5: Menu Management System (Weeks 9–10)

## Overview
The Menu module manages the restaurant catalog, providing CRUD operations for menu items, category organization, live availability toggling, and database persistence in MongoDB.

## File Structure
- `menu.controller.js` — HTTP handlers for menu items and categories.
- `menu.model.js` — Mongoose schemas for `menu_items` and `categories`.
- `menu.routes.js` — Express routes for menu browsing and administration.
- `menu.service.js` — Catalog query methods, category filtering, and item operations.
- `menu.validation.js` — Input validation for item creation and updates.

## Endpoints
- `GET /api/menu` — Retrieve menu items (supports category & availability filter).
- `POST /api/menu` — Add new menu item (Manager only).
- `PUT /api/menu/:id` — Update menu item details or availability (Manager only).
- `DELETE /api/menu/:id` — Delete menu item (Manager only).
- `GET /api/menu/categories` — Retrieve all menu categories.
