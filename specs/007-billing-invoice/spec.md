# Module 7 Specification: Billing and Invoice System

## 1. Traceability to Original Proposal
- **Module:** Module 7: Billing and Invoice System (Weeks 13–14)
- **Original Proposal Items:**
  1. Generate bills automatically from selected items.
  2. Calculate totals and payments accurately.
  3. Handle received amounts and remaining balances.
  4. Provide a printable invoice or receipt.

---

## 2. Functional & Technical Requirements

### 2.1 Automated Bill Generation
- When an order reaches completion or checkout, the system compiles the bill directly from the order items.
- Item subtotal = Sum of (`unit price * quantity`) across all line items.
- Taxes: Computed based on configured percentage (if applicable).
- Grand Total = `subtotal + taxAmount`.

### 2.2 Payment Handling: Received Amount & Remaining Balance
- Cashier enters the exact amount provided by the customer: `receivedAmount`.
- System validates that `receivedAmount >= grandTotal`.
- System computes: `remainingBalance = receivedAmount - grandTotal`.
- Upon successful payment recording, the order status transitions to `Completed`.

### 2.3 Printable Invoice & Receipt
- Printable document includes:
  - Restaurant Name & Header
  - Invoice Number & Order Reference
  - Date & Timestamp
  - Order Type (Dine-in / Table Number, Takeaway, or Delivery)
  - Itemized table with Name, Quantity, Unit Price, and Line Total
  - Subtotal, Tax Amount, Grand Total
  - Received Amount and Remaining Balance (Change)
  - Footer message ("Thank you for dining with SmartDine!")
- Rendered using CSS `@media print` rules to hide application headers, buttons, and sidebars.
