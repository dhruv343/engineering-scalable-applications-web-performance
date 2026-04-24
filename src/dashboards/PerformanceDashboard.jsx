import React from 'react';

// PerformanceDashboard provides an overview of performance concepts.
// Concept: Performance monitoring and optimization overview.
function PerformanceDashboard() {
  const performanceConcepts = [
    {
      title: 'AppShell Architecture',
      description: 'Lightweight shell loads instantly, features load on-demand',
      status: '✅ Implemented',
      icon: '🏗️'
    },
    {
      title: 'Sequential vs Parallel Fetching',
      description: 'Compare fetch strategies for optimal performance',
      status: '✅ Demonstrated',
      icon: '⚡'
    },
    {
      title: 'Import Optimization',
      description: 'Tree-shaking and efficient module loading',
      status: '✅ Showcased',
      icon: '📦'
    },
    {
      title: 'Code Splitting',
      description: 'Lazy loading of features and components',
      status: '✅ Active',
      icon: '✂️'
    }
  ];

  return (
    <div>
      <div className="header">
        <h1>Performance Dashboard</h1>
        <p>Overview of implemented performance optimizations</p>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="stat-value">4</span>
          <span className="stat-label">Concepts</span>
        </div>
        <div className="stat">
          <span className="stat-value">Vite</span>
          <span className="stat-label">Build Tool</span>
        </div>
        <div className="stat">
          <span className="stat-value">React</span>
          <span className="stat-label">Framework</span>
        </div>
        <div className="stat">
          <span className="stat-value">2026</span>
          <span className="stat-label">Year</span>
        </div>
      </div>

      <div className="demo-card">
        <h2 className="demo-title">Performance Concepts Overview</h2>
        <div className="concept-explanation">
          <strong>Concept:</strong> Performance engineering involves multiple strategies to optimize web application loading and runtime performance. This dashboard provides an overview of the key concepts demonstrated in this application.
        </div>

        <div className="metrics-grid">
          {performanceConcepts.map((concept, index) => (
            <div key={index} className="metric-card">
              <div className="metric-name" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{concept.icon}</span>
                {concept.title}
              </div>
              <div className="metric-value" style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {concept.status}
              </div>
              <div className="metric-time" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                {concept.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-card" style={{ marginTop: '2rem' }}>
        <h2 className="demo-title">Key Performance Benefits</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: 'var(--border-radius)', border: '1px solid var(--accent-color)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>🚀 Faster Initial Load</h3>
            <p style={{ margin: 0, color: 'var(--text-primary)' }}>
              AppShell architecture provides instant interactivity while features load in the background.
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: 'var(--border-radius)', border: '1px solid var(--warning-color)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>⚡ Optimized Data Fetching</h3>
            <p style={{ margin: 0, color: 'var(--text-primary)' }}>
              Parallel API calls reduce total loading time compared to sequential requests.
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', borderRadius: 'var(--border-radius)', border: '1px solid var(--accent-color)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>📦 Smaller Bundles</h3>
            <p style={{ margin: 0, color: 'var(--text-primary)' }}>
              Tree-shaking and code splitting eliminate unused code from production builds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceDashboard;