import React from 'react';

// FeatureB is another simple feature.
// Concept: Same as FeatureA.
function FeatureB() {
  return (
    <div>
      <div className="header">
        <h1>Feature B</h1>
        <p>Code splitting demonstration</p>
      </div>

      <div className="demo-card">
        <h2 className="demo-title">Code Splitting Benefits</h2>
        <div className="concept-explanation">
          <strong>Concept:</strong> Lazy loading ensures that only the code needed for the current user interaction is loaded, improving perceived performance and reducing initial bundle size.
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: 'var(--border-radius)', border: '1px solid var(--warning-color)' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--warning-color)', marginBottom: '0.5rem' }}>
            📦 Bundle Optimization
          </div>
          <p style={{ margin: 0, color: 'var(--text-primary)' }}>
            Feature B's code was loaded separately from the main app bundle. This reduces the initial JavaScript payload and improves Time to Interactive (TTI).
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureB;