# Module 6 Specification: Order Management System

## 1. Traceability to Original Proposal
- **Module:** Module 6: Order Management System (Weeks 11–12)
- **Original Proposal Items:**
  1. Create new restaurant orders.
  2. Support dine-in, takeaway, and delivery orders.
  3. Add or remove items before order confirmation.
  4. Store orders and retrieve order details through APIs.

---

## 2. Functional & Technical Requirements

### 2.1 Order Creation & Order Types
- **Dine-In:** Requires selection of an available dining table. Order is linked to the table until completion.
- **Takeaway:** Automatically assigned an order pickup ticket number.
- **Delivery:** Captures customer name, contact phone number, and delivery street address.

### 2.2 Item Selection & Ticket Modification Before Confirmation
- Cashier clicks menu items to add them to the active staging ticket.
- Cashier can dynamically increase/decrease item quantities (`+`/`-`).
- Cashier can remove line items using a clear delete button.
- Subtotal recalculates instantly upon every item addition, removal, or quantity adjustment.
- Items are locked once the cashier clicks "Confirm Order", changing the state to `Confirmed` and sending it to the kitchen.

### 2.3 Order Storage and API Retrieval
- Each order receives a unique human-readable identifier (e.g., `ORD-10024`).
- REST APIs allow searching, filtering by order type, querying by date range, and retrieving complete order line-item breakdowns.
