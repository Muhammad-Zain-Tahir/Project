import React, { useState, useEffect } from 'react';
import api from './services/api';

function App() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/health');
      setHealth(res.data || res);
    } catch (err) {
      setError(err.message || 'Unable to connect to backend server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="min-vh-100 bg-light d-flex flex-column">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#!">
            <span className="badge bg-danger me-2">SD</span>
            SmartDine
          </a>
          <span className="navbar-text text-light small">
            Final Year CIT Project &bull; Muhammad Zain Tahir
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header Banner */}
            <div className="card shadow-sm border-0 mb-4 bg-white">
              <div className="card-body p-4 text-center">
                <h1 className="h3 fw-bold text-dark mb-2">🍽️ SmartDine Restaurant Management System</h1>
                <p className="text-muted mb-3">
                  Spec-Driven Development (SDD) &bull; MERN Stack Environment (Module 3 Active)
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <span className="badge bg-primary px-3 py-2">MongoDB</span>
                  <span className="badge bg-secondary px-3 py-2">Express.js</span>
                  <span className="badge bg-info text-dark px-3 py-2">React.js</span>
                  <span className="badge bg-success px-3 py-2">Node.js</span>
                  <span className="badge bg-dark px-3 py-2">Bootstrap 5</span>
                </div>
              </div>
            </div>

            {/* System Health Check Status */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-semibold text-secondary">
                  System Connection & Health Status
                </h5>
                <button 
                  className="btn btn-sm btn-outline-primary" 
                  onClick={checkHealth}
                  disabled={loading}
                >
                  {loading ? 'Checking...' : 'Re-check Connection'}
                </button>
              </div>
              <div className="card-body p-4">
                {loading ? (
                  <div className="d-flex align-items-center justify-content-center py-4">
                    <div className="spinner-border text-primary me-3" role="status"></div>
                    <span className="text-muted">Probing backend API (/api/health)...</span>
                  </div>
                ) : error ? (
                  <div className="alert alert-warning mb-0" role="alert">
                    <h6 className="alert-heading fw-bold">⚠️ Backend API Not Detected</h6>
                    <p className="mb-1 text-sm">{error}</p>
                    <hr />
                    <p className="mb-0 small text-muted">
                      Ensure the backend server is running on port <code>5000</code> with MongoDB active.
                    </p>
                  </div>
                ) : (
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="p-3 border rounded bg-light text-center">
                        <small className="text-muted d-block mb-1">Backend API</small>
                        <span className="badge bg-success fs-6">
                          ● {health?.status || 'ONLINE'}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-3 border rounded bg-light text-center">
                        <small className="text-muted d-block mb-1">Database</small>
                        <span className="badge bg-success fs-6">
                          ● {health?.database || 'MongoDB Connected'}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-3 border rounded bg-light text-center">
                        <small className="text-muted d-block mb-1">Server Uptime</small>
                        <span className="fw-bold text-dark">
                          {health?.uptime ? `${Math.round(health.uptime)}s` : 'Active'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modules Overview */}
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-bold text-primary mb-2">Module 1–3: Foundation</h6>
                    <ul className="list-unstyled small text-muted mb-0">
                      <li>✅ Project Planning &amp; Spec Kit</li>
                      <li>✅ UI/UX Architecture</li>
                      <li>✅ MERN Stack Setup (Live)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-bold text-primary mb-2">Module 4–6: Core Operations</h6>
                    <ul className="list-unstyled small text-muted mb-0">
                      <li>⏳ Auth &amp; Role Management</li>
                      <li>⏳ Menu Management</li>
                      <li>⏳ Dine-In / Takeaway / Delivery</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-bold text-primary mb-2">Module 7–12: Workflow &amp; Admin</h6>
                    <ul className="list-unstyled small text-muted mb-0">
                      <li>⏳ Billing &amp; Invoicing</li>
                      <li>⏳ Kitchen Display System</li>
                      <li>⏳ Sales Dashboard &amp; Reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-top py-3 text-center text-muted small">
        <div className="container">
          SmartDine &copy; {new Date().getFullYear()} &bull; Final Year CIT Project by Muhammad Zain Tahir
        </div>
      </footer>
    </div>
  );
}

export default App;

