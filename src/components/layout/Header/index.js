// Header component
import React from 'react';
import './Header.css';

const Header = ({ title, subtitle, children }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          {title && <h1 className="header-title">{title}</h1>}
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;
