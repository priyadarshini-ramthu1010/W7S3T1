import React from 'react';

export default function CompanyCard({ company }) {
  if (!company) {
    return <div className="card error-card">No Company Data provided.</div>;
  }

  // Extract key properties for standard beautiful layout, or list all properties dynamically
  const entries = Object.entries(company);

  return (
    <div className="card company-card">
      <div className="card-header">
        <span className="badge badge-company">Company Details</span>
      </div>
      <h3>{company.name || 'Unnamed Company'}</h3>
      <div className="company-details-list">
        {entries.map(([key, value]) => {
          // Format keys for user friendliness, e.g., 'foundedYear' -> 'Founded Year'
          const formattedKey = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase());

          return (
            <div key={key} className="detail-row">
              <span className="detail-label">{formattedKey}:</span>
              <span className="detail-value">
                {typeof value === 'object' ? JSON.stringify(value) : String(value)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
