# Module 9 Specification: Table, Takeaway, and Delivery Management

## 1. Traceability to Original Proposal
- **Module:** Module 9: Table, Takeaway, and Delivery Management (Weeks 17–18)
- **Original Proposal Items:**
  1. Manage dine-in table orders.
  2. Organize takeaway orders.
  3. Record delivery details where required.
  4. Track order types and their statuses.

---

## 2. Functional & Technical Requirements

### 2.1 Dine-In Table Management
- Maintain registry of tables with table number, seating capacity, and occupancy status (`Available`, `Occupied`, `Reserved`).
- Linking: When an order is placed for Table 4, the table is automatically marked as `Occupied` and references the active order ID.
- Releasing: When the customer settles the bill and the order status reaches `Completed`, the table is automatically reset to `Available`.

### 2.2 Takeaway Orders Organization
- Orders marked as `takeaway` receive sequential pickup identification.
- Separate queue viewing for takeaway tickets to alert front counter staff when orders become `Ready`.

### 2.3 Delivery Details Recording
- Delivery orders require customer information fields:
  - Customer Full Name
  - Contact Telephone Number
  - Delivery Street Address & Locality
  - Optional delivery instructions/notes
- Prevents submission if mandatory address or contact details are missing.

### 2.4 Multi-Channel Tracking
- Cashiers and managers can view orders filtered by type (`dine-in`, `takeaway`, `delivery`) alongside real-time lifecycle status badges.
