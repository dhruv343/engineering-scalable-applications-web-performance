// timers.js for utility timing functions.
// Concept: Static asset priority - Simulate lazy loading.
function lazyLoadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
}

export { lazyLoadImage };