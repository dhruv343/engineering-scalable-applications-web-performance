import React from 'react';

// Home component provides an overview of the performance concepts
function Home() {
  const concepts = [
    {
      title: 'AppShell Architecture',
      description: 'Lightweight shell loads instantly, features load on-demand',
      icon: '🏗️',
      path: '/feature-a',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Performance Dashboard',
      description: 'Overview of performance concepts and benefits',
      icon: '📊',
      path: '/dashboard',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Sequential vs Parallel',
      description: 'Compare fetch strategies for optimal performance',
      icon: '⚡',
      path: '/sequential',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Import Optimization',
      description: 'Tree-shaking and efficient module loading',
      icon: '📦',
      path: '/barrel',
      color: 'from-pink-500 to-red-600'
    }
  ];

  return (
    <div>
      <div className="header">
        <h1>Performance Engineering Lab</h1>
        <p>Interactive demonstrations of advanced web performance concepts</p>
      </div>
      
      <div className="stats">
        <div className="stat">
          <div className="stat-value">8</div>
          <div className="stat-label">Concepts</div>
        </div>
        <div className="stat">
          <div className="stat-value">Vite</div>
          <div className="stat-label">Framework</div>
        </div>
        <div className="stat">
          <div className="stat-value">React</div>
          <div className="stat-label">Library</div>
        </div>
      </div>

      <div className="demo-grid">
        {concepts.map((concept, index) => (
          <div key={index} className="demo-card">
            <h3 className="demo-title">
              <span>{concept.icon}</span> {concept.title}
            </h3>
            <p>{concept.description}</p>
            <a href={concept.path} className="button">Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;