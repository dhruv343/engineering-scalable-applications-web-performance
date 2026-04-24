import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import RouterConfig from './RouterConfig.jsx';
import LazyLoader from './LazyLoader.jsx';

// AppShell is a lightweight container that loads instantly. It uses React.lazy and Suspense for code splitting.
// Concept: AppShell Architecture - Separates the shell from features to improve initial load time.
// Governance: No direct feature imports here; features are lazy-loaded.
function AppShell() {
  return (
    <Router>
      <AppShellContent />
    </Router>
  );
}

function AppShellContent() {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState('/');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/feature-a', label: 'Feature A' },
    { path: '/feature-b', label: 'Feature B' },
    { path: '/feature-c', label: 'Feature C' },
    { path: '/sequential', label: 'Sequential' },
    { path: '/parallel', label: 'Parallel' },
    { path: '/barrel', label: 'Barrel Import' },
    { path: '/optimized', label: 'Optimized Import' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <div className="app-container">
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1>Performance Demo</h1>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.path} className="nav-item">
                <a
                  href={item.path}
                  className={`nav-link ${activeRoute === item.path ? 'active' : ''}`}
                  onClick={closeSidebar}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="main-content" onClick={closeSidebar}>
        <Suspense fallback={
          <div className="demo-card">
            <div className="loading">
              <div className="spinner"></div>
              Loading feature...
            </div>
          </div>
        }>
          <Routes>
            {RouterConfig.map(({ path, component }) => (
              <Route key={path} path={path} element={<LazyLoader component={component} />} />
            ))}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default AppShell;