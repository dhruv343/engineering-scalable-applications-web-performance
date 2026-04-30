// largeModule simulates a big module with many exports.
// Concept: Tree-shaking - Only import what's needed.
export function usedFunction() {
  return 'This is the used function';
}

export function unusedFunction1() {
  return 'Unused 1';
}

export function unusedFunction2() {
  return 'Unused 2';
}

// ... many more unused exports to simulate bloat
export const largeModule = {
  usedFunction,
  unusedFunction1,
  unusedFunction2,
  // ... more
};