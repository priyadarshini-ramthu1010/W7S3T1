import React from 'react';

export default function ProductCard({ 
  name, 
  price, 
  category, 
  emoji = '📦', 
  stockStatus, 
  discountPercentage = 0, 
  isOnSale = false,
  isFeatured = false
}) {
  const isAvailable = stockStatus === 'Available' || stockStatus === true || stockStatus === undefined;
  const originalPrice = Number(price || 0);
  const discountedPrice = discountPercentage > 0 
    ? originalPrice * (1 - discountPercentage / 100) 
    : originalPrice;

  // Task 56: Free delivery if order value exceeds 500 (representing dollars or rupees based on locale)
  const isFreeDelivery = discountedPrice > 500;

  return (
    <div className={`card product-card ${!isAvailable ? 'out-of-stock-card' : ''}`}>
      <div className="card-header">
        <span className="badge badge-product">{category}</span>
        <div className="product-badges">
          {isFeatured && <span className="badge badge-topper">Featured</span>}
          {isOnSale && <span className="badge badge-sale animate-pulse">SALE</span>}
          {discountPercentage > 0 && (
            <span className="badge badge-discount">
              {discountPercentage}% OFF
            </span>
          )}
          {isFreeDelivery && <span className="badge badge-open">🚚 Free Delivery</span>}
        </div>
      </div>
      
      <div className="product-visual">
        <span className="product-emoji">{emoji}</span>
      </div>

      <h3>{name}</h3>

      <div className="product-price-section">
        {discountPercentage > 0 ? (
          <>
            <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
            <span className="original-price">${originalPrice.toFixed(2)}</span>
          </>
        ) : (
          <span className="price">${originalPrice.toFixed(2)}</span>
        )}
      </div>

      <div className="card-body">
        <div className={`stock-status ${isAvailable ? 'in-stock' : 'out-of-stock'}`}>
          <span className="status-dot"></span>
          {isAvailable ? 'Available' : 'Out of Stock'}
        </div>
      </div>
    </div>
  );
}
