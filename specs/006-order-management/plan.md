# Module 6 Plan: Order Management System

## 1. Technical Implementation Strategy

- **Backend Architecture:** Located in `backend/src/modules/orders/` (`orders.controller.js`, `orders.model.js`, `orders.routes.js`, `orders.service.js`, `orders.validation.js`).
- **Data Model:** Encapsulates line items as subdocuments containing `menuItemId`, `name`, `price`, `quantity`, and `itemTotal`.
- **Frontend Architecture:** Integrated into `frontend/src/pages/POSPage.jsx` with real-time state management via React Hooks.

---

## 2. API Endpoints

- `POST /api/orders` — Create a new order ticket with line items.
- `GET /api/orders` — List orders (filters: `?type=...&status=...`).
- `GET /api/orders/:id` — Retrieve full order ticket details.
- `PUT /api/orders/:id` — Edit items before confirmation.
- `PUT /api/orders/:id/status` — Update order status.

---

## 3. Weekly Milestones (Weeks 11–12)

- **Week 11:**
  - Build orders schema, validation logic, and calculation service.
  - Implement Express routes for creating, listing, and retrieving order details.
- **Week 12:**
  - Build interactive Cashier POS interface in React.
  - Implement active order staging state with item add/remove/quantity features.
  - Connect POS interface to backend APIs and verify via Postman.
