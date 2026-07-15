import React from 'react';

export default function EmployeeCard({ name, designation, salary, department, experience, status = 'Active' }) {
  const numExperience = Number(experience || 0);
  const isSenior = numExperience > 5;
  const isPromotionEligible = numExperience > 10;

  return (
    <div className={`card employee-card ${status.toLowerCase() === 'inactive' ? 'out-of-stock-card' : ''}`}>
      <div className="card-header">
        <div className="badge-group">
          <span className="badge badge-employee">Employee</span>
          <span className={`badge ${status.toLowerCase() === 'active' ? 'badge-open' : 'badge-closed'}`}>
            {status}
          </span>
        </div>
        <div className="badge-group">
          {isPromotionEligible && <span className="badge badge-sale animate-pulse">🔥 Promotion Eligible</span>}
          {isSenior && !isPromotionEligible && <span className="badge badge-senior">★ Senior Employee</span>}
        </div>
      </div>
      <h3>{name}</h3>
      <p className="designation">{designation}</p>
      <div className="card-body">
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Salary:</strong> ${Number(salary || 0).toLocaleString()}</p>
        {experience !== undefined && (
          <p><strong>Experience:</strong> {experience} {Number(experience) === 1 ? 'year' : 'years'}</p>
        )}
      </div>
    </div>
  );
}
