import React from 'react';

export default function JobCard({ title, company, location, jobType }) {
  const isRemote = (jobType || '').toLowerCase() === 'remote';

  return (
    <div className="card job-card">
      <div className="card-header">
        <span className="badge badge-job-company">{company}</span>
        <span className={`badge ${isRemote ? 'badge-remote' : 'badge-onsite'}`}>
          {isRemote ? '🌐 Remote' : '🏢 On-site'}
        </span>
      </div>

      <div className="job-body">
        <h3>{title}</h3>
        <p className="job-location">📍 {location}</p>
      </div>

      <div className="job-footer">
        <button className="btn btn-primary btn-sm">Apply Now</button>
      </div>
    </div>
  );
}
