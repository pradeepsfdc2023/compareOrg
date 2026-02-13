// Sidebar component
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ items, onItemClick, activeItem }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => onItemClick && onItemClick(item.id)}
          >
            {item.icon && <span className="sidebar-icon">{item.icon}</span>}
            <span className="sidebar-label">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
