import React from 'react';

export default function MovieCard({ title, poster, rating, genre }) {
  const isBlockbuster = rating !== undefined && Number(rating) > 8.5;
  
  // Default fallback poster gradient design if no image url is provided
  const hasPosterUrl = poster && poster.startsWith('http');

  return (
    <div className="card movie-card">
      <div className="card-header">
        <span className="badge badge-genre">{genre}</span>
        {isBlockbuster && <span className="badge badge-blockbuster animate-glow">🔥 Blockbuster</span>}
      </div>

      <div className="movie-poster-container">
        {hasPosterUrl ? (
          <img src={poster} alt={title} className="movie-poster" />
        ) : (
          <div className="movie-poster-fallback">
            <span className="movie-icon">🎬</span>
            <span className="poster-title">{title}</span>
          </div>
        )}
      </div>

      <div className="movie-info">
        <h3>{title}</h3>
        <div className="movie-rating">
          <span className="star-icon">⭐</span>
          <span className="rating-value">{Number(rating).toFixed(1)}</span>
          <span className="rating-max">/10</span>
        </div>
      </div>
    </div>
  );
}
