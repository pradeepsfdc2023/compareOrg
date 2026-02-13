// Main layout wrapper
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
  const navItems = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: '/about' },
    { id: 3, label: 'Services', href: '/services' },
    { id: 4, label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="layout-main">
      <Navbar brand="Org Comparator" items={navItems} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
