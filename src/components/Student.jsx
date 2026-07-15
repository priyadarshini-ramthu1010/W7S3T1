import React from 'react';

export function Student({ name, age, course, marks }) {
  const hasScholarship = marks !== undefined && Number(marks) > 95;

  return (
    <div className="card student-card">
      <div className="card-header">
        <span className="badge badge-student">Student</span>
        {hasScholarship && <span className="badge badge-topper animate-pulse animate-glow">🎓 Scholarship</span>}
      </div>
      <h3>{name}</h3>
      <div className="card-body">
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Course:</strong> {course}</p>
        {marks !== undefined && <p><strong>Marks:</strong> {marks}%</p>}
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
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}
