# SmartDine – REST API Documentation

## 1. Overview & Conventions

The SmartDine REST API is powered by **Node.js** and **Express.js**. All request and response bodies use standard `application/json` formatting. 

- **Base URL:** `http://localhost:5000/api`
- **Authentication:** Bearer token in the `Authorization` header (`Authorization: Bearer <token>`).
- **Standard Success Response Format:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```
- **Standard Error Response Format:**
```json
{
  "success": false,
  "error": "Error description",
  "details": []
}
```

---

## 2. Authentication & Users API

### `POST /api/auth/register`
Creates a new staff account (manager-only or initial setup).
- **Request Body:**
```json
{
  "name": "Staff Name",
  "username": "cashier1",
  "email": "cashier1@smartdine.local",
  "password": "securepassword",
  "role": "cashier"
}
```
- **Response (201 Created):**
```json
{
  "success": true,
  "data": { "userId": "654321...", "username": "cashier1", "role": "cashier" }
}
```

### `POST /api/auth/login`
Authenticates credentials and issues a session token.
- **Request Body:**
```json
{ "username": "cashier1", "password": "securepassword" }
```
- **Response (200 OK):**
```json
{
  "success": true,
  "token": "jwt-token-string",
  "user": { "id": "654321...", "name": "Staff Name", "role": "cashier" }
}
```

---

## 3. Menu Management API

### `GET /api/menu`
Retrieves all menu items, optionally filtered by category or availability.
- **Query Params:** `?category=Starters&available=true`
- **Response (200 OK):** List of menu item objects.

### `POST /api/menu`
Adds a new item to the restaurant menu.
- **Request Body:**
```json
{
  "name": "Chicken Burger",
  "categoryId": "64ef81...",
  "description": "Grilled chicken breast with lettuce and tomato",
  "price": 8.50,
  "isAvailable": true
}
```
- **Response (201 Created):** Created item object.

### `PUT /api/menu/:id`
Updates an existing menu item's price, details, or availability status.

### `DELETE /api/menu/:id`
Removes a menu item from the catalog.

---

## 4. Order Management API

### `POST /api/orders`
Creates a new restaurant order ticket.
- **Request Body:**
```json
{
  "orderType": "dine-in",
  "tableNumber": "T-04",
  "items": [
    { "menuItemId": "64ef81...", "name": "Chicken Burger", "price": 8.50, "quantity": 2 }
  ]
}
```
- **Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "orderNumber": "ORD-10024",
    "orderType": "dine-in",
    "tableNumber": "T-04",
    "status": "Pending",
    "totalAmount": 17.00
  }
}
```

### `GET /api/orders`
Retrieves orders with optional filters for `orderType` or `status`.

### `PUT /api/orders/:id`
Edits order items (add or remove items) prior to order confirmation.

### `PUT /api/orders/:id/status`
Updates order status across: `Pending`, `Confirmed`, `Preparing`, `Ready`, `Completed`.

---

## 5. Kitchen Order Processing API

### `GET /api/kitchen/active`
Retrieves all orders currently in kitchen workflow (`Confirmed`, `Preparing`, `Ready`).
- **Response (200 OK):** List of active kitchen tickets with items and order timestamps.

### `PUT /api/kitchen/:orderId/status`
Updates preparation status by kitchen staff.
- **Request Body:** `{ "status": "Preparing" }` or `{ "status": "Ready" }`
- **Response (200 OK):** Updated order status details.

---

## 6. Billing and Invoice API

### `POST /api/billing/generate/:orderId`
Generates an official bill and records payment received.
- **Request Body:**
```json
{
  "receivedAmount": 20.00
}
```
- **Calculations performed on backend:**
  - `subtotal` = Sum of items
  - `grandTotal` = `subtotal` + taxes
  - `remainingBalance` = `receivedAmount` - `grandTotal`
- **Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "invoiceNumber": "INV-2026-0042",
    "orderNumber": "ORD-10024",
    "subtotal": 17.00,
    "grandTotal": 17.00,
    "receivedAmount": 20.00,
    "remainingBalance": 3.00,
    "paymentStatus": "Paid"
  }
}
```

### `GET /api/billing/invoice/:invoiceNumber`
Returns full invoice and order details formatted for printing.

---

## 7. Table & Delivery Management API

### `GET /api/tables`
Returns real-time status (`Available`, `Occupied`, `Reserved`) for all tables.

### `PUT /api/tables/:id/status`
Updates table occupancy and links or clears current order reference.

### `GET /api/delivery/orders`
Retrieves pending and active delivery orders including customer addresses and contact info.

---

## 8. Dashboard & Reports API

### `GET /api/reports/daily-summary`
Provides high-level metrics for the manager dashboard.
- **Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "totalOrdersToday": 48,
    "completedOrders": 42,
    "activeOrders": 6,
    "totalRevenueToday": 894.50
  }
}
```

### `GET /api/reports/sales-statistics`
Returns category-wise and order-type revenue distributions.

### `GET /api/reports/transactions`
Retrieves chronological transaction logs for financial audits.
