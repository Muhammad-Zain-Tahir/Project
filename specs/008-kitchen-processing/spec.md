# Module 8 Specification: Kitchen Order Processing

## 1. Traceability to Original Proposal
- **Module:** Module 8: Kitchen Order Processing (Weeks 15–16)
- **Original Proposal Items:**
  1. Send confirmed orders to the kitchen order dashboard.
  2. Display ordered items and order details.
  3. Track order status: Pending, Confirmed, Preparing, Ready, and Completed.
  4. Allow staff to update order progress.

---

## 2. Functional & Technical Requirements

### 2.1 Kitchen Order Dashboard Dispatch
- When an order transitions to `Confirmed`, it immediately appears on the Kitchen Order Dashboard.
- Orders in `Pending` state (unconfirmed staging) do not appear in the active kitchen queue.

### 2.2 Order Details & Item Display
- Each kitchen card clearly displays:
  - Ticket / Order Number (e.g., `ORD-10024`)
  - Order Type badge (Dine-in / Table Number, Takeaway, or Delivery)
  - Elapsed preparation timer / timestamp
  - Itemized list: Item Name, Quantity ordered, and special notes if any
  - Visual status color indicators

### 2.3 Order Status Lifecycle Machine
The system rigorously manages transitions between the five defined statuses:
1. `Pending`: Created by cashier, undergoing staging.
2. `Confirmed`: Validated and sent to kitchen queue.
3. `Preparing`: Kitchen staff has begun food preparation.
4. `Ready`: Food preparation complete, ready for floor serving or takeaway/delivery handoff.
5. `Completed`: Order served, bill settled, and transaction finalized.

### 2.4 Staff Interaction & Progress Updates
- Kitchen staff update progress with single-tap controls:
  - Click "Start Preparing" ➔ transitions status to `Preparing`.
  - Click "Mark Ready" ➔ transitions status to `Ready`.
- Status updates immediately propagate to the database and reflect across cashier and manager views.
