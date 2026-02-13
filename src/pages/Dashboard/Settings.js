// Settings page
import React from 'react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const Settings = () => {
  return (
    <div className="page-settings">
      <Card title="Settings" subtitle="Configure your preferences">
        <div style={{ marginBottom: '2rem' }}>
          <h3>Notification Settings</h3>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <input type="checkbox" id="email-notifications" defaultChecked />
            <label htmlFor="email-notifications" style={{ marginLeft: '0.5rem' }}>Enable email notifications</label>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Account Settings</h3>
          <Button variant="secondary" size="sm">Change Password</Button>
          <Button variant="secondary" size="sm" style={{ marginLeft: '0.5rem' }}>Two-Factor Authentication</Button>
        </div>

        <div>
          <h3>Danger Zone</h3>
          <Button variant="danger" size="sm">Delete Account</Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
