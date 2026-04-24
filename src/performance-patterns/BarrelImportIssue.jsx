import React from 'react';
import { largeModule } from '../utils/largeModule.js'; // Bad: Imports entire module, even unused parts.

// BarrelImportIssue demonstrates the issue with barrel imports.
// Concept: Dependency and import optimization - Barrel imports can bloat bundles by including unused code.
// Impact: Increases bundle size unnecessarily.
function BarrelImportIssue() {
  return (
    <div>
      <div className="header">
        <h1>Barrel Import Issue</h1>
        <p>Understanding the impact of inefficient imports</p>
      </div>

      <div className="demo-card">
        <h2 className="demo-title">Inefficient Import Pattern</h2>
        <div className="concept-explanation">
          <strong>Concept:</strong> Barrel imports (importing an object with multiple exports) can lead to larger bundle sizes because bundlers may include all exports, even if only one is used. This is inefficient for tree-shaking and increases your application's bundle size unnecessarily.
        </div>

        <div className="code-example">
          <strong>// Bad practice:</strong><br/>
          import &#123; largeModule &#125; from '../utils/largeModule.js';<br/>
          // This imports the entire object, including unused functions.
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--background-color)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
          <strong>Result:</strong> {largeModule.usedFunction()}
        </div>

        <div style={{ marginTop: '1rem', color: 'var(--warning-color)', fontStyle: 'italic' }}>
          Note: In a real application, this would increase bundle size by including unused code from the largeModule object.
        </div>
      </div>
    </div>
  );
}

export default BarrelImportIssue;