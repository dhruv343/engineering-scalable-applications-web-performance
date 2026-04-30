import React, { useState } from 'react';
import mockApi from '../utils/mockApi.js';

// ParallelFetchDemo uses Promise.all for concurrent fetches.
// Concept: Structural performance optimizations - Reduces latency by parallelizing requests.
// Good practice: Faster total load time.
function ParallelFetchDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(null);
  const [progress, setProgress] = useState({ api1: 0, api2: 0, api3: 0 });

  const handleFetch = async () => {
    setLoading(true);
    setData([]);
    setTime(null);
    setProgress({ api1: 0, api2: 0, api3: 0 });

    const start = Date.now();

    // Start all promises simultaneously
    const promises = [
      mockApi('api1', 1000).then(result => {
        setProgress(prev => ({ ...prev, api1: 100 }));
        return result;
      }),
      mockApi('api2', 1000).then(result => {
        setProgress(prev => ({ ...prev, api2: 100 }));
        return result;
      }),
      mockApi('api3', 1000).then(result => {
        setProgress(prev => ({ ...prev, api3: 100 }));
        return result;
      }),
    ];

    // Wait for all to complete
    const results = await Promise.all(promises);
    setData(results);
    setTime(Date.now() - start);
    setLoading(false);
  };

  return (
    <div>
      <div className="header">
        <h1>Parallel Fetch Demo</h1>
        <p>See the power of concurrent API calls</p>
      </div>

      <div className="demo-card">
        <h2 className="demo-title">Parallel API Calls</h2>
        <div className="concept-explanation">
          <strong>Concept:</strong> Parallel API calls using Promise.all allow multiple requests to run simultaneously. The total time is determined by the slowest individual request, not the sum of all requests. This dramatically improves performance for independent data fetching.
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <button className="button" onClick={handleFetch} disabled={loading}>
            {loading ? (
              <>
                <div className="spinner"></div>
                Fetching in Parallel...
              </>
            ) : (
              'Start Parallel Fetch'
            )}
          </button>
        </div>

        {loading && (
          <div className="progress-container">
            <div style={{ marginBottom: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--text-secondary)' }}>
              Parallel Progress (All APIs start simultaneously)
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(progress.api1 + progress.api2 + progress.api3) / 3}%` }}></div>
            </div>
            <div className="progress-label">
              <span>API 1: {progress.api1}%</span>
              <span>API 2: {progress.api2}%</span>
              <span>API 3: {progress.api3}%</span>
            </div>
          </div>
        )}

        {time && (
          <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
              Total Time: {time}ms
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              Much faster than sequential! Each API call runs independently.
            </div>
          </div>
        )}

        {data.length > 0 && (
          <div className="result">
            <strong>Results:</strong>
            <ul>
              {data.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ParallelFetchDemo;