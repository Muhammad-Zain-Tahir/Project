# Module 10 Plan: Dashboard and Sales Reports

## 1. Technical Implementation Strategy

- **Backend Architecture:** Located in `backend/src/modules/reports/` (`reports.controller.js`, `reports.model.js`, `reports.routes.js`, `reports.service.js`, `reports.validation.js`).
- **Data Aggregation:** Leverage MongoDB aggregation pipelines (`$match`, `$group`, `$sum`, `$sort`) for performant analytical computations.
- **Frontend Architecture:** Manager dashboard page in `frontend/src/pages/DashboardPage.jsx` and reporting table components in `frontend/src/features/reports/`.

---

## 2. API Endpoints

- `GET /api/reports/daily-summary` — Real-time metrics for today's orders and gross revenue.
- `GET /api/reports/sales-statistics` — Revenue distributions segmented by order type and menu category.
- `GET /api/reports/transactions` — Historical transaction archive with date and pagination parameters.
- `GET /api/reports/summary-range` — Aggregated sales summary across a selected date range.

---

## 3. Weekly Milestones (Weeks 19–20)

- **Week 19:**
  - Build MongoDB aggregation pipelines for daily metrics and sales statistics.
  - Implement Express controllers, services, and routes for reporting endpoints.
  - Protect endpoints with Manager role verification middleware.
- **Week 20:**
  - Build React `DashboardPage` layout featuring metric KPI cards and statistics tables.
  - Build historical transaction log view with date filtering.
  - Verify calculations against manual bill test data using Postman.
