import React from 'react';
import { usedFunction } from '../utils/largeModule.js'; // Good: Direct import of only what's needed.

// OptimizedImportExample shows tree-shaking friendly imports.
// Concept: Dependency and import optimization - Direct imports allow bundlers to tree-shake unused code.
// Impact: Smaller bundle size.
function OptimizedImportExample() {
  return (
    <div>
      <div className="header">
        <h1>Optimized Import Example</h1>
        <p>Tree-shaking friendly import patterns</p>
      </div>

      <div className="demo-card">
        <h2 className="demo-title">Efficient Import Pattern</h2>
        <div className="concept-explanation">
          <strong>Concept:</strong> Direct imports specify exactly what is needed, enabling tree-shaking. Bundlers can remove unused exports, resulting in smaller bundle sizes and faster load times. This is the recommended approach for optimal performance.
        </div>

        <div className="code-example">
          <strong>// Good practice:</strong><br/>
          import &#123; usedFunction &#125; from '../utils/largeModule.js';<br/>
          // Only the used function is included in the bundle.
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--background-color)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
          <strong>Result:</strong> {usedFunction()}
        </div>

        <div style={{ marginTop: '1rem', color: 'var(--accent-color)', fontStyle: 'italic' }}>
          Note: This approach optimizes bundle size by allowing unused code to be shaken out during the build process.
        </div>
      </div>
    </div>
  );
}

export default OptimizedImportExample;