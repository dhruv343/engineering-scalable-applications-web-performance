# ESLint Rules for Performance Governance

## Rules
- **no-large-imports-in-root**: Prevent large imports in AppShell or root files to keep initial bundle small.
- **no-direct-feature-imports**: Features must be lazy-loaded; no direct imports in AppShell.

## Implementation
Add to .eslintrc.js:
```js
module.exports = {
  rules: {
    'no-large-imports-in-root': 'error',
    'no-direct-feature-imports': 'error',
  },
};
```

## Why
These rules enforce AppShell architecture and prevent bundle bloat.