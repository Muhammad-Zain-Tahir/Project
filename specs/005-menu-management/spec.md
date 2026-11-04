# Module 5 Specification: Menu Management System

## 1. Traceability to Original Proposal
- **Module:** Module 5: Menu Management System (Weeks 9–10)
- **Original Proposal Items:**
  1. Add, update, and delete menu items.
  2. Organize items by categories.
  3. Display item names, prices, and availability.
  4. Connect menu management with MongoDB.

---

## 2. Functional & Technical Requirements

### 2.1 Menu Item Operations (CRUD)
- **Add Item:** Manager can submit a new menu item with Name, Category, Description, Price (numerical, non-negative), and Availability status (`true`/`false`).
- **Update Item:** Manager can edit item details, update pricing, or alter category allocation.
- **Delete Item:** Manager can delete items that are no longer offered by the restaurant.
- **Availability Toggle:** Immediate toggling of `isAvailable` (e.g., mark as "Sold Out" without deleting the record).

### 2.2 Category Organization
- Organize menu items under structured categories (e.g., Starters, Main Course, Fast Food, Beverages, Desserts).
- Support retrieving items grouped or filtered by category.

### 2.3 Presentation & Visibility
- Display food cards and catalog lists with prominent item names, formatted currency prices, category badges, and availability indicators.
- Unavailable items must be visually distinct (e.g., grayed out badge) and disabled from being added to cashier tickets.

### 2.4 Database Connection
- Connect all CRUD and query operations directly to MongoDB `menu_items` and `categories` collections.
