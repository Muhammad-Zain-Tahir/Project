# SmartDine – Project Overview

## 1. Executive Summary

**SmartDine – Restaurant Ordering & Management System** is a modern web-based restaurant operations platform developed by **Muhammad Zain Tahir** as a **Final Year CIT Project**. The project addresses the operational vulnerabilities, calculation mistakes, and communication delays that plague conventional paper-based and manual restaurant systems.

Developed over a **6-month (24-week)** timeline utilizing the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) paired with **Bootstrap** and **CSS3**, SmartDine creates a centralized digital environment for restaurant staff to streamline order taking, kitchen workflows, billing, table management, and managerial reporting.

---

## 2. Problem Statement & Motivation

Many restaurants manage orders and billing manually, which leads to:
1. **Calculation Errors:** Manual total, tax, and balance computations regularly cause financial discrepancies.
2. **Kitchen Delays & Miscommunication:** Hand-written paper slips between order cashiers and kitchen personnel are easily lost, misread, or delayed.
3. **Inefficient Progress Tracking:** Inability to track whether an order is pending, being prepared, or ready for customer service.
4. **Poor Record Keeping:** Difficulty maintaining accurate daily sales records, order transaction history, and business summaries.

SmartDine directly solves these challenges by providing a centralized digital system for managing restaurant orders, bills, menu items, and kitchen workflow. It reduces manual overhead, improves billing accuracy, and makes day-to-day restaurant operations structured and efficient.

---

## 3. Core System Capabilities

Based strictly on the original project proposal, the system encompasses:

### A. Order Management
- Multi-channel order support: **Dine-in**, **Takeaway**, and **Delivery**.
- Interactive item selection and customization (add/remove items prior to order confirmation).
- Real-time API persistence and retrieval of order details.

### B. Kitchen Order Processing
- Automated transmission of confirmed orders directly to the Kitchen Order Dashboard.
- Clear display of ordered food items and corresponding order details.
- Comprehensive status tracking through five distinct stages:
  - `Pending`
  - `Confirmed`
  - `Preparing`
  - `Ready`
  - `Completed`
- Immediate staff interaction to advance order progress.

### C. Digital Billing and Invoice System
- Automated bill generation calculated directly from confirmed order items.
- Guaranteed mathematical accuracy for totals and payment calculations.
- Tracking of **received amounts** and automatic calculation of **remaining balances**.
- Generation of printable invoices and receipts for customers.

### D. Table, Takeaway & Delivery Management
- Visual management of dine-in table allocations and orders.
- Systematic queue organization for takeaway orders.
- Recording of essential customer and address details for delivery orders.
- Order type identification and status lifecycle monitoring.

### E. Menu Management System
- Full administrative control: Add, update, and delete menu items.
- Item categorization (e.g., Starters, Main Courses, Beverages, Desserts).
- Real-time display of item name, pricing, and live availability toggling.
- Direct synchronization with the MongoDB database.

### F. Dashboard & Sales Reports
- High-level overview of daily order and sales summaries.
- Statistical breakdown of orders and revenue metrics.
- Complete archive of order transactions and billing histories.
- Basic operational reporting for restaurant management review.

---

## 4. User Roles and Stakeholders

SmartDine identifies three primary user roles within the restaurant environment:

| Role | Key Responsibilities & Access |
|---|---|
| **Cashier / Front Desk** | Create new orders (Dine-in, Takeaway, Delivery), edit order items before confirmation, record received amounts, compute balance, and print invoices. |
| **Kitchen Staff** | View incoming confirmed orders on the kitchen dashboard, inspect items and notes, and update order statuses (`Preparing`, `Ready`). |
| **Manager / Administrator** | Maintain menu items and categories, oversee table and delivery configurations, monitor system-wide orders, and analyze daily dashboard and sales summaries. |

---

## 5. Technology Stack Mapping

The architecture strictly adheres to the approved proposal stack:

- **Frontend:** React.js, HTML5, CSS3, Bootstrap, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tooling & Environment:** Visual Studio Code, Git & GitHub, Postman, npm

---

## 6. Implementation Schedule & Traceability

| Module | Module Title | Timeline |
|---|---|---|
| **Module 1** | Project Planning and Requirements Analysis | Weeks 1–2 |
| **Module 2** | UI/UX Design and Frontend Setup | Weeks 3–4 |
| **Module 3** | MERN Stack Environment Setup | Weeks 5–6 |
| **Module 4** | Database Design and Authentication | Weeks 7–8 |
| **Module 5** | Menu Management System | Weeks 9–10 |
| **Module 6** | Order Management System | Weeks 11–12 |
| **Module 7** | Billing and Invoice System | Weeks 13–14 |
| **Module 8** | Kitchen Order Processing | Weeks 15–16 |
| **Module 9** | Table, Takeaway, and Delivery Management | Weeks 17–18 |
| **Module 10**| Dashboard and Sales Reports | Weeks 19–20 |
| **Module 11**| Testing and Bug Fixing | Weeks 21–22 |
| **Module 12**| Final Integration and Documentation | Weeks 23–24 |

---

## 7. Project Boundaries

To maintain strict alignment with the approved CIT proposal:
- External payment gateways (e.g., Stripe, PayPal) are outside the project boundary; billing handles cash transactions, received amounts, and remaining balances.
- Online customer-facing mobile ordering apps, automated delivery GPS tracking, AI predictive inventory management, and multi-branch franchise systems are strictly out of scope.
