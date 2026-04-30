import React from 'react';
import AppShell from './appshell/AppShell.jsx';

// This is the root App component. It renders the AppShell, which handles routing and lazy loading.
// Concept: AppShell Architecture - The app shell loads instantly, with features loaded on demand.
function App() {
  return <AppShell />;
}

export default App;