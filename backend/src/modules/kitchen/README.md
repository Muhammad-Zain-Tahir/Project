# Kitchen Module

> **Subsystem:** SmartDine Backend  
> **Traceability:** Module 8: Kitchen Order Processing (Weeks 15–16)

## Overview
The Kitchen module coordinates confirmed order queues, displays ordered food items and modifications to kitchen staff, and manages order preparation state transitions (`Preparing`, `Ready`).

## File Structure
- `kitchen.controller.js` — HTTP handlers for fetching active tickets and updating status.
- `kitchen.model.js` — Kitchen ticket and queue representations.
- `kitchen.routes.js` — Express routes for kitchen display interactions.
- `kitchen.service.js` — FIFO queue retrieval and state transition enforcement.
- `kitchen.validation.js` — Validation ensuring valid status transition order.

## Endpoints
- `GET /api/kitchen/active` — Fetch all confirmed and preparing orders.
- `PUT /api/kitchen/:orderId/status` — Advance status to `Preparing` or `Ready`.
