# Module 2 Specification: UI/UX Design and Frontend Setup

## 1. Traceability to Original Proposal
- **Module:** Module 2: UI/UX Design and Frontend Setup (Weeks 3–4)
- **Original Proposal Items:**
  1. Design the SmartDine user interface.
  2. Create responsive layouts using React.js, CSS3, and Bootstrap.
  3. Develop the navigation system and dashboard layout.
  4. Establish the frontend project structure.

---

## 2. Interface Design Specifications

### 2.1 Design Principles
- **Operational Clarity:** High-contrast buttons, legible typography, and intuitive color-coding for order statuses.
- **Speed & Touch-Friendly:** Large tap targets designed for touch-screen POS terminals and kitchen wall tablets.
- **Responsive Adaptability:** Mobile-friendly, tablet-responsive, and optimized for widescreen POS setups using Bootstrap grid systems.

### 2.2 Core Views & Wireframe Layouts
1. **Cashier Point of Sale (POS) View:**
   - Left Panel: Category tabs and food item cards with live pricing.
   - Right Panel: Active order ticket displaying line items, quantity modifiers (`+`/`-`), trash button, subtotal, and confirm button.
2. **Kitchen Order Display (KDS) View:**
   - Card grid layout of active tickets displaying order ID, type, timer, items, and action buttons (`Start Preparing`, `Mark Ready`).
3. **Manager Dashboard View:**
   - Top Stat Cards: Today's Total Orders, Gross Sales, Active Orders, Table Occupancy.
   - Main Body: Recent order activity table and category performance breakdown.
4. **Billing & Invoice Modal / View:**
   - Clean printable view formatting with restaurant headers, itemized breakdown, received amount, and balance due.

### 2.3 Navigation System
- Role-based navigation sidebar/header displaying authorized links:
  - Cashier: `New Order`, `Orders`, `Tables`
  - Kitchen: `Kitchen Dashboard`
  - Manager: `Dashboard`, `Menu Management`, `Orders`, `Reports`, `Staff`
