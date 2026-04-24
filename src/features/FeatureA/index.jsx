import React from 'react';

// FeatureA is a simple feature component.
// Concept: AppShell Architecture - Loaded lazily, not in initial bundle.
function FeatureA() {
  return (
    <div>
      <div className="header">
        <h1>Feature A</h1>
        <p>Lazy-loaded component demonstration</p>
      </div>

      <div className="demo-card">
        <h2 className="demo-title">Lazy Loading in Action</h2>
        <div className="concept-explanation">
          <strong>Concept:</strong> AppShell Architecture allows features to be loaded on-demand. This feature was not part of the initial bundle, reducing the app's startup time and improving the perceived performance.
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: 'var(--border-radius)', border: '1px solid var(--accent-color)' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
            🚀 Performance Benefit
          </div>
          <p style={{ margin: 0, color: 'var(--text-primary)' }}>
            This feature loaded instantly when requested, without being part of the initial bundle. The app shell provided immediate interactivity while features load in the background.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureA;