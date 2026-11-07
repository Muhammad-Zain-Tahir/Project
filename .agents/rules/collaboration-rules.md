---
trigger: always_on
glob: "**/*"
description: "AI collaboration, code protection, and Spec-Driven Development governance rules for SmartDine"
---

# SmartDine – AI Collaboration & Code Protection Rules

> **Project Authority:** Original SmartDine Project Proposal PDF (Muhammad Zain Tahir – CIT Final Year Project)  
> **Applicability:** All AI assistants, coding agents, and collaborating developers.

---

## 1. Single Source of Truth & Proposal Scope Preservation
1. **Preserve Project Core:** Strictly maintain the exact project title (*SmartDine – Restaurant Ordering & Management System*), project description, all 12 modules, their numerical sequence, the 24-week timeline, approved MERN technologies, and the expected outcome.
2. **Zero Unauthorized Scope Changes:** Never add, remove, or modify any proposal-defined feature or requirement without explicit user approval. Any feature, technology, role, or integration not explicitly approved by the original project proposal must not be introduced.

---

## 2. Code Protection & Non-Destructive Operations
3. **Protect Existing Working Code:** Never delete, overwrite, rename, or replace existing working code without explicit user approval.
4. **Inspect First:** Always inspect existing repository files and module contents before creating or modifying any file.
5. **Preserve Multi-Developer Code:** Preserve all code written by other AI tools, assistants, and human developers.
6. **Prevent Duplication:** Check for existing duplicate components, utility functions, API routes, models, and files before authoring new ones.
7. **Protect Shared Configurations:** Do not modify shared configuration files, root/subpackage `package.json` manifests, database schemas, or established API contracts without explicit user approval.
8. **Dependency Stability:** Do not install, remove, or upgrade dependencies without explicit user authorization.

---

## 3. Module Isolation & Conflict Resolution
9. **Single-Module Focus:** Work only on the assigned module. Never perform unprompted changes across neighboring modules.
10. **Conflict Escalation:** If conflicting implementations or architectural divergences are discovered, explain the exact conflict to the user and request guidance before altering any code.

---

## 4. Verification, Testing & State Discipline
11. **Verify Implementation:** Run relevant tests (automated suites, manual verification, or Postman requests) after implementing any functional logic.
12. **Truthful Task Checklists:** Never mark tasks or checklist criteria complete (`[x]`) without actual source code implementation and functional verification.

---

## 5. Security, Git Operations & Reporting
13. **Environment Security:** Never expose secrets, credentials, authentication tokens, or private keys. Never stage or commit `.env` files.
14. **Safe Git Operations:** Do not commit, push, rebase, or perform destructive Git operations without explicit user approval.
15. **Transparent Reporting:** Report every created, modified, or deleted file and its operational status after completing any task.

