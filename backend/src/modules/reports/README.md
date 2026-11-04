# Reports Module

> **Subsystem:** SmartDine Backend  
> **Traceability:** Module 10: Dashboard and Sales Reports (Weeks 19–20)

## Overview
The Reports module executes MongoDB aggregation pipelines to summarize daily orders, compute gross sales metrics, segment revenue by order types, and maintain chronological transaction records for management review.

## File Structure
- `reports.controller.js` — HTTP handlers for summary metrics, statistics, and audit queries.
- `reports.model.js` — Model representations for reporting schemas.
- `reports.routes.js` — Express routes for managerial reports.
- `reports.service.js` — MongoDB aggregation pipelines for daily revenue, sales volume, and transactions.
- `reports.validation.js` — Date range and filter parameter validation.

## Endpoints
- `GET /api/reports/daily-summary` — Daily order totals, completed count, and gross sales.
- `GET /api/reports/sales-statistics` — Revenue distributions by order type and category.
- `GET /api/reports/transactions` — Historical transaction archive for auditing.
