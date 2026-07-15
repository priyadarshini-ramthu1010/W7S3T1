import React from 'react';

export default function CourseCard({ courseName, trainer, duration, fee, seatsFull, seatsBooked, seatsTotal }) {
  // Determine if seats are full. If seatsFull prop is explicitly true, or booked >= total.
  const isFull = seatsFull === true || (seatsBooked !== undefined && seatsTotal !== undefined && Number(seatsBooked) >= Number(seatsTotal));

  return (
    <div className={`card course-card ${isFull ? 'course-closed' : ''}`}>
      <div className="card-header">
        <span className="badge badge-course">Course</span>
        {isFull ? (
          <span className="badge badge-closed">Enrollment Closed</span>
        ) : (
          <span className="badge badge-open">Enrollment Open</span>
        )}
      </div>
      <h3>{courseName}</h3>
      <p className="trainer"><strong>Trainer:</strong> {trainer}</p>
      
      <div className="card-body">
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Fee:</strong> ${Number(fee).toFixed(2)}</p>
        {seatsBooked !== undefined && seatsTotal !== undefined && (
          <div className="seats-info">
            <div className="seats-bar">
              <div 
                className="seats-bar-fill" 
                style={{ width: `${Math.min((seatsBooked / seatsTotal) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="seats-count">
              {seatsBooked} / {seatsTotal} seats filled {isFull && '(Full)'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
