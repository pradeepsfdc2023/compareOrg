// Contact page
import React from 'react';
import ContactForm from '../../components/forms/ContactForm';
import Card from '../../components/common/Card';

const Contact = () => {
  const handleSubmit = (data) => {
    console.log('Contact form submitted:', data);
    // TODO: Send to backend
  };

  return (
    <div className="page-contact">
      <Card title="Contact Us">
        <ContactForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
};

export default Contact;
