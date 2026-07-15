import React, { useState } from 'react';
import './App.css';

// Import components
import { Student, StudentList } from './components/Student';
import EmployeeCard from './components/EmployeeCard';
import ProductCard from './components/ProductCard';
import MovieCard from './components/MovieCard';
import BookCard from './components/BookCard';
import CourseCard from './components/CourseCard';
import ProfileCard from './components/ProfileCard';
import Button from './components/Button';
import CompanyCard from './components/CompanyCard';
import WeatherCard from './components/WeatherCard';
import RestaurantCard from './components/RestaurantCard';
import JobCard from './components/JobCard';
import StudentDashboard from './components/StudentDashboard';

function App() {
  const [activeTab, setActiveTab] = useState('props');

  // Interactive Lab states (Tasks 11-20)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stockStatus, setStockStatus] = useState('Available');
  const [marks, setMarks] = useState(75);
  const [age, setAge] = useState(20);
  const [isPremium, setIsPremium] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(10);
  const [isActive, setIsActive] = useState(true);
  const [userRole, setUserRole] = useState('Admin');
  const [customTime, setCustomTime] = useState('Afternoon');
  const [hasCustomPic, setHasCustomPic] = useState(false);

  // Demo Data
  const fiveProducts = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 1199, category: 'Electronics', emoji: '📱', stockStatus: 'Available', discountPercentage: 5, isOnSale: true },
    { id: 2, name: 'Sony WH-1000XM5', price: 399, category: 'Audio', emoji: '🎧', stockStatus: 'Available', discountPercentage: 15, isOnSale: true },
    { id: 3, name: 'Ergonomic Standing Desk', price: 549, category: 'Furniture', emoji: '🪑', stockStatus: 'Out of Stock', discountPercentage: 0, isOnSale: false },
    { id: 4, name: 'Smart Fitness Ring', price: 299, category: 'Wearables', emoji: '💍', stockStatus: 'Available', discountPercentage: 0, isOnSale: false },
    { id: 5, name: 'Mechanical Gaming Keyboard', price: 169, category: 'Peripherals', emoji: '⌨️', stockStatus: 'Available', discountPercentage: 25, isOnSale: true },
  ];

  const arrayStudents = [
    { name: 'Sarah Connor', age: 21, course: 'Robotics Engineering' },
    { name: 'Kenji Sato', age: 19, course: 'Machine Learning' },
    { name: 'Maya Lin', age: 22, course: 'Data Visualization' },
    { name: 'Carlos Diaz', age: 20, course: 'Cybersecurity' }
  ];

  const companyObject = {
    name: 'NovaTech Industries',
    ceo: 'Dr. Julian Sterling',
    industry: 'Advanced Robotics',
    founded: 2021,
    location: 'Austin, Texas',
    employees: 340,
    website: 'novatech.io'
  };

  // Helper for greeting icon & text (Task 19)
  const getGreetingData = (time) => {
    switch (time) {
      case 'Morning':
        return { text: 'Good Morning!', icon: '🌅' };
      case 'Afternoon':
        return { text: 'Good Afternoon!', icon: '☀️' };
      case 'Evening':
        return { text: 'Good Evening!', icon: '🌙' };
      default:
        return { text: 'Welcome!', icon: '👋' };
    }
  };

  const greeting = getGreetingData(customTime);

  return (
    <div className="app-container">
      <header>
        <h1>React Card Component & Conditional Lab</h1>
        <p>
          A state-of-the-art interactive playground demonstrating 30 tasks in React. 
          Modify props, toggle states, and examine conditional rendering rules in real-time.
        </p>
      </header>

      {/* Tabs Menu */}
      <div className="tabs-navigation">
        <button 
          className={`tab-btn ${activeTab === 'props' ? 'active' : ''}`}
          onClick={() => setActiveTab('props')}
        >
          📂 Basic Props (Tasks 1-10)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'conditional' ? 'active' : ''}`}
          onClick={() => setActiveTab('conditional')}
        >
          🧪 Conditional Rendering Lab (Tasks 11-20)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'combined' ? 'active' : ''}`}
          onClick={() => setActiveTab('combined')}
        >
          ⚙️ Combined Logic (Tasks 21-29)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Student Dashboard (Task 30)
        </button>
      </div>

      {/* Tab Contents */}
      <div className="tab-content">
        
        {/* TAB 1: BASIC PROPS */}
        {activeTab === 'props' && (
          <div className="animate-fade-in">
            <h2 className="section-title">Tasks 1-10: Component Prop Foundations</h2>
            
            <div className="grid-3">
              {/* Task 1 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 1: Basic Student</div>
                <Student name="Alice Smith" age={20} course="Software Engineering" />
              </div>

              {/* Task 2 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 2: Employee Card</div>
                <EmployeeCard 
                  name="Marcus Vance" 
                  designation="Lead UX Designer" 
                  salary={115000} 
                  department="Product Design" 
                />
              </div>

              {/* Task 4 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 4: Movie Card</div>
                <MovieCard 
                  title="Interstellar" 
                  poster="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80" 
                  rating={8.7} 
                  genre="Sci-Fi" 
                />
              </div>

              {/* Task 5 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 5: Book Card</div>
                <BookCard 
                  title="The Hobbit" 
                  author="J.R.R. Tolkien" 
                  price={14.99} 
                  category="Fantasy Fiction" 
                />
              </div>

              {/* Task 6 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 6: Course Card</div>
                <CourseCard 
                  courseName="Fullstack React Native" 
                  trainer="Dr. Angela Yu" 
                  duration="42 Hours" 
                  fee={199.99} 
                />
              </div>

              {/* Task 7 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 7: Profile Card</div>
                <ProfileCard 
                  name="Clara Oswald" 
                  role="Software Architect" 
                  location="London, UK" 
                />
              </div>

              {/* Task 9 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 9: Company Object Prop</div>
                <CompanyCard company={companyObject} />
              </div>

              {/* Task 10 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 10: Custom Button Components</div>
                <div className="card" style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '180px' }}>
                  <Button text="Click Me" onClick={() => alert('Primary Clicked')} variant="primary" />
                  <Button text="Warning Action" onClick={() => alert('Secondary Clicked')} variant="secondary" />
                  <Button text="Delete Account" onClick={() => alert('Danger Clicked')} variant="danger" />
                </div>
              </div>
            </div>

            {/* Task 8 */}
            <div className="card-demo-box" style={{ marginTop: '24px' }}>
              <div className="demo-title-badge">Task 8: Array of Student Objects Props</div>
              <StudentList students={arrayStudents} />
            </div>

            {/* Task 3 */}
            <div className="card-demo-box" style={{ marginTop: '30px' }}>
              <div className="demo-title-badge">Task 3: Display 5 Different Products via different props</div>
              <div className="grid-3" style={{ marginTop: '16px' }}>
                {fiveProducts.map(prod => (
                  <ProductCard 
                    key={prod.id}
                    name={prod.name}
                    price={prod.price}
                    category={prod.category}
                    emoji={prod.emoji}
                    stockStatus={prod.stockStatus}
                    discountPercentage={prod.discountPercentage}
                    isOnSale={prod.isOnSale}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONDITIONAL RENDERING LAB */}
        {activeTab === 'conditional' && (
          <div className="playground-layout animate-fade-in">
            {/* Sidebar Knobs */}
            <div className="control-panel">
              <h3>Lab Parameters</h3>
              
              {/* Task 11 */}
              <div className="control-group">
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    className="toggle-input"
                    checked={isLoggedIn}
                    onChange={(e) => setIsLoggedIn(e.target.checked)}
                  />
                  isLoggedIn (Task 11)
                </label>
              </div>

              {/* Task 12 */}
              <div className="control-group">
                <label>Stock Status (Task 12)</label>
                <select 
                  className="control-input" 
                  value={stockStatus} 
                  onChange={(e) => setStockStatus(e.target.value)}
                >
                  <option value="Available">Available</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>

              {/* Task 13 */}
              <div className="control-group">
                <label>Marks: {marks} (Task 13)</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={marks} 
                  onChange={(e) => setMarks(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              {/* Task 14 */}
              <div className="control-group">
                <label>Age: {age} (Task 14)</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={age} 
                  onChange={(e) => setAge(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              {/* Task 15 */}
              <div className="control-group">
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    className="toggle-input"
                    checked={isPremium}
                    onChange={(e) => setIsPremium(e.target.checked)}
                  />
                  isPremium (Task 15)
                </label>
              </div>

              {/* Task 16 */}
              <div className="control-group">
                <label>Discount %: {discountPercentage}% (Task 16)</label>
                <input 
                  type="range" 
                  min="0" 
                  max="90" 
                  value={discountPercentage} 
                  onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              {/* Task 17 */}
              <div className="control-group">
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    className="toggle-input"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                  />
                  isActive status (Task 17)
                </label>
              </div>

              {/* Task 18 */}
              <div className="control-group">
                <label>User Role (Task 18)</label>
                <select 
                  className="control-input" 
                  value={userRole} 
                  onChange={(e) => setUserRole(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>

              {/* Task 19 */}
              <div className="control-group">
                <label>Simulated Time (Task 19)</label>
                <select 
                  className="control-input" 
                  value={customTime} 
                  onChange={(e) => setCustomTime(e.target.value)}
                >
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              {/* Task 20 */}
              <div className="control-group">
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    className="toggle-input"
                    checked={hasCustomPic}
                    onChange={(e) => setHasCustomPic(e.target.checked)}
                  />
                  Custom Profile Uploaded (Task 20)
                </label>
              </div>
            </div>

            {/* Display Results */}
            <div className="playground-display">
              
              {/* Task 11 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 11: Auth Alert</div>
                {isLoggedIn ? (
                  <div className="alert-box alert-success animate-fade-in">
                    🔓 Login Successful! Welcome Back.
                  </div>
                ) : (
                  <div className="alert-box alert-warning animate-fade-in">
                    🔒 Please Login to continue.
                  </div>
                )}
              </div>

              {/* Task 12 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 12: Product Stock status</div>
                <div style={{ maxWidth: '280px' }}>
                  <ProductCard 
                    name="Wireless Earbuds" 
                    price={79} 
                    category="Electronics" 
                    emoji="🎧"
                    stockStatus={stockStatus === 'Available'} 
                  />
                </div>
              </div>

              {/* Task 13 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 13: Exam Results (Pass/Fail)</div>
                <div className="card" style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '80px', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ margin: 0 }}>Exam Score</h3>
                    <p style={{ margin: '4px 0 0 0' }}>Score: {marks} / 100</p>
                  </div>
                  <span className={`badge ${marks >= 35 ? 'badge-pass' : 'badge-fail'}`} style={{ fontSize: '1.1rem', padding: '10px 20px' }}>
                    {marks >= 35 ? 'Pass' : 'Fail'}
                  </span>
                </div>
              </div>

              {/* Task 14 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 14: Age Bracket Classification</div>
                <div className="card" style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '80px', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ margin: 0 }}>Identity Status</h3>
                    <p style={{ margin: '4px 0 0 0' }}>Reported Age: {age}</p>
                  </div>
                  <span className={`badge ${age >= 18 ? 'badge-open' : 'badge-closed'}`} style={{ fontSize: '1rem', padding: '8px 18px' }}>
                    {age >= 18 ? 'Adult' : 'Minor'}
                  </span>
                </div>
              </div>

              {/* Task 15 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 15: Subscription Badge</div>
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '15px', flexDirection: 'row' }}>
                  <div className="avatar-container" style={{ width: '50px', height: '50px' }}>
                    <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=VIP" alt="Vip" className="profile-avatar" style={{ borderWidth: isPremium ? '2px' : '0px', borderColor: 'gold' }} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0 }}>Valued Customer</h3>
                    <p style={{ margin: 0 }}>Status: Standard Tier</p>
                  </div>
                  {isPremium && (
                    <span className="badge badge-topper animate-pulse animate-glow" style={{ marginLeft: 'auto', padding: '6px 12px' }}>
                      👑 PREMIUM
                    </span>
                  )}
                </div>
              </div>

              {/* Task 16 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 16: Product Discount Label</div>
                <div style={{ maxWidth: '280px' }}>
                  <ProductCard 
                    name="Bluetooth Speaker" 
                    price={120} 
                    category="Audio" 
                    emoji="🔊"
                    discountPercentage={discountPercentage} 
                  />
                </div>
              </div>

              {/* Task 17 & 20 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Tasks 17 & 20: Profile Dynamic State</div>
                <div style={{ maxWidth: '300px' }}>
                  <ProfileCard 
                    name="Elena Fisher" 
                    role="Journalist" 
                    location="New York, USA"
                    isActive={isActive} 
                    hasCustomPic={hasCustomPic}
                    profileImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
                  />
                </div>
              </div>

              {/* Task 18 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 18: Admin Panel / User Dashboard switcher</div>
                {userRole === 'Admin' ? (
                  <div className="panel-mockup panel-admin animate-fade-in">
                    <h4>⚙️ Admin Control Panel</h4>
                    <ul>
                      <li>Database Connection Status: OK</li>
                      <li>System CPU Usage: 24%</li>
                      <li>Flush Application Cache</li>
                      <li>View Server Access Logs</li>
                    </ul>
                  </div>
                ) : (
                  <div className="panel-mockup panel-user animate-fade-in">
                    <h4>👤 User Dashboard</h4>
                    <ul>
                      <li>Welcome, Elena Fisher!</li>
                      <li>My Saved Articles (12)</li>
                      <li>Edit Profile Details</li>
                      <li>Notification Preferences</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Task 19 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 19: Time-Based Greetings</div>
                <div className="greeting-display animate-fade-in">
                  <span className="greeting-icon animate-float">{greeting.icon}</span>
                  <div className="greeting-text">{greeting.text}</div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: COMBINED PROPS AND CONDITIONAL RENDER CARDS */}
        {activeTab === 'combined' && (
          <div className="animate-fade-in">
            <h2 className="section-title">Tasks 21-29: Combined Logic Cards</h2>
            
            <div className="grid-3">
              {/* Task 21 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 21: Student Card (Topper Badge &gt; 90)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Topper Student */}
                  <div className="card">
                    <div className="card-header">
                      <span className="badge badge-student">Math Major</span>
                      <span className="badge badge-topper animate-glow">🏆 Topper</span>
                    </div>
                    <h3>Priya Sharma</h3>
                    <p><strong>Marks:</strong> 95 / 100</p>
                  </div>
                  {/* Regular Student */}
                  <div className="card">
                    <div className="card-header">
                      <span className="badge badge-student">History Major</span>
                    </div>
                    <h3>Pranitha Reddy</h3>
                    <p><strong>Marks:</strong> 72 / 100</p>
                  </div>
                </div>
              </div>

              {/* Task 22 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 22: Employee Card (Senior &gt; 5 yrs)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Senior Employee */}
                  <EmployeeCard 
                    name="Amanda Waller" 
                    designation="Director" 
                    salary={145000} 
                    department="Operations" 
                    experience={8} 
                  />
                  {/* Junior Employee */}
                  <EmployeeCard 
                    name="John Blake" 
                    designation="Associate Officer" 
                    salary={65000} 
                    department="Operations" 
                    experience={2} 
                  />
                </div>
              </div>

              {/* Task 23 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 23: Movie Card (Blockbuster &gt; 8.5)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Blockbuster Movie */}
                  <MovieCard 
                    title="Inception" 
                    rating={8.8} 
                    genre="Sci-Fi Thriller" 
                  />
                  {/* Standard Movie */}
                  <MovieCard 
                    title="The Avengers" 
                    rating={8.0} 
                    genre="Action" 
                  />
                </div>
              </div>

              {/* Task 24 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 24: Product Card (Sale Badge)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Sale Product */}
                  <ProductCard 
                    name="Fitbit Charge 6" 
                    price={159} 
                    category="Fitness" 
                    emoji="⌚"
                    stockStatus="Available"
                    isOnSale={true} 
                  />
                  {/* Normal Product */}
                  <ProductCard 
                    name="Yoga Mat" 
                    price={35} 
                    category="Fitness" 
                    emoji="🧘"
                    stockStatus="Available"
                    isOnSale={false} 
                  />
                </div>
              </div>

              {/* Task 25 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 25: Course Card (Enrollment Closed)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Course Full */}
                  <CourseCard 
                    courseName="Deep Learning Bootcamp" 
                    trainer="Andrew Ng" 
                    duration="80 Hours" 
                    fee={350} 
                    seatsBooked={50}
                    seatsTotal={50} 
                  />
                  {/* Course Open */}
                  <CourseCard 
                    courseName="Prompt Engineering 101" 
                    trainer="Sam Altman" 
                    duration="10 Hours" 
                    fee={49} 
                    seatsBooked={24}
                    seatsTotal={100} 
                  />
                </div>
              </div>

              {/* Task 26 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 26: Restaurant Card (Business Hours)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Open Restaurant */}
                  <RestaurantCard 
                    name="Le Bistro Parisien" 
                    cuisine="French" 
                    rating={4.8} 
                    openingHour={9}
                    closingHour={22}
                    currentHour={13} 
                  />
                  {/* Closed Restaurant */}
                  <RestaurantCard 
                    name="Late Night Tacos" 
                    cuisine="Mexican" 
                    rating={4.5} 
                    openingHour={18}
                    closingHour={2}
                    currentHour={10} 
                  />
                </div>
              </div>

              {/* Task 27 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 27: Weather Card Conditions</div>
                <div className="grid-3" style={{ gridTemplateColumns: '1fr', gap: '12px' }}>
                  <WeatherCard city="Tokyo" temperature={28} condition="Sunny" />
                  <WeatherCard city="Seattle" temperature={14} condition="Heavy Rain" />
                  <WeatherCard city="London" temperature={18} condition="Cloudy Overcast" />
                </div>
              </div>

              {/* Task 28 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 28: Profile Card (Verified User Badge)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Verified User */}
                  <ProfileCard 
                    name="Tony Stark" 
                    role="Tech Billionaire" 
                    location="Malibu, California" 
                    isVerified={true}
                    isActive={true}
                  />
                  {/* Regular User */}
                  <ProfileCard 
                    name="Ned Leeds" 
                    role="Associate Intern" 
                    location="Queens, NY" 
                    isVerified={false}
                    isActive={false}
                  />
                </div>
              </div>

              {/* Task 29 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 29: Job Card (Remote / On-site)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Remote Job */}
                  <JobCard 
                    title="Senior React Developer" 
                    company="Vercel" 
                    location="San Francisco, CA" 
                    jobType="Remote" 
                  />
                  {/* On-site Job */}
                  <JobCard 
                    title="System Operations Intern" 
                    company="Tesla Factory" 
                    location="Austin, TX" 
                    jobType="On-site" 
                  />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: STUDENT MANAGEMENT DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="animate-fade-in">
            <StudentDashboard />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
