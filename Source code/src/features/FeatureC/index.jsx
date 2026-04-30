import React from 'react';

// FeatureC.
// Concept: Same as above.
function FeatureC() {
  return (
    <div>
      <div className="header">
        <h1>Feature C</h1>
        <p>Code splitting demonstration</p>
      </div>

      <div className="demo-card">
        <h2 className="demo-title">Dynamic Loading</h2>
        <div className="concept-explanation">
          <strong>Concept:</strong> Code splitting allows applications to load features on-demand, reducing the initial bundle size and improving startup performance.
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', borderRadius: 'var(--border-radius)', border: '1px solid var(--accent-color)' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
            ⚡ On-Demand Loading
          </div>
          <p style={{ margin: 0, color: 'var(--text-primary)' }}>
            Feature C demonstrates how code splitting enables dynamic loading of application features, improving overall application performance and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureC;