// Analytics page
import React from 'react';
import Card from '../../components/common/Card';

const Analytics = () => {
  return (
    <div className="page-analytics">
      <Card title="Analytics" subtitle="Detailed comparison metrics">
        <p>Comparison metrics and statistics will be displayed here.</p>
        <div style={{ marginTop: '2rem' }}>
          <h3>Key Metrics</h3>
          <ul>
            <li>Objects compared: 150</li>
            <li>Fields analyzed: 2,500</li>
            <li>Differences found: 45</li>
            <li>Similarities: 98%</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
