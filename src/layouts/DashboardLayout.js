// Dashboard layout wrapper
import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';

const DashboardLayout = ({ children }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: '📊' },
    { id: 'analytics', label: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', href: '/dashboard/settings', icon: '⚙️' }
  ];

  return (
    <div className="layout-dashboard">
      <Sidebar items={sidebarItems} activeItem={activeItem} onItemClick={setActiveItem} />
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
