import React from 'react';

export default function EmployeeCard({ name, designation, salary, department, experience }) {
  const isSenior = experience !== undefined && Number(experience) > 5;

  return (
    <div className="card employee-card">
      <div className="card-header">
        <span className="badge badge-employee">Employee</span>
        {isSenior && <span className="badge badge-senior animate-pulse">★ Senior Employee</span>}
      </div>
      <h3>{name}</h3>
      <p className="designation">{designation}</p>
      <div className="card-body">
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Salary:</strong> ${Number(salary).toLocaleString()}</p>
        {experience !== undefined && (
          <p><strong>Experience:</strong> {experience} {Number(experience) === 1 ? 'year' : 'years'}</p>
        )}
      </div>
    </div>
  );
}
