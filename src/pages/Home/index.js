// Home page
import React from 'react';
import Card from '../../components/common/Card';

const Home = () => {
  return (
    <div className="page-home">
      <Card title="Welcome to Org Comparator" subtitle="Compare your Salesforce organizations">
        <p>
          This tool allows you to compare configurations, customizations, and settings across multiple Salesforce organizations.
        </p>
      </Card>
    </div>
  );
};

export default Home;
