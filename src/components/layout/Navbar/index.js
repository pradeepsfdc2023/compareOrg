// Navbar component
import React from 'react';
import './Navbar.css';

const Navbar = ({ brand, items, onItemClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          {brand}
        </div>
        <ul className="navbar-menu">
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.href} onClick={() => onItemClick && onItemClick(item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
