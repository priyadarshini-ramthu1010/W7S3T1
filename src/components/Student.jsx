import React from 'react';

export function Student({ name, age, course }) {
  return (
    <div className="card student-card">
      <div className="card-header">
        <div className="badge badge-student">Student</div>
      </div>
      <h3>{name}</h3>
      <div className="card-body">
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Course:</strong> {course}</p>
      </div>
    </div>
  );
}

export function StudentList({ students }) {
  if (!students || students.length === 0) {
    return <p className="no-data">No students available.</p>;
  }

  return (
    <div className="student-list">
      <h3>All Students ({students.length})</h3>
      <div className="grid-3">
        {students.map((student, index) => (
          <Student 
            key={index}
            name={student.name}
            age={student.age}
            course={student.course}
          />
        ))}
      </div>
    </div>
  );
}
