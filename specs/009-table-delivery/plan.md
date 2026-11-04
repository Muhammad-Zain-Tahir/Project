# Module 9 Plan: Table, Takeaway, and Delivery Management

## 1. Technical Implementation Strategy

- **Backend Architecture:** Located in `backend/src/modules/tables/` and `backend/src/modules/delivery/` with dedicated models, controllers, and services.
- **Frontend Architecture:** Interactive table layout in `frontend/src/pages/TableManagementPage.jsx` and delivery dispatch list in `frontend/src/features/delivery/`.

---

## 2. API Endpoints

- `GET /api/tables` — List all dining tables with current occupancy and active order reference.
- `POST /api/tables` — Add a new dining table (Manager role).
- `PUT /api/tables/:id/status` — Update table status (`Available`, `Occupied`, `Reserved`).
- `GET /api/delivery/orders` — List active delivery orders with destination addresses.
- `PUT /api/delivery/:orderId/status` — Update delivery progress.

---

## 3. Weekly Milestones (Weeks 17–18)

- **Week 17:**
  - Build MongoDB models for tables and delivery details.
  - Implement table state linking (auto-occupy on order, auto-release on payment).
  - Test table state transitions via Postman.
- **Week 18:**
  - Build visual table management grid in React with green/red status indicators.
  - Implement takeaway queue view and delivery order details card.
  - Verify complete workflow from table selection to checkout release.
