import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

// Task 65: Employee Directory with Search and Status Filtering
export function EmployeeDirectory() {
  const initialEmployees = [
    { id: 1, name: 'Alice Smith', designation: 'Technical Support', salary: 55000, department: 'Support', experience: 3, status: 'Active' },
    { id: 2, name: 'Bob Vance', designation: 'Sales Manager', salary: 85000, department: 'Sales', experience: 6, status: 'Active' },
    { id: 3, name: 'Clara Oswald', designation: 'Software Architect', salary: 145000, department: 'Engineering', experience: 11, status: 'Active' },
    { id: 4, name: 'David Jones', designation: 'Quality Analyst', salary: 65000, department: 'QA', experience: 2, status: 'Inactive' },
    { id: 5, name: 'Elena Fisher', designation: 'Journalist', salary: 70000, department: 'Marketing', experience: 4, status: 'Active' },
    { id: 6, name: 'Franklin Clinton', designation: 'DevOps Engineer', salary: 105000, department: 'Engineering', experience: 7, status: 'Inactive' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = initialEmployees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          emp.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          emp.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || emp.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="employee-directory card" style={{ background: 'rgba(31, 41, 55, 0.4)' }}>
      <div className="directory-header">
        <h3>🏢 Employee Directory</h3>
        <p className="text-secondary">Search and filter active/inactive staff members</p>
      </div>

      <div className="directory-controls" style={{ display: 'flex', gap: '12px', margin: '20px 0', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Search by name, role, department..." 
          className="control-input"
          style={{ flexGrow: 1, minWidth: '200px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="control-input"
          style={{ width: '150px' }}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="grid-3">
        {filtered.length > 0 ? (
          filtered.map(emp => (
            <EmployeeCard 
              key={emp.id}
              name={emp.name}
              designation={emp.designation}
              salary={emp.salary}
              department={emp.department}
              experience={emp.experience}
              status={emp.status}
            />
          ))
        ) : (
          <p className="no-data">No employees match your search query.</p>
        )}
      </div>
    </div>
  );
}

// Task 66: Movie Gallery with Trending, New Release, and Top Rated labels
export function MovieGallery() {
  const movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8, isTrending: true, isNewRelease: false },
    { id: 2, title: 'Dune: Part Two', genre: 'Sci-Fi', rating: 9.0, isTrending: true, isNewRelease: true },
    { id: 3, title: 'The Dark Knight', genre: 'Action', rating: 9.0, isTrending: false, isNewRelease: false },
    { id: 4, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.7, isTrending: true, isNewRelease: false },
    { id: 5, title: 'Inside Out 2', genre: 'Animation', rating: 8.2, isTrending: true, isNewRelease: true },
    { id: 6, title: 'Gladiator II', genre: 'Action/Drama', rating: 7.9, isTrending: false, isNewRelease: true }
  ];

  return (
    <div className="movie-gallery card" style={{ background: 'rgba(31, 41, 55, 0.4)' }}>
      <h3>🎬 Premium Movie Gallery</h3>
      <p className="text-secondary" style={{ marginBottom: '20px' }}>Conditional labels rendering on movie cards</p>
      
      <div className="grid-3">
        {movies.map(movie => {
          const isTopRated = movie.rating >= 8.8;
          return (
            <div key={movie.id} className="card movie-card-gallery">
              <div className="card-header">
                <span className="badge badge-genre">{movie.genre}</span>
                <div className="badge-group" style={{ flexWrap: 'wrap' }}>
                  {movie.isNewRelease && <span className="badge badge-open">New Release</span>}
                  {movie.isTrending && <span className="badge badge-sale animate-pulse">🔥 Trending</span>}
                  {isTopRated && <span className="badge badge-topper animate-glow">⭐ Top Rated</span>}
                </div>
              </div>
              <div className="movie-visual" style={{ height: '80px', fontSize: '2.5rem' }}>🎬</div>
              <h3>{movie.title}</h3>
              <p><strong>Rating:</strong> {movie.rating}/10</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Task 67: Shopping Cart Summary displaying Free Shipping if total > ₹1000
export function ShoppingCartSummary() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Premium Leather Boots', price: 450, quantity: 1 },
    { id: 2, name: 'Mechanical Keyboard', price: 150, quantity: 2 },
    { id: 3, name: 'Minimalist backpack', price: 120, quantity: 1 }
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeShipping = total > 1000;

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-cart card" style={{ background: 'rgba(31, 41, 55, 0.4)' }}>
      <h3>🛒 Shopping Cart Summary</h3>
      <p className="text-secondary" style={{ marginBottom: '20px' }}>Free shipping unlocked above ₹1000 (Simulated values)</p>

      <div className="cart-items-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {cartItems.map(item => (
          <div key={item.id} className="detail-row" style={{ alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '8px' }}>
            <div>
              <h4 style={{ margin: 0 }}>{item.name}</h4>
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>₹{item.price} each</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, 1)}>+</button>
              <span style={{ fontWeight: '700', marginLeft: '15px', minWidth: '70px', textAlign: 'right' }}>
                ₹{item.price * item.quantity}
              </span>
              <button className="btn-delete" style={{ marginLeft: '10px' }} onClick={() => removeItem(item.id)}>✕</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary-section" style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px' }}>
          <span>Cart Total:</span>
          <span>₹{total.toLocaleString()}</span>
        </div>

        {/* Task 67: Free Shipping alert */}
        {isFreeShipping ? (
          <div className="alert-box alert-success animate-fade-in" style={{ padding: '12px 16px', fontSize: '0.9rem' }}>
            🎉 Congratulations! Your order is eligible for **Free Shipping**!
          </div>
        ) : (
          <div className="alert-box alert-warning-orange" style={{ padding: '12px 16px', fontSize: '0.9rem', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            🚚 Add **₹{(1001 - total).toLocaleString()}** more to unlock **Free Shipping**!
          </div>
        )}
      </div>
    </div>
  );
}

// Task 68: Student Leaderboard with Gold, Silver, Bronze badges for top 3
export function Leaderboard() {
  const students = [
    { name: 'Priya Sharma', score: 98, course: 'Computer Science' },
    { name: 'Sarah Connor', score: 96, course: 'Robotics Engineering' },
    { name: 'Kenji Sato', score: 95, course: 'Machine Learning' },
    { name: 'Darshini Nair', score: 92, course: 'Electronics' },
    { name: 'Maya Lin', score: 88, course: 'Data Visualization' },
    { name: 'Carlos Diaz', score: 85, course: 'Cybersecurity' }
  ];

  return (
    <div className="leaderboard card" style={{ background: 'rgba(31, 41, 55, 0.4)' }}>
      <h3>🏆 Student Academic Leaderboard</h3>
      <p className="text-secondary" style={{ marginBottom: '20px' }}>Top 3 ranks are awarded Gold, Silver, and Bronze badges</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {students.map((student, index) => {
          let rankBadge = null;
          let rankClass = '';
          
          if (index === 0) {
            rankBadge = <span className="badge badge-topper">🥇 Gold Medal</span>;
            rankClass = 'rank-gold';
          } else if (index === 1) {
            rankBadge = <span className="badge badge-senior">🥈 Silver Medal</span>;
            rankClass = 'rank-silver';
          } else if (index === 2) {
            rankBadge = <span className="badge badge-book">🥉 Bronze Medal</span>;
            rankClass = 'rank-bronze';
          } else {
            rankBadge = <span className="badge badge-secondary">Rank #{index + 1}</span>;
          }

          return (
            <div 
              key={student.name} 
              className={`detail-row leaderboard-row ${rankClass}`} 
              style={{ 
                alignItems: 'center', 
                background: 'rgba(255,255,255,0.02)', 
                padding: '12px 18px', 
                borderRadius: '8px',
                borderLeft: index < 3 ? '4px solid' : '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: '800', fontSize: '1.1rem', minWidth: '20px' }}>{index + 1}</span>
                <div>
                  <h4 style={{ margin: 0 }}>{student.name}</h4>
                  <span className="text-secondary" style={{ fontSize: '0.8rem' }}>{student.course}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {rankBadge}
                <span style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--accent-cyan)' }}>{student.score}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Task 69: Course Catalog with New Course, Popular, and Limited Seats labels
export function CourseCatalog() {
  const courses = [
    { id: 1, name: 'Deep Learning Bootcamp', trainer: 'Andrew Ng', enrollments: 1250, seatsBooked: 48, seatsTotal: 50, createdDaysAgo: 5 },
    { id: 2, name: 'Mastering React Native', trainer: 'Angela Yu', enrollments: 890, seatsBooked: 15, seatsTotal: 100, createdDaysAgo: 20 },
    { id: 3, name: 'Generative AI Foundation', trainer: 'Sam Altman', enrollments: 2400, seatsBooked: 95, seatsTotal: 120, createdDaysAgo: 45 },
    { id: 4, name: 'Cybersecurity Fundamentals', trainer: 'Kevin Mitnick', enrollments: 320, seatsBooked: 28, seatsTotal: 30, createdDaysAgo: 2 }
  ];

  return (
    <div className="course-catalog card" style={{ background: 'rgba(31, 41, 55, 0.4)' }}>
      <h3>📚 Advanced Course Catalog</h3>
      <p className="text-secondary" style={{ marginBottom: '20px' }}>Dynamic tags for New (created &lt; 7 days), Popular (&gt; 1000 enrolled), and Limited Seats (&lt; 5 remaining)</p>

      <div className="grid-2">
        {courses.map(course => {
          const isNew = course.createdDaysAgo <= 7;
          const isPopular = course.enrollments >= 1000;
          const seatsLeft = course.seatsTotal - course.seatsBooked;
          const isLimitedSeats = seatsLeft > 0 && seatsLeft <= 5;
          const isFull = seatsLeft <= 0;

          return (
            <div key={course.id} className="card course-catalog-card" style={{ borderLeft: isNew ? '4px solid var(--accent-cyan)' : '1px solid var(--border-color)' }}>
              <div className="card-header">
                <span className="badge badge-course">Academy</span>
                <div className="badge-group" style={{ flexWrap: 'wrap' }}>
                  {isNew && <span className="badge badge-open">New Course</span>}
                  {isPopular && <span className="badge badge-topper">🔥 Popular</span>}
                  {isLimitedSeats && <span className="badge badge-sale animate-pulse">⚡ Limited Seats</span>}
                  {isFull && <span className="badge badge-closed">Closed</span>}
                </div>
              </div>
              <h3>{course.name}</h3>
              <p><strong>Trainer:</strong> {course.trainer}</p>
              <p><strong>Students Enrolled:</strong> {course.enrollments.toLocaleString()}</p>
              <div className="seats-info" style={{ marginTop: '12px' }}>
                <div className="seats-bar">
                  <div 
                    className="seats-bar-fill" 
                    style={{ 
                      width: `${(course.seatsBooked / course.seatsTotal) * 100}%`,
                      background: isFull ? 'var(--accent-danger)' : isLimitedSeats ? 'var(--accent-warning)' : 'var(--accent-success)'
                    }}
                  ></div>
                </div>
                <p className="seats-count" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{seatsLeft} seats remaining</span>
                  <span>{course.seatsBooked}/{course.seatsTotal} booked</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Task 70: Multi-Role Dashboard changing UI based on selected user role
export function MultiRoleDashboard() {
  const [role, setRole] = useState('Student');

  const renderRoleUI = () => {
    switch (role) {
      case 'Student':
        return (
          <div className="panel-mockup panel-user animate-fade-in">
            <h4 style={{ color: 'var(--accent-cyan)' }}>🎓 Student Workspace Portal</h4>
            <p className="text-secondary" style={{ marginBottom: '16px' }}>Overview of active learning tracks and exams</p>
            <div className="grid-3" style={{ gap: '15px', marginBottom: '0px' }}>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Pending Assignments</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-warning)' }}>3 Tasks</p>
              </div>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Grade Average</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-success)' }}>92.4% (A)</p>
              </div>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Attendance Rate</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>95%</p>
              </div>
            </div>
          </div>
        );
      case 'Faculty':
        return (
          <div className="panel-mockup panel-user animate-fade-in" style={{ borderColor: 'var(--accent-purple)' }}>
            <h4 style={{ color: 'var(--accent-purple)' }}>📚 Faculty & Teacher Portal</h4>
            <p className="text-secondary" style={{ marginBottom: '16px' }}>Manage classes, upload grades, and design lesson plans</p>
            <div className="grid-3" style={{ gap: '15px', marginBottom: '0px' }}>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Classes Lecturing</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-purple)' }}>4 Classes</p>
              </div>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Papers to Grade</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-warning)' }}>48 Exams</p>
              </div>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Next Class Hour</h5>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>09:00 AM (CS-101)</p>
              </div>
            </div>
          </div>
        );
      case 'Admin':
        return (
          <div className="panel-mockup panel-admin animate-fade-in">
            <h4 style={{ color: 'var(--accent-danger)' }}>⚙️ System Admin Console</h4>
            <p className="text-secondary" style={{ marginBottom: '16px' }}>Infrastructure configurations and directory policies</p>
            <div className="grid-3" style={{ gap: '15px', marginBottom: '0px' }}>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>System Health</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-success)' }}>Operational</p>
              </div>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Server Load</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>14%</p>
              </div>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Active Users</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-purple)' }}>1,495 Online</p>
              </div>
            </div>
          </div>
        );
      case 'Trainer':
        return (
          <div className="panel-mockup panel-user animate-fade-in" style={{ borderColor: 'var(--accent-pink)' }}>
            <h4 style={{ color: 'var(--accent-pink)' }}>🏋️ Trainer Workstation</h4>
            <p className="text-secondary" style={{ marginBottom: '16px' }}>Manage bootcamps, schedule workshops, and track attendance</p>
            <div className="grid-3" style={{ gap: '15px', marginBottom: '0px' }}>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Active Bootcamps</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-pink)' }}>3 Bootcamps</p>
              </div>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Total Students</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>124 Enrolled</p>
              </div>
              <div className="card" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                <h5 style={{ margin: '0 0 6px 0' }}>Rating Average</h5>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-success)' }}>4.92 / 5.0</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multi-role-dashboard card" style={{ background: 'rgba(31, 41, 55, 0.4)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3>🏢 Multi-Role System Dashboard</h3>
          <p className="text-secondary">Switch user roles to simulate customized workspaces dynamically</p>
        </div>
        <div className="role-buttons" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['Student', 'Faculty', 'Admin', 'Trainer'].map(r => (
            <button 
              key={r}
              className={`tab-btn btn-sm ${role === r ? 'active' : ''}`}
              onClick={() => setRole(r)}
              style={{ padding: '8px 16px' }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="role-workspace-area">
        {renderRoleUI()}
      </div>
    </div>
  );
}
