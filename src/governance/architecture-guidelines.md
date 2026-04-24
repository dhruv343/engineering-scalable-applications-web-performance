# Architecture Guidelines

## AppShell
- Keep AppShell lightweight; no feature logic.
- Use lazy loading for all features.

## Performance Patterns
- Prefer parallel over sequential fetches.
- Use direct imports for tree-shaking.

## Governance
- Follow ESLint rules to maintain structure.