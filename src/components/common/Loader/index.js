// Loader component
import React from 'react';
import './Loader.css';

const Loader = ({ size = 'md', text = 'Loading...' }) => {
  return (
    <div className={`loader-container loader-${size}`}>
      <div className="spinner"></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader;
