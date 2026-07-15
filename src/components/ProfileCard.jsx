import React from 'react';

export default function ProfileCard({ 
  profileImage, 
  name, 
  role, 
  location, 
  isActive = false, 
  hasCustomPic = false, 
  isVerified = false 
}) {
  // Task 20: Show custom picture if uploaded, otherwise use default avatar emoji/design
  const avatarSrc = hasCustomPic && profileImage 
    ? profileImage 
    : 'https://api.dicebear.com/7.x/bottts/svg?seed=' + encodeURIComponent(name || 'default');

  return (
    <div className="card profile-card">
      <div className="profile-top">
        <div className="avatar-container">
          <img src={avatarSrc} alt={name} className="profile-avatar" />
          <span className={`status-badge ${isActive ? 'status-online' : 'status-offline'}`} title={isActive ? 'Online' : 'Offline'}></span>
        </div>
        {isVerified && <span className="verified-badge" title="Verified User">✔ Verified User</span>}
      </div>

      <div className="profile-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="location">📍 {location}</p>
      </div>

      <div className="profile-footer">
        <div className="status-text">
          <span className={`status-indicator ${isActive ? 'online' : 'offline'}`}></span>
          {isActive ? 'Online' : 'Offline'}
        </div>
      </div>
    </div>
  );
}
