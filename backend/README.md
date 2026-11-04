# SmartDine – Backend Application

> **Project:** SmartDine – Restaurant Ordering & Management System  
> **Student Name:** Muhammad Zain Tahir (Final Year CIT Project)  
> **Backend Framework:** Node.js & Express.js  
> **Database:** MongoDB

---

## 1. Overview & Architecture

The backend provides the centralized RESTful API service for SmartDine. It manages authentication, menu records, order lifecycles, kitchen dispatching, billing calculations, table occupancy, and managerial reporting.

The server is built with **Node.js** and **Express.js**, following a modular domain-driven MVC architecture where each business feature is isolated into its own self-contained module within `src/modules/`.

---

## 2. Directory Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection and event handling
│   ├── middleware/
│   │   ├── auth.middleware.js     # Token verification & role authorization
│   │   └── error.middleware.js    # Global error handler & status mapping
│   ├── modules/
│   │   ├── auth/                  # Authentication & credential validation
│   │   ├── billing/               # Billing, tax, received amount & balance
│   │   ├── delivery/              # Delivery customer details & tracking
│   │   ├── kitchen/               # Kitchen queue & status progress updates
│   │   ├── menu/                  # Menu items CRUD & category management
│   │   ├── orders/                # Dine-in, takeaway, & delivery order processing
│   │   ├── reports/               # Daily sales & order aggregation pipelines
│   │   ├── tables/                # Dine-in table status management
│   │   └── users/                 # Staff profiles & role definitions
│   ├── services/                  # Shared business logic services
│   ├── utils/
│   │   ├── api-response.js        # Standardized JSON response wrapper
│   │   └── async-handler.js       # Asynchronous route wrapper
│   ├── app.js                     # Express app setup, CORS, body parser
│   └── server.js                  # HTTP server bootstrap entry point
├── package.json
└── README.md
```

---

## 3. Configuration & Environment Variables

Create a `.env` file in the `backend/` directory or root workspace:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/smartdine
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

---

## 4. Running the Backend

From the project root:
```bash
npm run dev:backend
```

Or from within the `backend/` directory:
```bash
npm run dev
```

For production execution:
```bash
npm start
```

---

## 5. API Modules Reference

- **Auth & Users:** `/api/auth` — Registration, login, profile, and role access.
- **Menu Management:** `/api/menu` — CRUD operations for items and categories.
- **Orders:** `/api/orders` — Dine-in, takeaway, and delivery tickets.
- **Kitchen Processing:** `/api/kitchen` — Active queue and status transitions.
- **Billing & Invoice:** `/api/billing` — Mathematical totals, received cash, balance due.
- **Tables & Delivery:** `/api/tables`, `/api/delivery` — Tables and delivery details.
- **Reports & Dashboard:** `/api/reports` — Daily sales statistics and transaction logs.
