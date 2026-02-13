// 404 Not Found page
import React from 'react';
import Button from '../../components/common/Button';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1 style={{ fontSize: '3rem', margin: '1rem 0' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Button onClick={() => window.location.href = '/'}>Go Home</Button>
    </div>
  );
};

export default NotFound;
