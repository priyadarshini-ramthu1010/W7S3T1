import React from 'react';

export default function Button({ text, onClick, variant = 'primary', size = 'medium', disabled = false }) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
