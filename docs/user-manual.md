# SmartDine – Restaurant Staff User Manual

## 1. System Access & Authentication

SmartDine is accessible through web browsers (Chrome, Edge, Firefox) on POS terminals, kitchen tablets, and management workstations.

### Logging In
1. Navigate to the SmartDine application URL.
2. Enter your assigned **Username** and **Password**.
3. Click **Login**.
4. The system automatically redirects you to the interface permitted by your role (`Cashier`, `Kitchen`, or `Manager`).

---

## 2. Cashier Operations Guide

### 2.1 Creating a New Order
1. From the navigation bar, click **New Order**.
2. Select the **Order Type**:
   - **Dine-In:** Select an available Table number from the layout.
   - **Takeaway:** System automatically generates a pickup order ticket.
   - **Delivery:** Enter Customer Name, Phone Number, and Delivery Address.
3. Browse the menu categories or search for specific food items.
4. Click on an item to add it to the active order ticket on the right panel.

### 2.2 Modifying Order Items Before Confirmation
- **Adjust Quantities:** Use the `+` or `-` buttons beside each item.
- **Remove Items:** Click the trash icon to remove an unwanted item from the active ticket.
- **Review Total:** Verify item totals before proceeding.
- Click **Confirm Order** to finalize the order. Once confirmed, the order is dispatched immediately to the kitchen dashboard.

### 2.3 Generating Bills & Handling Payments
1. Open the **Orders** list and locate the customer order.
2. Click **Generate Bill**.
3. The system displays the automated breakdown:
   - Order items subtotal
   - Taxes
   - **Grand Total**
4. In the **Received Amount** field, enter the exact cash amount handed by the customer.
5. The system instantly computes the **Remaining Balance** (change to return).
6. Click **Complete Payment & Print Invoice**.
7. The browser print dialog opens, displaying a formatted receipt with restaurant name, date, order number, line items, received cash, and balance.

---

## 3. Kitchen Staff Operations Guide

### 3.1 Kitchen Order Dashboard
1. The kitchen dashboard displays all active orders in chronological queue order.
2. Each ticket card includes:
   - Order Number & Order Type (Dine-in / Takeaway / Delivery)
   - Table Number (if Dine-In)
   - List of items with specific quantities
   - Elapsed order time and current status badge

### 3.2 Updating Preparation Progress
- **Start Cooking:** Click **Start Preparing** when the station begins making the order (status changes to `Preparing`).
- **Mark Complete:** When the food is plated and ready for pickup, click **Mark Ready** (status changes to `Ready`).
- The cashier and floor staff are immediately notified of the updated status.

---

## 4. Restaurant Manager Guide

### 4.1 Menu Management
1. Click **Menu Management** from the manager navigation menu.
2. **Add Item:** Click *Add Menu Item*, fill in Item Name, Category, Price, and Description, then click *Save*.
3. **Update Item:** Click the edit icon on any item row to adjust pricing or details.
4. **Toggle Availability:** Use the *Available / Sold Out* switch to temporarily prevent sold-out items from being ordered.
5. **Delete Item:** Click *Delete* to permanently remove obsolete items.

### 4.2 Table, Takeaway & Delivery Management
- **Table Overview:** View live color-coded status of restaurant tables (`Available` in green, `Occupied` in red).
- **Takeaway & Delivery Queue:** Monitor active delivery dispatches and completed takeaway pickups.

### 4.3 Dashboard & Sales Reports
1. Navigate to **Dashboard**.
2. Review real-time operational summaries:
   - Today's Total Orders
   - Total Daily Sales Revenue
   - Completed Orders vs. Active Orders
3. View **Sales Reports** for detailed transaction history and order-type revenue distributions.
