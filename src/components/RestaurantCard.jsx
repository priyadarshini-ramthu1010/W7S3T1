import React from 'react';

export default function RestaurantCard({ 
  name, 
  cuisine, 
  rating, 
  openingHour = 9, 
  closingHour = 22, 
  currentHour,
  hasHomeDelivery = false 
}) {
  const openHour = Number(openingHour);
  const closeHour = Number(closingHour);
  const currHour = Number(currentHour !== undefined ? currentHour : new Date().getHours());

  const isOpen = currHour >= openHour && currHour < closeHour;

  return (
    <div className={`card restaurant-card ${isOpen ? 'restaurant-open' : 'restaurant-closed'}`}>
      <div className="card-header">
        <span className="badge badge-cuisine">{cuisine}</span>
        <div className="badge-group">
          {isOpen ? (
            <span className="badge badge-open-now animate-pulse">● Open Now</span>
          ) : (
            <span className="badge badge-closed-now">Closed</span>
          )}
        </div>
      </div>

      <div className="restaurant-body">
        <h3>{name}</h3>
        <div className="restaurant-rating">
          <span className="star-icon">⭐</span>
          <span>{rating}</span>
        </div>
        <p className="hours-info">
          Hours: {openHour}:00 AM - {closeHour - 12}:00 PM
        </p>
        
        {/* Task 57: Home Delivery Available badge */}
        {hasHomeDelivery && (
          <div className="badge badge-open" style={{ marginTop: '10px', width: 'fit-content' }}>
            🚀 Home Delivery Available
          </div>
        )}
      </div>
    </div>
  );
}
