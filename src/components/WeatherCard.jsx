import React from 'react';

export default function WeatherCard({ city, temperature, condition }) {
  const temp = Number(temperature || 0);

  // Task 53: Determine background class based on temperature
  let tempClass = 'weather-normal';
  if (temp >= 30) {
    tempClass = 'weather-hot';
  } else if (temp < 15) {
    tempClass = 'weather-cold';
  }

  // Determine weather theme and icon based on condition
  let weatherIcon = '☀️';
  const cond = (condition || '').toLowerCase();

  if (cond.includes('rain') || cond.includes('storm')) {
    weatherIcon = '🌧️';
  } else if (cond.includes('cloud') || cond.includes('overcast') || cond.includes('fog')) {
    weatherIcon = '☁️';
  } else if (cond.includes('snow') || cond.includes('freeze')) {
    weatherIcon = '❄️';
  }

  return (
    <div className={`card weather-card ${tempClass}`}>
      <div className="weather-header">
        <span className="city-name">{city}</span>
        <span className="weather-icon-large animate-float">{weatherIcon}</span>
      </div>
      
      <div className="weather-body">
        <div className="temperature">{temp}°C</div>
        <p className="condition-text">{condition}</p>
        <span className="badge badge-company" style={{ marginTop: '8px', background: 'rgba(255,255,255,0.1)' }}>
          {temp >= 30 ? '🔥 Hot' : temp < 15 ? '❄️ Cold' : '🍃 Normal'}
        </span>
      </div>
    </div>
  );
}
