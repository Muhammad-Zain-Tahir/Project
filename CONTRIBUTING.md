# Contributing to SmartDine

Thank you for your interest in the **SmartDine – Restaurant Ordering & Management System**. This project is a Final Year CIT Project developed by **Muhammad Zain Tahir** following **Spec-Driven Development (SDD)** principles.

To maintain architectural integrity and alignment with the academic project proposal, all contributions and updates must strictly adhere to the guidelines set out below.

---

## 1. Single Source of Truth: Original Proposal

SmartDine is bound strictly to the **Original Project Proposal PDF**. The project scope, duration (6 Months / 24 Weeks), technology stack (MERN: MongoDB, Express.js, React.js, Node.js, Bootstrap, CSS3, HTML5), and the 12 development modules are fixed.

- **Do not** introduce unauthorized libraries or alternative frameworks (e.g., Next.js, TypeScript, PostgreSQL, Firebase).
- **Do not** introduce unapproved features (e.g., online payment gateways, AI recommendations, customer loyalty systems, multi-branch support, inventory management).
- **Do not** alter module names, weekly schedules, or original proposal objectives.

---

## 2. Spec-Driven Development (SDD) Workflow

SmartDine enforces a strict **specification-before-implementation** lifecycle for each of the 12 modules:

```
[Module Specification (spec.md)]
              │
              ▼
    [Technical Plan (plan.md)]
              │
              ▼
   [Task Breakdown (tasks.md)]
              │
              ▼
[Implementation & Testing (Code)]
              │
              ▼
[Verification Checklist (checklist.md)]
```

### The 5 Essential Module Documents:
Every module directory inside `specs/` (e.g., `specs/001-project-planning/`) contains:
1. `README.md` — Overview of the module, mapping to the original proposal, and weekly timeline.
2. `spec.md` — Functional requirements, user stories, and acceptance criteria ("What").
3. `plan.md` — Architectural choices, data schemas, API contracts, and component designs ("How").
4. `tasks.md` — Granular, actionable steps required for implementation.
5. `checklist.md` — Quality assurance and verification checklist to sign off the module.

---

## 3. Branching & Commit Conventions

When creating branches or commits:
- Feature Branches: `feature/module-<number>-<short-description>` (e.g., `feature/module-005-menu-management`)
- Bugfix Branches: `fix/<issue-description>`
- Documentation Branches: `docs/<description>`

### Commit Messages
Follow clear semantic commit messages:
- `docs: update module 004 authentication specification`
- `feat: implement order calculation logic in billing service`
- `fix: resolve remaining balance calculation error`
- `test: add API test suite for kitchen status transitions`

---

## 4. Code & Documentation Guidelines

- **Documentation Language:** Clear, professional English using standard Markdown formatting.
- **Code Style:** Clean JavaScript (ES6+), following standard modular Node.js/Express MVC patterns and idiomatic React functional components with hooks.
- **Styling:** Bootstrap and CSS3 responsive layout practices.
- **Validation:** Always validate request payloads on the backend and input controls on the frontend.
- **Security:** Keep sensitive variables in `.env` files (e.g., MongoDB connection strings, JWT secrets). Never commit secrets.

---

## 5. Submitting Changes

1. Ensure the module specification and verification checklist in `specs/` are fully satisfied.
2. Verify that all tests pass and API endpoints function correctly in Postman.
3. Open a Pull Request referencing the relevant module and fill out the provided [Pull Request Template](file:///.github/pull_request_template.md).
