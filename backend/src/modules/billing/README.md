# Billing Module

> **Subsystem:** SmartDine Backend  
> **Traceability:** Module 7: Billing and Invoice System (Weeks 13–14)

## Overview
The Billing module manages automatic bill generation from confirmed order line items, tax and total calculations, cash handling (received amounts and remaining balances), and receipt generation.

## File Structure
- `billing.controller.js` — HTTP handlers for bill creation, retrieval, and receipt generation.
- `billing.model.js` — Mongoose schema for the `bills` collection.
- `billing.routes.js` — Express routes for billing operations.
- `billing.service.js` — Mathematical calculation engine for subtotals, grand totals, and change due.
- `billing.validation.js` — Validation rules ensuring received cash is sufficient.

## Endpoints
- `POST /api/billing/generate/:orderId` — Generate bill and record payment.
- `GET /api/billing/invoice/:invoiceNumber` — Fetch invoice details for printable view.
- `GET /api/billing` — List issued bills for auditing.
