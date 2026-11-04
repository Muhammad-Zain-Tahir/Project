# Module 11 Plan: Testing and Bug Fixing

## 1. Technical Strategy & Tools

- **API Testing:** Postman test scripts and environment variables validating HTTP status codes, JSON schema structures, and data assertions.
- **Unit & Integration Testing:** Systematic test scripts located in `tests/api/` and `tests/integration/`.
- **Manual End-to-End Scenarios:** Simulated operational restaurant shifts executing cashier orders, kitchen processing, and billing checkout.

---

## 2. Test Execution Plan

```
[Phase 1: API & DB Layer Verification (Postman)]
                   │
                   ▼
[Phase 2: Mathematical Precision & Logic Checks (Billing Engine)]
                   │
                   ▼
[Phase 3: Frontend Component & Form Validation (React & Bootstrap)]
                   │
                   ▼
[Phase 4: Defect Remediation & Regression Testing]
```

---

## 3. Weekly Milestones (Weeks 21–22)

- **Week 21:**
  - Execute automated and manual test runs across all Express REST API routes using Postman.
  - Verify MongoDB database operations and data integrity rules under test workloads.
  - Test billing math engine with boundary cases (exact change, high received amounts, zero-cent items).
- **Week 22:**
  - Test frontend cross-device usability and responsive breakpoints.
  - Identify, log, and resolve detected functional defects and styling glitches.
  - Compile the formal Testing Report in `docs/testing-report.md`.
