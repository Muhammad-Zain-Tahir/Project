# SmartDine – Database Design Document

## 1. Overview

SmartDine utilizes **MongoDB** as its primary document-oriented NoSQL database. The schema design models restaurant operational entities, relationships, indexes, and validation rules strictly derived from the **Project Proposal PDF**.

---

## 2. Entity Collections & Schemas

### 2.1 Collection: `users`
Stores user credentials and role allocations for restaurant personnel.

```json
{
  "_id": "ObjectId",
  "name": "String (required, trim: true)",
  "username": "String (required, unique: true, lowercase: true)",
  "email": "String (required, unique: true, lowercase: true)",
  "password": "String (required, hashed)",
  "role": {
    "type": "String",
    "enum": ["manager", "cashier", "kitchen"],
    "default": "cashier"
  },
  "isActive": "Boolean (default: true)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 2.2 Collection: `categories`
Groups food and beverage items into logical menu sections.

```json
{
  "_id": "ObjectId",
  "name": "String (required, unique: true, trim: true)",
  "description": "String",
  "displayOrder": "Number (default: 0)",
  "isActive": "Boolean (default: true)",
  "createdAt": "Date"
}
```

### 2.3 Collection: `menu_items`
Maintains the complete food catalog with pricing and real-time availability.

```json
{
  "_id": "ObjectId",
  "name": "String (required, trim: true)",
  "categoryId": "ObjectId (ref: 'categories', required: true)",
  "description": "String",
  "price": "Number (required, min: 0)",
  "isAvailable": "Boolean (default: true)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 2.4 Collection: `orders`
Captures all restaurant customer orders across Dine-in, Takeaway, and Delivery.

```json
{
  "_id": "ObjectId",
  "orderNumber": "String (required, unique: true)",
  "orderType": {
    "type": "String",
    "enum": ["dine-in", "takeaway", "delivery"],
    "required": true
  },
  "tableNumber": "String (optional, for dine-in)",
  "customerName": "String (optional for dine-in/takeaway, required for delivery)",
  "customerPhone": "String (optional for dine-in/takeaway, required for delivery)",
  "deliveryAddress": "String (required if orderType === 'delivery')",
  "items": [
    {
      "menuItemId": "ObjectId (ref: 'menu_items', required: true)",
      "name": "String (required)",
      "price": "Number (required, min: 0)",
      "quantity": "Number (required, min: 1)",
      "itemTotal": "Number (required)"
    }
  ],
  "totalAmount": "Number (required, min: 0)",
  "status": {
    "type": "String",
    "enum": ["Pending", "Confirmed", "Preparing", "Ready", "Completed"],
    "default": "Pending"
  },
  "createdBy": "ObjectId (ref: 'users')",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 2.5 Collection: `bills`
Records financial transactions, invoice generation, received funds, and remaining balances.

```json
{
  "_id": "ObjectId",
  "invoiceNumber": "String (required, unique: true)",
  "orderId": "ObjectId (ref: 'orders', required: true, unique: true)",
  "orderNumber": "String (required)",
  "subtotal": "Number (required, min: 0)",
  "taxAmount": "Number (default: 0, min: 0)",
  "grandTotal": "Number (required, min: 0)",
  "receivedAmount": "Number (required, min: 0)",
  "remainingBalance": "Number (required)",
  "paymentStatus": {
    "type": "String",
    "enum": ["Paid", "Pending"],
    "default": "Paid"
  },
  "cashierId": "ObjectId (ref: 'users', required: true)",
  "issuedAt": "Date (default: Date.now)"
}
```

### 2.6 Collection: `tables`
Tracks physical dine-in tables and occupancy status.

```json
{
  "_id": "ObjectId",
  "tableNumber": "String (required, unique: true)",
  "capacity": "Number (required, min: 1)",
  "status": {
    "type": "String",
    "enum": ["Available", "Occupied", "Reserved"],
    "default": "Available"
  },
  "currentOrderId": "ObjectId (ref: 'orders', default: null)"
}
```

---

## 3. Data Relationships

- **User ➔ Orders:** One-to-Many (`users._id` ➔ `orders.createdBy`).
- **Category ➔ Menu Items:** One-to-Many (`categories._id` ➔ `menu_items.categoryId`).
- **Order ➔ Menu Items:** Many-to-Many embedded (`orders.items[].menuItemId` ➔ `menu_items._id`).
- **Order ➔ Bill:** One-to-One (`orders._id` ➔ `bills.orderId`).
- **Table ➔ Order:** One-to-One active relationship (`tables.currentOrderId` ➔ `orders._id`).

---

## 4. Indexing Strategy

To guarantee rapid query response times during busy restaurant hours, the following indexes are defined:

| Collection | Indexed Fields | Index Type | Purpose |
|---|---|---|---|
| `users` | `username: 1`, `email: 1` | Unique | Fast credential lookup & uniqueness |
| `menu_items` | `categoryId: 1, isAvailable: 1` | Compound | Fast menu filtering by category & availability |
| `orders` | `orderNumber: 1` | Unique | Direct order lookups |
| `orders` | `status: 1, createdAt: -1` | Compound | Rapid kitchen queue & cashier active list |
| `orders` | `orderType: 1` | Single | Filter dine-in vs takeaway vs delivery |
| `bills` | `invoiceNumber: 1` | Unique | Rapid invoice lookup |
| `bills` | `issuedAt: -1` | Single | Daily sales report aggregation |
| `tables` | `tableNumber: 1` | Unique | Direct table identity lookups |

---

## 5. Data Validation & Integrity Rules

1. **Balance Equation:** For every bill document, `remainingBalance` must strictly equal `receivedAmount - grandTotal`.
2. **Order Item Integrity:** Quantities must be positive integers (`min: 1`).
3. **Status Transitions:** Orders cannot jump backwards from `Completed` to `Pending`.
4. **Delivery Validation:** Delivery orders require valid customer name, phone number, and street address.
