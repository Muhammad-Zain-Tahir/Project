# SmartDine – System Architecture

## 1. Architectural Overview

SmartDine is structured as a modular, decoupled **three-tier client-server web application** built upon the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). 

```
┌──────────────────────────────────────────────────────────┐
│              Presentation Layer (Frontend)               │
│               React.js + Bootstrap + CSS3                │
│  ┌───────────────┐ ┌────────────────┐ ┌────────────────┐ │
│  │ Cashier POS   │ │ Kitchen Board  │ │ Admin Reports  │ │
│  └───────┬───────┘ └───────┬────────┘ └────────┬───────┘ │
└──────────┼─────────────────┼───────────────────┼─────────┘
           │ (RESTful JSON APIs over HTTP/HTTPS) │
┌──────────┼─────────────────┼───────────────────┼─────────┐
│          ▼                 ▼                   ▼         │
│             Application Layer (Backend Server)           │
│                    Node.js + Express.js                  │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Global Middleware: CORS, BodyParser, Logger, Auth   │ │
│  └──────────────────────────┬──────────────────────────┘ │
│                             ▼                            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│  │ Auth & User │ │ Menu Module │ │ Orders & Tables     │ │
│  ├─────────────┤ ├─────────────┤ ├─────────────────────┤ │
│  │ Kitchen KDS │ │ Billing/Inv │ │ Reports & Dashboard │ │
│  └─────────────┴──────┬────────┴───────────────────────┘ │
└───────────────────────┼──────────────────────────────────┘
                        ▼ (Mongoose ODM / Native Driver)
┌──────────────────────────────────────────────────────────┐
│                   Data Tier (Storage)                    │
│                         MongoDB                          │
│   [Users]     [MenuItems]     [Orders]     [Bills]       │
│   [Categories][Tables]        [Deliveries]               │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Layered Architecture

### A. Presentation Layer (Frontend — React.js)
- **Role:** Delivers a responsive, intuitive user interface for restaurant staff across Cashier POS, Kitchen Display, and Administrative views.
- **Technologies:** React.js, Bootstrap, CSS3, HTML5, JavaScript.
- **Design Pattern:** Component-driven architecture using functional components, React Hooks (`useState`, `useEffect`, `useContext`), and service wrappers for API requests.
- **Client Responsibilities:**
  - Dynamic menu item browsing, category filtering, and order building.
  - Form validation on user inputs prior to network transmission.
  - Real-time visual status cues on orders for cashiers and kitchen staff.
  - Printable invoice formatting via CSS print styles.

### B. Application Layer (Backend — Node.js & Express.js)
- **Role:** Handles core business rules, authentication verification, order status state machine, billing calculations, and database coordination.
- **Technologies:** Node.js runtime, Express.js web framework.
- **Architecture:** Modular MVC (Model-Controller-Service-Route) pattern organized by domain feature:
  - `auth`: Registration, login, JWT token issuance, password security.
  - `users`: User profiles, role management (`cashier`, `kitchen`, `manager`).
  - `menu`: Catalog management, categories, item availability toggling.
  - `orders`: Order lifecycle handling for dine-in, takeaway, and delivery.
  - `kitchen`: Order processing, active queue display, progress state changes.
  - `billing`: Mathematical calculations (subtotal, tax, net total, change balance) and invoice generation.
  - `tables` & `delivery`: Dine-in table status mapping and delivery destination capture.
  - `reports`: Aggregation pipelines for daily sales, revenue metrics, and transaction logs.
- **Cross-Cutting Middleware:**
  - Authentication & Authorization: Verifies token validity and role permissions.
  - Request Validation: Validates incoming payloads before service dispatch.
  - Centralized Error Handling: Standardizes HTTP error responses and status codes.

### C. Data Tier (Database — MongoDB)
- **Role:** Schema-flexible, highly performant document storage for restaurant data.
- **Entities:** Collections for `users`, `categories`, `menuitems`, `orders`, `bills`, `tables`, and `deliveries`.
- **Optimization:** Compound indexing on `status`, `orderType`, `createdAt`, and `category` to ensure rapid querying during peak restaurant operational hours.

---

## 3. Core Operational Data Flows

### A. Order Creation & Kitchen Dispatch Flow
1. **Cashier** selects order type (**Dine-in**, **Takeaway**, or **Delivery**) and adds items to the ticket.
2. Frontend verifies quantities and dispatches `POST /api/orders` to Express backend.
3. Express validates payload, calculates temporary totals, saves order with status `Confirmed` (or `Pending` if awaiting cashier lock), and commits to MongoDB.
4. The **Kitchen Order Dashboard** polls or refreshes active orders via `GET /api/kitchen/active`.
5. Kitchen staff sees items, starts cooking (`Preparing`), and marks order as `Ready`.

### B. Billing & Payment Flow
1. Upon customer request or completion of service, Cashier requests invoice generation.
2. System calls `POST /api/billing/generate/:orderId`.
3. Backend computes exact totals: items total + applicable taxes = **Grand Total**.
4. Cashier enters `Received Amount`; system computes `Remaining Balance = Received Amount - Grand Total`.
5. Payment details are saved in the `bills` collection; status changes to `Completed`.
6. Frontend triggers browser print stylesheet to produce a clean physical receipt/invoice.

### C. Reporting Flow
1. Manager accesses the Dashboard (`/dashboard`).
2. Frontend queries `GET /api/reports/daily-summary` and `GET /api/reports/sales-statistics`.
3. Express backend executes MongoDB aggregation pipelines summarizing completed transactions, category volume, and daily revenue.
4. Dashboard renders summary cards and statistics tables for management review.
