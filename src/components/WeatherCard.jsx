import React from 'react';

export default function WeatherCard({ city, temperature, condition }) {
  // Determine weather theme and icon based on condition
  let weatherIcon = '☀️';
  let weatherClass = 'weather-sunny';
  const cond = (condition || '').toLowerCase();

  if (cond.includes('rain') || cond.includes('storm')) {
    weatherIcon = '🌧️';
    weatherClass = 'weather-rainy';
  } else if (cond.includes('cloud') || cond.includes('overcast') || cond.includes('fog')) {
    weatherIcon = '☁️';
    weatherClass = 'weather-cloudy';
  } else if (cond.includes('snow') || cond.includes('freeze')) {
    weatherIcon = '❄️';
    weatherClass = 'weather-snowy';
  }

  return (
    <div className={`card weather-card ${weatherClass}`}>
      <div className="weather-header">
        <span className="city-name">{city}</span>
        <span className="weather-icon-large animate-float">{weatherIcon}</span>
      </div>
      
      <div className="weather-body">
        <div className="temperature">{temperature}°C</div>
        <p className="condition-text">{condition}</p>
      </div>
    </div>
  );
}
