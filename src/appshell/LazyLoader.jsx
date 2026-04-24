import React, { Suspense } from 'react';

// LazyLoader wraps lazy components with Suspense for better UX.
// Concept: AppShell Architecture - Handles loading states for lazy-loaded features.
function LazyLoader({ component: Component }) {
  return (
    <Suspense fallback={<div>Loading feature...</div>}>
      <Component />
    </Suspense>
  );
}

export default LazyLoader;