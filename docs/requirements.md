# SmartDine – Software Requirements Specification (SRS)

## 1. Introduction

This Software Requirements Specification defines the functional and non-functional requirements for the **SmartDine – Restaurant Ordering & Management System**, developed by **Muhammad Zain Tahir** as a **Final Year CIT Project**.

All requirements documented herein are directly derived from the official **Project Proposal PDF**.

---

## 2. User Roles & Permission Matrix

The system specifies three core user roles with distinct operational scopes:

| Feature / Action | Cashier | Kitchen Staff | Manager / Admin |
|---|:---:|:---:|:---:|
| User Login & Authentication | Yes | Yes | Yes |
| Manage Users & Roles | No | No | Yes |
| Add / Update / Delete Menu Items | No | No | Yes |
| View Menu Items & Availability | Yes | Yes | Yes |
| Create Dine-In, Takeaway, Delivery Orders | Yes | No | Yes |
| Modify Order Items Prior to Confirmation | Yes | No | Yes |
| Generate Bills & Compute Balances | Yes | No | Yes |
| Print Invoices / Receipts | Yes | No | Yes |
| View Kitchen Order Dashboard | No | Yes | Yes |
| Update Kitchen Order Status (`Preparing`, `Ready`, `Completed`) | No | Yes | Yes |
| Manage Dine-In Tables & Takeaway Queue | Yes | No | Yes |
| View Dashboard & Sales Summaries | No | No | Yes |

---

## 3. Functional Requirements

### FR-01: User Management & Authentication (Module 4)
- **FR-01.1 Registration:** The system shall support user registration with name, email/username, password, and designated role.
- **FR-01.2 Login:** The system shall provide secure authentication for authorized restaurant staff.
- **FR-01.3 Role-Based Access:** The system shall enforce role-based access control, restricting routes and features based on the assigned role (`cashier`, `kitchen`, `manager`).
- **FR-01.4 Validation & Error Handling:** The system shall validate user credentials on both frontend and backend, returning clear error responses.

### FR-02: Menu Management System (Module 5)
- **FR-02.1 Item CRUD Operations:** The system shall allow authorized staff to create, read, update, and delete menu items.
- **FR-02.2 Categorization:** The system shall organize items into clear categories (e.g., Appetizers, Main Course, Beverages, Desserts).
- **FR-02.3 Item Details:** The system shall record and display item names, prices, descriptions, and current availability status.
- **FR-02.4 Database Synchronization:** The system shall persist all menu item and category records in MongoDB.

### FR-03: Order Management System (Module 6)
- **FR-03.1 Order Creation:** The system shall provide an interface for cashiers to initiate new restaurant orders.
- **FR-03.2 Order Types:** The system shall support three order types: **Dine-In**, **Takeaway**, and **Delivery**.
- **FR-03.3 Item Selection & Editing:** The system shall allow items to be added, adjusted for quantity, or removed before order confirmation.
- **FR-03.4 API Persistence:** The system shall store order records in MongoDB and provide REST APIs to query order details.

### FR-04: Billing & Invoice System (Module 7)
- **FR-04.1 Automatic Bill Generation:** The system shall compute bills automatically based on ordered items, quantities, and unit prices.
- **FR-04.2 Mathematical Accuracy:** The system shall calculate item sub-totals, applicable taxes, discounts (if any), and grand totals accurately.
- **FR-04.3 Cash Handling & Balances:** The system shall accept the "Received Amount" input and compute the exact "Remaining Balance" (change due).
- **FR-04.4 Printable Invoice/Receipt:** The system shall provide a clean, formatted printable invoice/receipt for customer checkout.

### FR-05: Kitchen Order Processing (Module 8)
- **FR-05.1 Dashboard Dispatch:** Once an order is confirmed, the system shall send it immediately to the Kitchen Order Dashboard.
- **FR-05.2 Order & Item Visibility:** The kitchen display shall show the order number, order type, table/customer info, ordered items, and quantities.
- **FR-05.3 Status Workflow:** The system shall track and transition orders across defined statuses:
  `Pending` ➔ `Confirmed` ➔ `Preparing` ➔ `Ready` ➔ `Completed`
- **FR-05.4 Progress Updates:** Kitchen staff shall be able to update status with single-action controls (e.g., "Start Cooking", "Mark Ready").

### FR-06: Table, Takeaway & Delivery Management (Module 9)
- **FR-06.1 Dine-In Table Management:** The system shall track table identifiers, occupancy status, and link orders directly to specific tables.
- **FR-06.2 Takeaway Management:** The system shall assign pickup numbers and track takeaway queues.
- **FR-06.3 Delivery Details:** The system shall record delivery details where required, including customer name, phone number, and address.
- **FR-06.4 Unified Tracking:** The system shall allow staff to view and filter all active orders by type and status.

### FR-07: Dashboard and Sales Reports (Module 10)
- **FR-07.1 Order Summaries:** The dashboard shall display high-level summaries of daily orders (total orders, active orders, completed orders).
- **FR-07.2 Sales Statistics:** The system shall compute daily sales totals, revenue breakdowns, and order volume statistics.
- **FR-07.3 Transaction History:** The system shall maintain historical logs of all order transactions and generated bills.
- **FR-07.4 Management Reports:** The system shall provide basic tabular and graphical reports for management review.

---

## 4. Non-Functional Requirements

### NFR-01: Usability and Responsiveness
- The user interface must be developed using **React.js**, **CSS3**, and **Bootstrap**.
- Layouts must be intuitive and responsive across desktop monitors, point-of-sale terminals, and tablet screens used by floor/kitchen staff.

### NFR-02: Performance & Scalability
- Backend API endpoints built with **Node.js** and **Express.js** must respond within 500ms under standard operational restaurant loads.
- Database queries against **MongoDB** must utilize appropriate indexes on key fields (`orderId`, `status`, `createdAt`, `category`).

### NFR-03: Reliability & Data Integrity
- Order status changes and payment computations must be strictly atomic to prevent double billing or orphan orders.
- Comprehensive backend validation must prevent invalid order payloads, negative quantities, or malformed billing values.

### NFR-04: Security
- Passwords must be hashed using industry-standard hashing (e.g., bcrypt) before persistence in MongoDB.
- API endpoints must enforce role authorization via token-based middleware.
- Secrets, database credentials, and port configurations must reside exclusively in environment variables (`.env`).

---

## 5. System Constraints & Assumptions

1. **Tech Stack Enforcement:** Strict adherence to MERN (MongoDB, Express.js, React.js, Node.js) with Bootstrap and CSS3.
2. **Project Duration:** 6 Months (24 Weeks) divided across 12 two-week modules.
3. **Operational Scope:** On-premises restaurant management system without unapproved external third-party payment gateways, AI algorithms, or multi-branch features.
