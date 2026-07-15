import React from 'react';

export default function BookCard({ title, author, price, category }) {
  return (
    <div className="card book-card">
      <div className="card-header">
        <span className="badge badge-book">{category}</span>
      </div>
      <div className="book-visual">
        <span className="book-icon">📖</span>
      </div>
      <h3>{title}</h3>
      <p className="author">By {author}</p>
      <div className="book-footer">
        <span className="book-price">${Number(price).toFixed(2)}</span>
      </div>
    </div>
  );
}
