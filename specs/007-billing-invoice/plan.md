# Module 7 Plan: Billing and Invoice System

## 1. Technical Implementation Strategy

- **Backend Architecture:** Encapsulated in `backend/src/modules/billing/` (`billing.controller.js`, `billing.model.js`, `billing.routes.js`, `billing.service.js`, `billing.validation.js`).
- **Precision:** Ensure floating-point rounding is handled properly to 2 decimal places using standard financial arithmetic rules.
- **Frontend Architecture:** Integrated checkout modal in `frontend/src/features/billing/BillingModal.jsx` and printable invoice component `InvoiceReceipt.jsx`.

---

## 2. API Endpoints

- `POST /api/billing/generate/:orderId` — Create official bill record with `receivedAmount`.
- `GET /api/billing/invoice/:invoiceNumber` — Retrieve invoice record for viewing/reprinting.
- `GET /api/billing/order/:orderId` — Retrieve bill associated with a specific order ID.
- `GET /api/billing` — List all issued bills with date and cashier filters.

---

## 3. Weekly Milestones (Weeks 13–14)

- **Week 13:**
  - Build `bills` collection schema in MongoDB.
  - Implement financial calculation engine in `billing.service.js`.
  - Build endpoints to calculate and record received amounts and balances.
- **Week 14:**
  - Build cashier billing modal in React with real-time balance computation.
  - Design printable invoice receipt using dedicated print CSS stylesheet.
  - Test billing calculations and print layouts using Postman and web browsers.
