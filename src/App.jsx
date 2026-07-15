import React, { useState } from 'react';
import './App.css';

// Import components from tasks 1-30
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

// Import components from tasks 31-70
import { 
  StatusBadge, 
  AlertBox, 
  CustomButton, 
  NotificationCard 
} from './components/CommonComponents';

import { 
  LaptopCard, 
  MobileCard, 
  CarCard, 
  FlightCard, 
  HotelCard, 
  DoctorCard, 
  MedicineCard, 
  FoodCard, 
  MovieCardAdult, 
  CustomerCard, 
  PlayerCard, 
  TeacherCard, 
  BankAccountCard, 
  BusTicketCard, 
  OrderCard, 
  QuizCard, 
  TaskCard, 
  PaymentCard, 
  GymMemberCard, 
  SubscriptionCard 
} from './components/SpecializedCards';

import { 
  EmployeeDirectory, 
  MovieGallery, 
  ShoppingCartSummary, 
  Leaderboard, 
  CourseCatalog, 
  MultiRoleDashboard 
} from './components/BonusModules';

function App() {
  const [activeTab, setActiveTab] = useState('props');
  const [showcaseFilter, setShowcaseFilter] = useState('all');

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

  // Task 61: List of 20 products
  const twentyProducts = [
    { id: 1, name: 'MacBook Pro M3 Max', price: 3499, category: 'Electronics', emoji: '💻', stockStatus: 'Available', discountPercentage: 10, isFeatured: true, isOnSale: false },
    { id: 2, name: 'Nothing Phone (2)', price: 599, category: 'Electronics', emoji: '📱', stockStatus: 'Available', discountPercentage: 0, isFeatured: false, isOnSale: true },
    { id: 3, name: 'Tesla Model Y', price: 44990, category: 'Automotive', emoji: '🚗', stockStatus: 'Available', discountPercentage: 0, isFeatured: true, isOnSale: false },
    { id: 4, name: 'Rolex Daytona', price: 14500, category: 'Luxury', emoji: '⌚', stockStatus: 'Out of Stock', discountPercentage: 0, isFeatured: true, isOnSale: false },
    { id: 5, name: 'AirPods Max', price: 549, category: 'Audio', emoji: '🎧', stockStatus: 'Available', discountPercentage: 15, isFeatured: false, isOnSale: true },
    { id: 6, name: 'Herman Miller Embody', price: 1800, category: 'Furniture', emoji: '🪑', stockStatus: 'Available', discountPercentage: 5, isFeatured: true, isOnSale: false },
    { id: 7, name: 'Nike Air Jordan 1', price: 180, category: 'Apparel', emoji: '👟', stockStatus: 'Available', discountPercentage: 20, isFeatured: false, isOnSale: true },
    { id: 8, name: 'iPad Pro 11-inch', price: 799, category: 'Electronics', emoji: '📱', stockStatus: 'Available', discountPercentage: 0, isFeatured: false, isOnSale: false },
    { id: 9, name: 'GoPro Hero 12 Black', price: 399, category: 'Camera', emoji: '📹', stockStatus: 'Out of Stock', discountPercentage: 0, isFeatured: false, isOnSale: false },
    { id: 10, name: 'Kindle Scribe', price: 339, category: 'Electronics', emoji: '📚', stockStatus: 'Available', discountPercentage: 10, isFeatured: false, isOnSale: true },
    { id: 11, name: 'DJI Avata 2', price: 999, category: 'Drones', emoji: '🛸', stockStatus: 'Available', discountPercentage: 0, isFeatured: true, isOnSale: false },
    { id: 12, name: 'Sony PlayStation 5 Slim', price: 449, category: 'Gaming', emoji: '🎮', stockStatus: 'Available', discountPercentage: 0, isFeatured: true, isOnSale: false },
    { id: 13, name: 'Steam Deck OLED', price: 549, category: 'Gaming', emoji: '🎮', stockStatus: 'Available', discountPercentage: 8, isFeatured: false, isOnSale: true },
    { id: 14, name: 'Secretlab Titan Evo', price: 549, category: 'Furniture', emoji: '🪑', stockStatus: 'Out of Stock', discountPercentage: 0, isFeatured: false, isOnSale: false },
    { id: 15, name: 'Fitbit Charge 6', price: 159, category: 'Wearables', emoji: '⌚', stockStatus: 'Available', discountPercentage: 12, isFeatured: false, isOnSale: true },
    { id: 16, name: 'Logitech MX Master 3S', price: 99, category: 'Peripherals', emoji: '🖱️', stockStatus: 'Available', discountPercentage: 0, isFeatured: false, isOnSale: false },
    { id: 17, name: 'Razer Blade 16', price: 2999, category: 'Gaming', emoji: '💻', stockStatus: 'Available', discountPercentage: 0, isFeatured: true, isOnSale: false },
    { id: 18, name: 'Yeti Roadie 24 Cooler', price: 250, category: 'Gear', emoji: '📦', stockStatus: 'Available', discountPercentage: 0, isFeatured: false, isOnSale: false },
    { id: 19, name: 'Theragun PRO G5', price: 599, category: 'Health', emoji: '🔫', stockStatus: 'Available', discountPercentage: 15, isFeatured: false, isOnSale: true },
    { id: 20, name: 'Dyson Supersonic', price: 429, category: 'Beauty', emoji: '💇', stockStatus: 'Out of Stock', discountPercentage: 0, isFeatured: true, isOnSale: false },
  ];

  const arrayStudents = [
    { name: 'Sarah Connor', age: 21, course: 'Robotics Engineering', marks: 98 },
    { name: 'Kenji Sato', age: 19, course: 'Machine Learning', marks: 88 },
    { name: 'Maya Lin', age: 22, course: 'Data Visualization', marks: 96 },
    { name: 'Carlos Diaz', age: 20, course: 'Cybersecurity', marks: 74 }
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
          An advanced interactive playground demonstrating all 70 tasks in React. 
          Modify props, toggle states, inspect directories, and verify conditional badges live.
        </p>
      </header>

      {/* Tabs Menu */}
      <div className="tabs-navigation">
        <button 
          className={`tab-btn ${activeTab === 'props' ? 'active' : ''}`}
          onClick={() => setActiveTab('props')}
        >
          📂 Card Showcase (Tasks 1-10, 21-29, 31-59)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'conditional' ? 'active' : ''}`}
          onClick={() => setActiveTab('conditional')}
        >
          🧪 Interactive Lab (Tasks 11-20, 62-64)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboards & Directories (Tasks 30, 60, 65, 70)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'bonus' ? 'active' : ''}`}
          onClick={() => setActiveTab('bonus')}
        >
          🛍️ Galleries & Catalogs (Tasks 61, 66-69)
        </button>
      </div>

      {/* Tab Contents */}
      <div className="tab-content">
        
        {/* TAB 1: CARD SHOWCASE */}
        {activeTab === 'props' && (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 className="section-title" style={{ margin: 0, border: 'none', padding: 0 }}>Prop-driven Card Showcase</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['all', 'devices', 'finance & travel', 'medical & food', 'personal & others'].map(cat => (
                  <button 
                    key={cat} 
                    className={`tab-btn btn-sm ${showcaseFilter === cat ? 'active' : ''}`} 
                    onClick={() => setShowcaseFilter(cat)}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid-3">
              {/* Category: Devices & Automotive */}
              {(showcaseFilter === 'all' || showcaseFilter === 'devices') && (
                <>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 1: Basic Student</div>
                    <Student name="Alice Smith" age={20} course="Software Engineering" />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 31: Laptop Card (RAM &gt;= 16GB)</div>
                    <LaptopCard brand="Razer" model="Blade 16" ram="16GB" price={2999} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 32: Mobile Card (5G supported)</div>
                    <MobileCard brand="Samsung" model="S24 Ultra" supports5G={true} price={1299} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 33: Car Card (Electric)</div>
                    <CarCard make="Tesla" model="Model S Plaid" fuelType="Electric" price={89990} />
                  </div>
                </>
              )}

              {/* Category: Finance, Travel & Booking */}
              {(showcaseFilter === 'all' || showcaseFilter === 'finance & travel') && (
                <>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 34: Flight Card (Seats)</div>
                    <FlightCard flightNo="AA-240" destination="New York" availableSeats={12} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 35: Hotel Card (Breakfast)</div>
                    <HotelCard name="Hilton Tokyo" rating={5} price={350} breakfastIncluded={true} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 45: Bank Account (Warning &lt; ₹1000)</div>
                    <BankAccountCard accNo="123456789012" holderName="Priya Ramthu" balance={850} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 46: Bus Ticket Status</div>
                    <BusTicketCard ticketId="TX-949" from="Austin" to="Dallas" status="Confirmed" />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 47: Order Status Card (Delivered)</div>
                    <OrderCard orderId="ORD-2391" itemsCount={4} total={185.00} status="Delivered" />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 54: Payment Status (Pending)</div>
                    <PaymentCard invoiceNo="INV-4011" amount={450.00} isPaid={false} />
                  </div>
                </>
              )}

              {/* Category: Medical & Food */}
              {(showcaseFilter === 'all' || showcaseFilter === 'medical & food') && (
                <>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 36: Doctor Card</div>
                    <DoctorCard name="Stephen Strange" specialty="Neurosurgeon" isAvailable={true} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 37: Medicine Card (Prescription)</div>
                    <MedicineCard name="Amoxicillin" dosage="500mg" requiresPrescription={true} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 38: Food Card (Veg/Non-Veg)</div>
                    <FoodCard name="Paneer Butter Masala" category="Main Course" isVeg={true} />
                  </div>
                </>
              )}

              {/* Category: Personal, Sports & Subscriptions */}
              {(showcaseFilter === 'all' || showcaseFilter === 'personal & others') && (
                <>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 39: Movie Adult Warning (18+)</div>
                    <MovieCardAdult title="Deadpool & Wolverine" ratingValue={8.1} genre="Action Comedy" isAdult={true} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 42: Customer Loyalty (Silver Tier)</div>
                    <CustomerCard name="Clara Oswald" points={750} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 43: Player Card (Captain)</div>
                    <PlayerCard name="Lionel Messi" position="Forward" isCaptain={true} />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 44: Teacher Card (HOD)</div>
                    <TeacherCard name="Dr. Evelyn Carter" subject="Quantum Physics" designation="Head of Department" />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 50: Quiz Card Status</div>
                    <QuizCard title="HTML & CSS Essentials" subject="Frontend Web" status="Completed" />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 51: Task Priority Card</div>
                    <TaskCard title="Deploy server to staging environment" priority="High" />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 58: Gym Expiry Warning</div>
                    <GymMemberCard name="John Smith" expiryDate="2025-12-31" />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 59: Subscription Status (Renew Soon)</div>
                    <SubscriptionCard serviceName="Netflix Premium" status="Renew Soon" />
                  </div>
                  <div className="card-demo-box">
                    <div className="demo-title-badge">Task 9: Company Info</div>
                    <CompanyCard company={companyObject} />
                  </div>
                </>
              )}
            </div>

            {/* Existing Cards Mapped lists */}
            {showcaseFilter === 'all' && (
              <>
                <div className="card-demo-box" style={{ marginTop: '24px' }}>
                  <div className="demo-title-badge">Task 8 & 55: Student List (Scholarship badge &gt; 95%)</div>
                  <StudentList students={arrayStudents} />
                </div>

                <div className="card-demo-box" style={{ marginTop: '30px' }}>
                  <div className="demo-title-badge">Task 3 & 56: Product List (Free Delivery &gt; $500)</div>
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
              </>
            )}
          </div>
        )}

        {/* TAB 2: INTERACTIVE LAB */}
        {activeTab === 'conditional' && (
          <div className="playground-layout animate-fade-in">
            {/* Sidebar Knobs */}
            <div className="control-panel">
              <h3>Lab Parameters</h3>
              
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

              <div className="control-group">
                <label>Marks: {marks} (Task 13 & 55)</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={marks} 
                  onChange={(e) => setMarks(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

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
              
              {/* Task 62 & 63 Demonstration */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Tasks 62 & 63: Reusable Badges & Alert Boxes</div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <StatusBadge status="Success" />
                  <StatusBadge status="Pending" />
                  <StatusBadge status="Error" />
                  <StatusBadge status="Info" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <AlertBox type="Success" message="System operation completed successfully." />
                  <AlertBox type="Error" message="Unable to establish database connection." />
                  <AlertBox type="Warning" message="Server resource limits approaching 90% threshold." />
                </div>
              </div>

              {/* Task 64 Custom Buttons */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 64: Reusable Multi-Design Buttons</div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <CustomButton label="Success Large" color="green" size="large" onClick={() => alert('Success')} />
                  <CustomButton label="Danger Normal" color="red" size="medium" onClick={() => alert('Danger')} />
                  <CustomButton label="Special Pink Small" color="pink" size="small" onClick={() => alert('Pink')} />
                  <CustomButton label="Gray Bordered" color="gray" size="medium" onClick={() => alert('Gray')} />
                </div>
              </div>

              {/* Task 52 Notification cards */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 52: Dynamic Notifications</div>
                <div className="grid-2" style={{ marginBottom: 0 }}>
                  <NotificationCard type="Success" title="Transaction Approved" message="Payment of $24.50 processed securely." />
                  <NotificationCard type="Error" title="Connection Timeout" message="Unable to sync local profiles to remote servers." />
                </div>
              </div>

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

              {/* Task 13 & 55 */}
              <div className="card-demo-box">
                <div className="demo-title-badge">Task 13 & 55: Exam Results & Scholarship Badge</div>
                <div className="grid-2" style={{ marginBottom: 0 }}>
                  <div className="card" style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '80px', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ margin: 0 }}>Exam Score</h3>
                      <p style={{ margin: '4px 0 0 0' }}>Score: {marks} / 100</p>
                    </div>
                    <span className={`badge ${marks >= 35 ? 'badge-pass' : 'badge-fail'}`} style={{ fontSize: '1.1rem', padding: '10px 20px' }}>
                      {marks >= 35 ? 'Pass' : 'Fail'}
                    </span>
                  </div>
                  <Student name="Interactive Student" age={19} course="Computer Science" marks={marks} />
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

        {/* TAB 3: DASHBOARDS & DIRECTORIES */}
        {activeTab === 'dashboard' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Task 70: Multi-Role Portal */}
            <MultiRoleDashboard />
            
            {/* Task 65: Employee Directory */}
            <EmployeeDirectory />

            {/* Task 30 & 60: Student Dashboard */}
            <StudentDashboard />
          </div>
        )}

        {/* TAB 4: BONUS MODULES (GALLERIES & CATALOGS) */}
        {activeTab === 'bonus' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Task 69: Course Catalog */}
            <CourseCatalog />

            {/* Task 68: Leaderboard */}
            <Leaderboard />

            {/* Task 67: Shopping Cart Summary */}
            <ShoppingCartSummary />

            {/* Task 66: Movie Gallery */}
            <MovieGallery />

            {/* Task 61: 20 Products Conditional Badges Grid */}
            <div className="products-grid-20 card" style={{ background: 'rgba(31, 41, 55, 0.4)' }}>
              <h3>🛍️ 20-Product Conditional Badges Grid (Task 61)</h3>
              <p className="text-secondary" style={{ marginBottom: '20px' }}>Mapping 20 products conditionally rendering Featured (Gold), Sale (Red), and Out of Stock (Grey) badges</p>
              
              <div className="grid-3">
                {twentyProducts.map(prod => (
                  <ProductCard 
                    key={prod.id}
                    name={prod.name}
                    price={prod.price}
                    category={prod.category}
                    emoji={prod.emoji}
                    stockStatus={prod.stockStatus}
                    discountPercentage={prod.discountPercentage}
                    isOnSale={prod.isOnSale}
                    isFeatured={prod.isFeatured}
                  />
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;
