# SmartDine Project Constitution

## Project Identity & Governance

- **Project Title:** SmartDine – Restaurant Ordering & Management System
- **Student Name:** Muhammad Zain Tahir
- **Project Type:** Final Year CIT Project
- **Duration:** 6 Months (24 Weeks)
- **Technology Stack:** MERN Stack (MongoDB, Express.js, React.js, Node.js, Bootstrap, CSS3, HTML5, JavaScript)
- **Primary Source of Truth:** Original Project Proposal PDF

---

## Core Development Rules

1. **Follow Spec-Driven Development (SDD):** Always specify and plan before writing implementation code.
2. **Strict Proposal Alignment:** The original 12 modules, their 24-week timeline, and the original bullet points are immutable boundaries. Any feature, technology, role, or integration not explicitly approved by the original project proposal must not be introduced.
3. **Approved Technology Stack Only:** Work strictly within MERN (MongoDB, Express.js, React.js, Node.js) with Bootstrap and CSS3. Do not introduce unauthorized alternatives or frameworks.
4. **Specification Precedence:** Every feature must trace back to its corresponding specification file in `specs/<module>/spec.md`.
5. **Modular and Reusable Architecture:** Code and modules must remain decoupled, following standard Node/Express backend routing and React component design.
6. **Consistent Naming & Formatting:** Maintain unified file naming conventions, RESTful API conventions, and clean code standards.
7. **Input Validation & Security:** Validate all user inputs on both frontend and backend; sanitize MongoDB queries; store secrets and keys strictly in `.env`.
8. **Test & Verify First:** Test APIs using Postman and functional components before marking any module task complete in `checklist.md`.
9. **Documentation Integrity:** Preserve documentation currency, ensuring `spec.md`, `plan.md`, `tasks.md`, and `checklist.md` stay synchronised.

---

## AI Collaboration & Code Protection Rules

1. **Proposal Authority & Scope Preservation:** Preserve the exact project title, description, all 12 modules, module sequence, 24-week timeline, approved MERN stack, and expected outcome. Never add, remove, or modify any proposal-defined feature or requirement without explicit user approval.
2. **Code Protection:** Never delete, overwrite, rename, or replace existing working code without explicit user approval.
3. **Inspect Before Action:** Always inspect existing repository files, modules, and directories before creating or modifying anything.
4. **Preserve Multi-Developer Contributions:** Preserve code, configurations, and documentation written by other AI tools, assistants, and human developers.
5. **Anti-Duplication:** Always check for duplicate components, API routes, models, helper functions, and files before authoring new ones.
6. **Config & Schema Protection:** Do not modify shared configurations, package manifests (`package.json`), database schemas, or established API contracts without explicit user approval.
7. **Dependency Discipline:** Do not install, remove, or upgrade package dependencies without explicit approval.
8. **Module Isolation:** Work strictly on the currently assigned module. Do not make unprompted changes across neighboring modules.
9. **Conflict Escalation:** If conflicting implementations or architectural divergences are encountered, explain the conflict to the user and request direction before altering code.
10. **Test Verification:** Run relevant tests (automated suites, manual verification, or Postman requests) after implementation.
11. **Truthful Checklist State:** Never mark tasks or checklist items complete (`[x]`) without actual source code implementation and functional verification.
12. **Environment & Secret Hygiene:** Never expose credentials, API keys, authentication tokens, or private secrets. Never stage or commit `.env` files.
13. **Safe Git Operations:** Do not commit, push, rebase, or perform destructive Git operations without explicit user approval.
14. **Audit Reporting:** Report all created, modified, and deleted files with their status after completing every task.
15. **Collaborative Rules Alignment:** Ensure all AI coding agents adhere to the rules codified in `.agents/rules/collaboration-rules.md`.
