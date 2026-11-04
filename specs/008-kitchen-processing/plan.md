# Module 8 Plan: Kitchen Order Processing

## 1. Technical Implementation Strategy

- **Backend Architecture:** Located in `backend/src/modules/kitchen/` (`kitchen.controller.js`, `kitchen.model.js`, `kitchen.routes.js`, `kitchen.service.js`, `kitchen.validation.js`).
- **Data Querying:** Optimized query retrieving orders where `status IN ['Confirmed', 'Preparing']`, sorted chronologically by `createdAt ASC` (first in, first out).
- **Frontend Architecture:** Specialized high-contrast, touch-optimized React view in `frontend/src/pages/KitchenPage.jsx` with card grid layout.

---

## 2. API Endpoints

- `GET /api/kitchen/active` — Fetch all currently active kitchen tickets.
- `GET /api/kitchen/:orderId` — Fetch detailed ticket information.
- `PUT /api/kitchen/:orderId/status` — Advance status to `Preparing` or `Ready` (Protected: Kitchen & Manager roles).

---

## 3. Weekly Milestones (Weeks 15–16)

- **Week 15:**
  - Build kitchen query service and status state machine in backend.
  - Create validation rules for status updates in `kitchen.validation.js`.
  - Implement and test endpoints using Postman.
- **Week 16:**
  - Build `KitchenPage` component in React with high-contrast Bootstrap cards.
  - Implement action buttons for status transitions (`Start Preparing`, `Mark Ready`).
  - Implement periodic client refresh to ensure order visibility.
