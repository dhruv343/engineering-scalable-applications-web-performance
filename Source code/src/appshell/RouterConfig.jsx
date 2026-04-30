import { lazy } from 'react';

// RouterConfig defines routes with lazy-loaded components.
// Concept: AppShell Architecture - Features are not part of the initial bundle; loaded on navigation.
// This simulates runtime feature registration.
const RouterConfig = [
  { path: '/', component: lazy(() => import('../components/Home.jsx')) },
  { path: '/feature-a', component: lazy(() => import('../features/FeatureA/index.jsx')) },
  { path: '/feature-b', component: lazy(() => import('../features/FeatureB/index.jsx')) },
  { path: '/feature-c', component: lazy(() => import('../features/FeatureC/index.jsx')) },
  { path: '/sequential', component: lazy(() => import('../performance-patterns/SequentialFetchDemo.jsx')) },
  { path: '/parallel', component: lazy(() => import('../performance-patterns/ParallelFetchDemo.jsx')) },
  { path: '/barrel', component: lazy(() => import('../performance-patterns/BarrelImportIssue.jsx')) },
  { path: '/optimized', component: lazy(() => import('../performance-patterns/OptimizedImportExample.jsx')) },
  { path: '/dashboard', component: lazy(() => import('../dashboards/PerformanceDashboard.jsx')) },
];

export default RouterConfig;