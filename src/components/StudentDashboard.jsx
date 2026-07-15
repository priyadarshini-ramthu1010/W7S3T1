import React, { useState } from 'react';

// Single Student Dashboard Card
export function StudentDashboardCard({ student, onDelete }) {
  const { name, age, course, marks, attendance, isPresent } = student;
  
  const isPass = Number(marks) >= 35;
  const isTopper = Number(marks) > 90;
  const hasGoodAttendance = Number(attendance) >= 75;

  return (
    <div className={`card student-dash-card ${isPass ? 'pass-border' : 'fail-border'}`}>
      <div className="card-header">
        <span className="badge badge-course">{course}</span>
        <div className="badge-group">
          {isTopper && <span className="badge badge-topper animate-glow">🏆 Topper</span>}
          <span className={`badge ${isPass ? 'badge-pass' : 'badge-fail'}`}>
            {isPass ? 'Pass' : 'Fail'}
          </span>
        </div>
      </div>

      <div className="student-dash-body">
        <div className="avatar-small">
          <img 
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`} 
            alt={name} 
          />
        </div>
        <div className="student-info-main">
          <h4>{name}</h4>
          <p className="text-muted">Age: {age}</p>
        </div>
      </div>

      <div className="student-stats-grid">
        <div className="stat-box">
          <span className="stat-label">Marks</span>
          <span className={`stat-val ${isPass ? 'text-success' : 'text-danger'}`}>{marks}/100</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Attendance</span>
          <span className={`stat-val ${hasGoodAttendance ? 'text-success' : 'text-warning'}`}>{attendance}%</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Status</span>
          <span className={`stat-val ${isPresent ? 'text-success' : 'text-danger'}`}>
            {isPresent ? 'Present' : 'Absent'}
          </span>
        </div>
      </div>

      <div className="card-footer-actions">
        <button className="btn-delete" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function StudentDashboard() {
  // Initial demo students
  const [students, setStudents] = useState([
    { id: 1, name: 'Priya Sharma', age: 19, course: 'Computer Science', marks: 95, attendance: 88, isPresent: true },
    { id: 2, name: 'Darshini Nair', age: 20, course: 'Electronics', marks: 88, attendance: 92, isPresent: true },
    { id: 3, name: 'Mercy John', age: 18, course: 'Mechanical Eng.', marks: 32, attendance: 70, isPresent: false },
    { id: 4, name: 'Praisy Paul', age: 21, course: 'Biotechnology', marks: 92, attendance: 95, isPresent: true },
    { id: 5, name: 'Pranitha Reddy', age: 20, course: 'Civil Eng.', marks: 45, attendance: 65, isPresent: true },
  ]);

  // Form states
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('Computer Science');
  const [marks, setMarks] = useState('');
  const [attendance, setAttendance] = useState('');
  const [isPresent, setIsPresent] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  // Stats calculation
  const totalStudents = students.length;
  const passCount = students.filter(s => Number(s.marks) >= 35).length;
  const passRate = totalStudents > 0 ? ((passCount / totalStudents) * 100).toFixed(0) : 0;
  const topperCount = students.filter(s => Number(s.marks) > 90).length;
  
  const avgAttendance = totalStudents > 0 
    ? (students.reduce((acc, s) => acc + Number(s.attendance), 0) / totalStudents).toFixed(0)
    : 0;

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!name || !age || !marks || !attendance) {
      alert('Please fill out all fields.');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      age: Number(age),
      course,
      marks: Number(marks),
      attendance: Number(attendance),
      isPresent
    };

    setStudents([newStudent, ...students]);
    
    // Reset form
    setName('');
    setAge('');
    setMarks('');
    setAttendance('');
    setIsPresent(true);
    setShowAddForm(false);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="student-dashboard">
      <div className="dashboard-header-flex">
        <div>
          <h2>Student Management Dashboard</h2>
          <p className="text-muted">Monitor academic success, attendance and student lists in real-time.</p>
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel Add' : 'Add New Student'}
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAddStudent} className="add-student-form animate-fade-in">
          <h4>Add New Student Entry</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                placeholder="e.g. John Doe"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input 
                type="number" 
                placeholder="e.g. 20"
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                min="1" 
                max="120"
                required 
              />
            </div>
            <div className="form-group">
              <label>Course</label>
              <select value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="Computer Science">Computer Science</option>
                <option value="Electronics">Electronics</option>
                <option value="Mechanical Eng.">Mechanical Eng.</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Civil Eng.">Civil Eng.</option>
              </select>
            </div>
            <div className="form-group">
              <label>Marks (0-100)</label>
              <input 
                type="number" 
                placeholder="e.g. 85"
                value={marks} 
                onChange={(e) => setMarks(e.target.value)} 
                min="0" 
                max="100" 
                required 
              />
            </div>
            <div className="form-group">
              <label>Attendance (%)</label>
              <input 
                type="number" 
                placeholder="e.g. 90"
                value={attendance} 
                onChange={(e) => setAttendance(e.target.value)} 
                min="0" 
                max="100" 
                required 
              />
            </div>
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={isPresent} 
                  onChange={(e) => setIsPresent(e.target.checked)} 
                />
                Present Today
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">Submit Student</button>
        </form>
      )}

      {/* Stats Board */}
      <div className="dashboard-stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-data">
            <span className="stat-label">Total Students</span>
            <h3>{totalStudents}</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎓</div>
          <div className="stat-data">
            <span className="stat-label">Pass Rate</span>
            <h3>{passRate}%</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-data">
            <span className="stat-label">Toppers</span>
            <h3>{topperCount}</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-data">
            <span className="stat-label">Avg Attendance</span>
            <h3>{avgAttendance}%</h3>
          </div>
        </div>
      </div>

      {/* Students list */}
      <div className="dashboard-cards-grid">
        {students.length > 0 ? (
          students.map(student => (
            <StudentDashboardCard 
              key={student.id} 
              student={student} 
              onDelete={handleDeleteStudent}
            />
          ))
        ) : (
          <p className="no-students">No student records found. Add one above!</p>
        )}
      </div>
    </div>
  );
}
