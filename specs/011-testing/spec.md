# Module 11 Specification: Testing and Bug Fixing

## 1. Traceability to Original Proposal
- **Module:** Module 11: Testing and Bug Fixing (Weeks 21–22)
- **Original Proposal Items:**
  1. Test frontend and backend functionality.
  2. Test API endpoints and database operations.
  3. Identify and fix errors.
  4. Verify billing calculations and order status updates.

---

## 2. Test Requirements & Verification Standards

### 2.1 Frontend & Backend Functional Verification
- Verify form validation across registration, login, order ticket staging, and menu item updates.
- Verify error handling when network requests fail or invalid credentials are provided.
- Verify role navigation restrictions in the React client.

### 2.2 API Endpoints and Database Operations
- Execute structured Postman collections testing all endpoints across the 8 backend modules.
- Verify MongoDB CRUD operations: document insertion, query filtering, state updates, and foreign key reference integrity.
- Check index utilization on `orders`, `bills`, and `menu_items` to confirm absence of unindexed full-collection scans.

### 2.3 Error Identification & Remediation
- Log and catalog all discovered defects according to severity.
- Resolve asynchronous race conditions in state updates.
- Fix UI rendering edge cases (e.g., handling very long item descriptions, empty order queues).

### 2.4 Critical Business Logic Verification
- **Billing Calculations:**
  - Verify rounding behavior on floating-point currencies.
  - Verify calculation of `Remaining Balance = Received Amount - Grand Total`.
  - Ensure zero balance handling and prevent negative remaining balance without warning.
- **Order Status Progression:**
  - Verify sequential progression: `Pending` ➔ `Confirmed` ➔ `Preparing` ➔ `Ready` ➔ `Completed`.
  - Prevent invalid state leaps or status regression.
