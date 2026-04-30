import React, { useState } from 'react';
import mockApi from '../utils/mockApi.js';

// SequentialFetchDemo demonstrates chained API calls.
// Concept: Structural performance optimizations - Shows latency from sequential fetches.
// Bad practice: Increases total load time due to waiting.
function SequentialFetchDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(null);

  const handleFetch = async () => {
    setLoading(true);
    setData([]);
    setTime(null);
    const start = Date.now();
    const result1 = await mockApi('api1', 1000);
    const result2 = await mockApi('api2', 1000);
    const result3 = await mockApi('api3', 1000);
    setData([result1, result2, result3]);
    setTime(Date.now() - start);
    setLoading(false);
  };

  return (
    <div>
      <div className="header">
        <h1>Sequential Fetch Demo</h1>
        <p>Experience the performance impact of sequential API calls</p>
      </div>

      <div className="demo-card">
        <h2 className="demo-title">Sequential API Calls</h2>
        <div className="concept-explanation">
          <strong>Concept:</strong> Sequential API calls wait for each request to complete before starting the next. This creates unnecessary latency as each call depends on the previous one finishing. In real applications, this can significantly slow down data loading.
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <button className="button" onClick={handleFetch} disabled={loading}>
            {loading ? (
              <>
                <div className="spinner"></div>
                Fetching Sequentially...
              </>
            ) : (
              'Start Sequential Fetch'
            )}
          </button>
        </div>

        {time && (
          <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--warning-color)', marginBottom: '0.5rem' }}>
              Total Time: {time}ms
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              Compare this with parallel fetching for dramatic performance difference
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

export default SequentialFetchDemo;