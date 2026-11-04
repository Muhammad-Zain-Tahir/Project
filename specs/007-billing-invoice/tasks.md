# Module 7 Tasks: Billing and Invoice System

## Task Breakdown (Weeks 13–14)

### Week 13: Backend Billing Calculations & Schema
- [x] **Task 7.1:** Design and create `bills` Mongoose schema in `backend/src/modules/billing/billing.model.js`.
- [x] **Task 7.2:** Implement payment validation logic in `billing.validation.js` ensuring received amount is sufficient.
- [x] **Task 7.3:** Build calculation routines in `billing.service.js` for subtotals, grand totals, and change due.
- [x] **Task 7.4:** Implement route handlers in `billing.controller.js` and register routes in `billing.routes.js`.

### Week 14: Frontend Invoice Modal & Print Layout
- [x] **Task 7.5:** Build `BillingModal` component in React with live calculation of change as cashier types received amount.
- [x] **Task 7.6:** Create printable `InvoiceReceipt` component formatted for thermal receipt and standard paper.
- [x] **Task 7.7:** Apply CSS `@media print` rules ensuring clean, legible receipts without website navigation.
- [x] **Task 7.8:** Conduct mathematical verification tests on edge cases (exact change, large bills, zero balance).
