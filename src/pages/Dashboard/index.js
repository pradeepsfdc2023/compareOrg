// Dashboard page
import React from 'react';
import Card from '../../components/common/Card';

const Dashboard = () => {
  return (
    <div className="page-dashboard">
      <Card title="Dashboard" subtitle="Your organization overview">
        <p>Welcome to your dashboard. Here you can view comparisons and manage your organizations.</p>
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <Card title="Comparisons" variant="primary">
            <p>5 active comparisons</p>
          </Card>
          <Card title="Organizations" variant="primary">
            <p>3 connected orgs</p>
          </Card>
          <Card title="Reports" variant="primary">
            <p>12 recent reports</p>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
