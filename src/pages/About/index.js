// About page
import React from 'react';
import Card from '../../components/common/Card';

const About = () => {
  return (
    <div className="page-about">
      <Card title="About Org Comparator" subtitle="Learn more about us">
        <p>
          Salesforce Organization Comparator is a powerful tool designed to help organizations 
          understand the differences and similarities between their Salesforce environments.
        </p>
        <h3>Our Mission</h3>
        <p>
          To help organizations streamline their Salesforce deployment and reduce deployment risks by providing 
          clear visibility into configuration differences across environments.
        </p>
      </Card>
    </div>
  );
};

export default About;
