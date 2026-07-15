import React from 'react';

export default function RestaurantCard({ name, cuisine, rating, openingHour, closingHour, currentHour }) {
  // Check if open. If currentHour is between openingHour and closingHour
  const openHour = Number(openingHour || 9);
  const closeHour = Number(closingHour || 22);
  const currHour = Number(currentHour !== undefined ? currentHour : new Date().getHours());

  const isOpen = currHour >= openHour && currHour < closeHour;

  return (
    <div className={`card restaurant-card ${isOpen ? 'restaurant-open' : 'restaurant-closed'}`}>
      <div className="card-header">
        <span className="badge badge-cuisine">{cuisine}</span>
        {isOpen ? (
          <span className="badge badge-open-now animate-pulse">● Open Now</span>
        ) : (
          <span className="badge badge-closed-now">Closed</span>
        )}
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
        <p className="current-time-status text-muted">
          Simulated time: {currHour}:00
        </p>
      </div>
    </div>
  );
}
