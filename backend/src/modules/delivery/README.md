# Delivery Module

> **Subsystem:** SmartDine Backend  
> **Traceability:** Module 9: Table, Takeaway, and Delivery Management (Weeks 17–18)

## Overview
The Delivery module handles the recording of customer delivery information (name, contact phone number, street address), tracking delivery order dispatch, and managing delivery status lifecycles.

## File Structure
- `delivery.controller.js` — HTTP handlers for querying and updating delivery records.
- `delivery.model.js` — Mongoose schema for delivery metadata.
- `delivery.routes.js` — Express routes for delivery queries.
- `delivery.service.js` — Delivery record creation and dispatch tracking.
- `delivery.validation.js` — Validation ensuring mandatory address and phone fields.

## Endpoints
- `GET /api/delivery/orders` — List active delivery orders with addresses.
- `PUT /api/delivery/:orderId/status` — Update delivery status.
