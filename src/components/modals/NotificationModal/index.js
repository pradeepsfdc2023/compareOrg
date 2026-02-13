// NotificationModal component
import React, { useEffect } from 'react';
import '../Modal.css';

const NotificationModal = ({ isOpen, onClose, message, type = 'info', duration = 3000 }) => {
  useEffect(() => {
    if (isOpen && duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`notification notification-${type}`}>
      <p>{message}</p>
      <button className="notification-close" onClick={onClose}>&times;</button>
    </div>
  );
};

export default NotificationModal;
