# Module 4 Specification: Database Design and Authentication

## 1. Traceability to Original Proposal
- **Module:** Module 4: Database Design and Authentication (Weeks 7–8)
- **Original Proposal Items:**
  1. Design MongoDB collections for users, menu items, and orders.
  2. Develop user registration and login functionality.
  3. Implement role-based access for authorized users.
  4. Configure backend validation and error handling.

---

## 2. Functional & Technical Requirements

### 2.1 MongoDB Collections Design
- **`users` Collection:** Stores user identity, hashed passwords, role (`manager`, `cashier`, `kitchen`), and activity flag.
- **`menu_items` Collection:** Stores food names, category reference, descriptions, prices, and availability flags.
- **`orders` Collection:** Stores order numbers, order types (`dine-in`, `takeaway`, `delivery`), line items, total amounts, and lifecycle statuses (`Pending`, `Confirmed`, `Preparing`, `Ready`, `Completed`).

### 2.2 User Registration & Login Functionality
- **Registration:** Accepts name, username, email, password, and role. Ensures username and email uniqueness. Enforces secure password hashing (bcrypt).
- **Login:** Verifies credentials, generates signed JWT token with user id and role payload, and returns user profile.

### 2.3 Role-Based Access Control (RBAC)
- **Roles:**
  - `cashier`: Access to order creation, billing, tables, order list.
  - `kitchen`: Access to kitchen order processing display and status transition controls.
  - `manager`: Full administrative privileges (menu editing, staff accounts, financial reports).
- **Middleware:** `auth.middleware.js` extracts and verifies bearer tokens; `authorizeRole(...)` restricts route access according to required role.

### 2.4 Backend Validation & Centralized Error Handling
- Validate all incoming request bodies (required fields, string formats, minimum lengths).
- Standardized error response format across all controllers (`{ success: false, error: message }`).
- Handle 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, and 500 Internal Server Error cleanly.
