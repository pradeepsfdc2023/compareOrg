// Login page
import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import Card from '../../components/common/Card';

const Login = () => {
  const handleLogin = (data) => {
    console.log('Login attempt:', data);
    // TODO: Call authentication service
  };

  return (
    <div className="page-login">
      <Card title="Login to Your Account">
        <LoginForm onSubmit={handleLogin} />
      </Card>
    </div>
  );
};

export default Login;
