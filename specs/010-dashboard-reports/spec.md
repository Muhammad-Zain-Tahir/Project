# Module 10 Specification: Dashboard and Sales Reports

## 1. Traceability to Original Proposal
- **Module:** Module 10: Dashboard and Sales Reports (Weeks 19–20)
- **Original Proposal Items:**
  1. Display order and sales summaries.
  2. Show daily sales and order statistics.
  3. Maintain transaction and order records.
  4. Provide basic reports for restaurant management.

---

## 2. Functional & Technical Requirements

### 2.1 Order & Sales Summaries
- **Daily Orders Counter:** Total orders placed today, segmented into Completed, Active (`Confirmed`, `Preparing`, `Ready`), and Cancelled.
- **Daily Gross Sales:** Total cash revenue generated from completed bills for the current day.
- **Average Ticket Size:** Average revenue per completed order.

### 2.2 Daily Sales and Order Statistics
- Distribution of revenue and volume across the three order types:
  - Dine-In revenue & count
  - Takeaway revenue & count
  - Delivery revenue & count
- Breakdown of top-selling menu items and categories.

### 2.3 Transaction and Order Records
- Comprehensive, immutable chronological audit log of all completed transactions.
- Filterable by date range, cashier ID, order type, and payment status.
- Each record links to the generated invoice number and original order ID.

### 2.4 Basic Reports for Restaurant Management
- Tabular management report view in React with export/print capability.
- Visual summary cards using Bootstrap styling and readable data tables.
- Access restricted exclusively to authorized Manager/Admin accounts.
