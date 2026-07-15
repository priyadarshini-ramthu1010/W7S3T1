import React from 'react';

// Task 62: Reusable StatusBadge component
export function StatusBadge({ status }) {
  const normStatus = (status || '').toLowerCase();
  
  let badgeStyle = {
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.15)'
  };

  if (normStatus === 'success' || normStatus === 'active' || normStatus === 'paid' || normStatus === 'confirmed') {
    badgeStyle = {
      background: 'rgba(16, 185, 129, 0.15)',
      color: '#10b981',
      border: '1px solid rgba(16, 185, 129, 0.3)'
    };
  } else if (normStatus === 'pending' || normStatus === 'waiting' || normStatus === 'waiting list') {
    badgeStyle = {
      background: 'rgba(245, 158, 11, 0.15)',
      color: '#f59e0b',
      border: '1px solid rgba(245, 158, 11, 0.3)'
    };
  } else if (normStatus === 'error' || normStatus === 'failed' || normStatus === 'expired' || normStatus === 'cancelled') {
    badgeStyle = {
      background: 'rgba(239, 68, 68, 0.15)',
      color: '#ef4444',
      border: '1px solid rgba(239, 68, 68, 0.3)'
    };
  } else if (normStatus === 'info' || normStatus === 'shipped' || normStatus === 'renew soon') {
    badgeStyle = {
      background: 'rgba(6, 182, 212, 0.15)',
      color: '#06b6d4',
      border: '1px solid rgba(6, 182, 212, 0.3)'
    };
  }

  return (
    <span className="badge" style={badgeStyle}>
      {status}
    </span>
  );
}

// Task 63: Reusable AlertBox component
export function AlertBox({ type, message }) {
  const normType = (type || 'info').toLowerCase();
  let alertClass = 'alert-info';
  let icon = 'ℹ️';

  if (normType === 'success') {
    alertClass = 'alert-success';
    icon = '✅';
  } else if (normType === 'error') {
    alertClass = 'alert-warning'; // Uses warning red theme in App.css
    icon = '❌';
  } else if (normType === 'warning') {
    alertClass = 'alert-warning-orange';
    icon = '⚠️';
  }

  return (
    <div className={`alert-box ${alertClass} animate-fade-in`} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <span>{icon}</span>
      <div>{message}</div>
    </div>
  );
}

// Task 64: Reusable Button component where color, size, and label are passed as props
export function CustomButton({ label, color = 'purple', size = 'medium', onClick, disabled = false }) {
  // Translate colors to styling
  let buttonStyle = {};
  if (color === 'purple') buttonStyle = { backgroundColor: '#8b5cf6', color: '#fff' };
  else if (color === 'pink') buttonStyle = { backgroundColor: '#ec4899', color: '#fff' };
  else if (color === 'cyan') buttonStyle = { backgroundColor: '#06b6d4', color: '#fff' };
  else if (color === 'green') buttonStyle = { backgroundColor: '#10b981', color: '#fff' };
  else if (color === 'red') buttonStyle = { backgroundColor: '#ef4444', color: '#fff' };
  else if (color === 'gray') buttonStyle = { backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' };

  const padding = size === 'small' ? '6px 12px' : size === 'large' ? '14px 28px' : '10px 20px';
  const fontSize = size === 'small' ? '0.8rem' : size === 'large' ? '1.1rem' : '0.95rem';

  return (
    <button 
      className="btn"
      style={{ ...buttonStyle, padding, fontSize }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

// Task 52: Create a NotificationCard that displays different icons for Success, Warning, and Error messages
export function NotificationCard({ type, title, message }) {
  const normType = (type || 'success').toLowerCase();
  
  let headerClass = 'badge-open';
  let icon = '🔔';
  if (normType === 'success') {
    headerClass = 'badge-open';
    icon = '✨';
  } else if (normType === 'warning') {
    headerClass = 'badge-senior';
    icon = '⚠️';
  } else if (normType === 'error') {
    headerClass = 'badge-closed';
    icon = '🚨';
  }

  return (
    <div className="card notification-card">
      <div className="card-header">
        <span className={`badge ${headerClass}`}>{type} Notification</span>
        <span style={{ fontSize: '1.25rem' }}>{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
