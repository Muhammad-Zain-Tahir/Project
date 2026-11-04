# Module 3 Plan: MERN Stack Environment Setup

## 1. Technical Strategy & Configuration

- **Folder Segregation:** Maintain absolute decoupling between `backend/` and `frontend/` folders.
- **Environment Management:** Use `.env` files for port numbers, MongoDB URI, and JWT secrets. Provide `.env.example` templates with safe defaults.
- **Dependency Management:** Utilize `npm` exclusively, as mandated in the proposal.

---

## 2. Architecture & File Configuration Plan

```
backend/
├── src/
│   ├── config/db.js          # MongoDB connection handler
│   ├── middleware/           # CORS, json parser, error middleware
│   ├── app.js                # Express app setup and route mounting
│   └── server.js             # Server listener entry point
├── package.json
└── .env.example

frontend/
├── src/                      # React application sources
├── package.json
├── vite.config.js
└── .env.example
```

---

## 3. Weekly Milestones (Weeks 5–6)

- **Week 5:**
  - Initialize Node.js environment and configure Express server (`server.js`, `app.js`).
  - Configure MongoDB connection module with connection status logging.
  - Implement basic health check endpoint (`GET /api/health`).
- **Week 6:**
  - Initialize and configure React application.
  - Establish Axios/Fetch API client wrapper for backend communication.
  - Test end-to-end connectivity between React frontend, Express API, and MongoDB.
