// Auth layout wrapper
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="layout-auth">
      <div className="auth-container">
        <div className="auth-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
