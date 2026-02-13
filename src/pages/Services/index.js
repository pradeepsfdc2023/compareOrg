// Services page
import React from 'react';
import Card from '../../components/common/Card';

const Services = () => {
  const services = [
    { id: 1, title: 'Org Comparison', description: 'Compare configurations across organizations' },
    { id: 2, title: 'Change Tracking', description: 'Track changes and modifications over time' },
    { id: 3, title: 'Reports & Analytics', description: 'Generate detailed comparison reports' },
    { id: 4, title: 'Automation', description: 'Automate recurring comparison tasks' }
  ];

  return (
    <div className="page-services">
      <div className="services-grid">
        {services.map((service) => (
          <Card key={service.id} title={service.title} variant="primary">
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
