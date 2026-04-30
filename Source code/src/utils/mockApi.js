// mockApi simulates API calls with delay.
// Used for performance demos.
function mockApi(endpoint, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data from ${endpoint}`), delay);
  });
}

export default mockApi;