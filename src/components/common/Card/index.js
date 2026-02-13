// Card component
import React from 'react';
import './Card.css';

const Card = ({ children, title, subtitle, className = '', variant = 'default', ...props }) => {
  return (
    <div className={`card card-${variant} ${className}`} {...props}>
      {title && (
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
