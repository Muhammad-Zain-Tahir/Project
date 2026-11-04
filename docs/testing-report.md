# SmartDine – Testing and Quality Assurance Report

## 1. Overview & Objectives

In accordance with **Module 11: Testing and Bug Fixing (Weeks 21–22)** of the SmartDine Project Proposal, this document defines the testing strategy, test suites, verification criteria, and quality assurance logs for the system.

The core objectives are:
1. Test frontend and backend functionality.
2. Test API endpoints and database operations using Postman.
3. Identify and fix operational errors and edge cases.
4. Verify mathematical accuracy of billing calculations and atomic integrity of order status updates.

---

## 2. Test Scope & Methodologies

| Test Level | Tooling / Framework | Scope Covered |
|---|---|---|
| **API Endpoint Testing** | Postman / Supertest | All REST routes: auth, menu, orders, billing, kitchen, tables, reports |
| **Database Operations** | MongoDB driver / Mongoose | CRUD persistence, unique constraints, index performance |
| **Frontend UI Testing** | Browser verification | Form validation, responsiveness (Bootstrap/CSS3), order ticket modification |
| **Business Logic Testing**| Unit tests | Calculation of grand totals, received amounts, and remaining balances |
| **Workflow Integration** | End-to-end scenarios | Cashier order creation ➔ Kitchen progress updates ➔ Cashier invoice printing |

---

## 3. Core Test Scenarios & Verification Matrix

### TS-01: Authentication & Role-Based Access Control
- **TC-1.1:** Register user with valid credentials ➔ Returns `201 Created` and persists user with hashed password.
- **TC-1.2:** Login with invalid credentials ➔ Returns `401 Unauthorized` with clear error message.
- **TC-1.3:** Cashier attempts accessing manager reports route ➔ Intercepted by middleware; returns `403 Forbidden`.

### TS-02: Menu Management System
- **TC-2.1:** Add new menu item with valid name, category, and price ➔ Persisted and returned in `GET /api/menu`.
- **TC-2.2:** Toggle item availability to `false` ➔ Item marked as unavailable; cannot be added to new orders.
- **TC-2.3:** Delete menu item ➔ Item removed from database without corrupting existing historical orders.

### TS-03: Order Processing Lifecycle
- **TC-3.1:** Create new Dine-in order with assigned table ➔ Order status initialized as `Pending` or `Confirmed`.
- **TC-3.2:** Modify items (add item, increase quantity, delete line item) prior to confirmation ➔ Total recalculated accurately in real time.
- **TC-3.3:** Create Delivery order without address ➔ Backend validation catches error; returns `400 Bad Request`.

### TS-04: Kitchen Order Progression
- **TC-4.1:** Confirmed order appears on Kitchen Dashboard within active queue.
- **TC-4.2:** Kitchen staff clicks "Start Preparing" ➔ Order status updates to `Preparing`.
- **TC-4.3:** Kitchen staff clicks "Mark Ready" ➔ Order status updates to `Ready`; cashier informed.

### TS-05: Billing & Invoice Precision Verification
- **TC-5.1 Math Accuracy:** 
  - Item A (Qty: 2 @ $10.00) + Item B (Qty: 1 @ $5.50) = Subtotal $25.50.
  - Tax (0% or configured rate) added ➔ Grand Total validated to 2 decimal places.
- **TC-5.2 Received Amount & Balance Calculation:**
  - Grand Total: $25.50
  - Received Amount: $30.00
  - System must compute: **Remaining Balance = $4.50**.
- **TC-5.3 Insufficient Payment:** Received amount lower than Grand Total flagged with validation alert.
- **TC-5.4 Invoice Print Formatting:** Print stylesheet correctly isolates receipt content and suppresses UI navigation elements.

### TS-06: Dashboard & Reports Accuracy
- **TC-6.1:** Completed bills properly aggregated into Daily Total Sales without double counting.
- **TC-6.2:** Order count matches sum of Dine-in, Takeaway, and Delivery orders processed.

---

## 4. Defect Tracking and Verification Workflow

All identified bugs are cataloged using the GitHub Bug Report template, prioritized as Critical, High, or Low, and re-tested against automated API suites before marking tasks complete in `specs/011-testing/checklist.md`.
