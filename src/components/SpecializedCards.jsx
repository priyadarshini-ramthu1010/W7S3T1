import React from 'react';

// Task 31: LaptopCard component
export function LaptopCard({ brand, model, ram, price }) {
  const isGaming = Number(ram.replace('GB', '')) >= 16;
  return (
    <div className="card laptop-card">
      <div className="card-header">
        <span className="badge badge-product">Laptop</span>
        {isGaming && <span className="badge badge-sale animate-pulse">🎮 Gaming Laptop</span>}
      </div>
      <h3>{brand} {model}</h3>
      <div className="card-body">
        <p><strong>RAM:</strong> {ram}</p>
        <p><strong>Price:</strong> ${price}</p>
      </div>
    </div>
  );
}

// Task 32: MobileCard component
export function MobileCard({ brand, model, supports5G, price }) {
  return (
    <div className="card mobile-card">
      <div className="card-header">
        <span className="badge badge-product">Mobile</span>
        {supports5G && <span className="badge badge-open">📶 5G Supported</span>}
      </div>
      <h3>{brand} {model}</h3>
      <p className="price">${price}</p>
    </div>
  );
}

// Task 33: CarCard component
export function CarCard({ make, model, fuelType, price }) {
  const isElectric = (fuelType || '').toLowerCase() === 'electric';
  return (
    <div className="card car-card">
      <div className="card-header">
        <span className="badge badge-company">Automobile</span>
        {isElectric && <span className="badge badge-open animate-glow">⚡ Electric Vehicle</span>}
      </div>
      <h3>{make} {model}</h3>
      <p><strong>Fuel Type:</strong> {fuelType}</p>
      <p><strong>Price:</strong> ${Number(price).toLocaleString()}</p>
    </div>
  );
}

// Task 34: FlightCard component
export function FlightCard({ flightNo, destination, availableSeats }) {
  const isAvailable = Number(availableSeats) > 0;
  return (
    <div className={`card flight-card ${!isAvailable ? 'course-closed' : ''}`}>
      <div className="card-header">
        <span className="badge badge-genre">Flight {flightNo}</span>
        <span className={`badge ${isAvailable ? 'badge-open' : 'badge-closed'}`}>
          {isAvailable ? `Seats Available (${availableSeats})` : 'Fully Booked'}
        </span>
      </div>
      <h3>To {destination}</h3>
    </div>
  );
}

// Task 35: HotelCard component
export function HotelCard({ name, rating, price, breakfastIncluded }) {
  return (
    <div className="card hotel-card">
      <div className="card-header">
        <span className="badge badge-cuisine">★ {rating} Star Hotel</span>
        {breakfastIncluded && <span className="badge badge-discount">🍳 Free Breakfast</span>}
      </div>
      <h3>{name}</h3>
      <p className="price">${price} / night</p>
    </div>
  );
}

// Task 36: DoctorCard component
export function DoctorCard({ name, specialty, isAvailable }) {
  return (
    <div className="card doctor-card">
      <div className="card-header">
        <span className="badge badge-employee">{specialty}</span>
        <span className={`badge ${isAvailable ? 'badge-open' : 'badge-closed'}`}>
          {isAvailable ? '🟢 Available Today' : '🔴 Not Available'}
        </span>
      </div>
      <h3>Dr. {name}</h3>
    </div>
  );
}

// Task 37: MedicineCard component
export function MedicineCard({ name, dosage, requiresPrescription }) {
  return (
    <div className="card medicine-card">
      <div className="card-header">
        <span className="badge badge-book">Pharmacy</span>
        {requiresPrescription && <span className="badge badge-closed">⚠️ Prescription Required</span>}
      </div>
      <h3>{name}</h3>
      <p><strong>Dosage:</strong> {dosage}</p>
    </div>
  );
}

// Task 38: FoodCard component
export function FoodCard({ name, category, isVeg }) {
  return (
    <div className="card food-card">
      <div className="card-header">
        <span className="badge badge-cuisine">{category}</span>
        <span className={`badge ${isVeg ? 'badge-open' : 'badge-closed'}`} style={{ textTransform: 'none' }}>
          {isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
        </span>
      </div>
      <h3>{name}</h3>
    </div>
  );
}

// Task 39: MovieCard 18+ component (custom extension)
export function MovieCardAdult({ title, ratingValue, genre, isAdult }) {
  return (
    <div className="card movie-card">
      <div className="card-header">
        <span className="badge badge-genre">{genre}</span>
        {isAdult && <span className="badge badge-closed" style={{ fontWeight: '800' }}>18+</span>}
      </div>
      <h3>{title}</h3>
      <p>⭐ {ratingValue}/10</p>
    </div>
  );
}

// Task 42: CustomerCard component
export function CustomerCard({ name, points }) {
  const pts = Number(points || 0);
  let tier = 'Bronze';
  let badgeClass = 'badge-closed';
  
  if (pts > 1000) {
    tier = 'Gold';
    badgeClass = 'badge-topper';
  } else if (pts >= 500) {
    tier = 'Silver';
    badgeClass = 'badge-senior';
  }

  return (
    <div className="card customer-card">
      <div className="card-header">
        <span className="badge badge-student">Loyalty Member</span>
        <span className={`badge ${badgeClass}`}>{tier}</span>
      </div>
      <h3>{name}</h3>
      <p><strong>Loyalty Points:</strong> {pts}</p>
    </div>
  );
}

// Task 43: PlayerCard component
export function PlayerCard({ name, position, isCaptain }) {
  return (
    <div className="card player-card">
      <div className="card-header">
        <span className="badge badge-genre">{position}</span>
        {isCaptain && <span className="badge badge-topper">⭐ Captain</span>}
      </div>
      <h3>{name}</h3>
    </div>
  );
}

// Task 44: TeacherCard component
export function TeacherCard({ name, subject, designation }) {
  const isHOD = (designation || '').toUpperCase() === 'HEAD OF DEPARTMENT' || (designation || '').toUpperCase() === 'HOD';
  return (
    <div className="card teacher-card">
      <div className="card-header">
        <span className="badge badge-employee">{subject} Faculty</span>
        {isHOD && <span className="badge badge-sale animate-pulse">👑 HOD</span>}
      </div>
      <h3>{name}</h3>
      <p className="text-secondary">{designation}</p>
    </div>
  );
}

// Task 45: BankAccountCard component
export function BankAccountCard({ accNo, holderName, balance }) {
  const bal = Number(balance || 0);
  const isLowBalance = bal < 1000;
  return (
    <div className={`card bank-card ${isLowBalance ? 'fail-border' : 'pass-border'}`}>
      <div className="card-header">
        <span className="badge badge-company">Savings Account</span>
        {isLowBalance && <span className="badge badge-closed animate-pulse">⚠️ Min Balance Warning</span>}
      </div>
      <h3>{holderName}</h3>
      <p className="text-secondary">Acc: ****{accNo.slice(-4)}</p>
      <div className="product-price-section">
        <span className={isLowBalance ? 'text-danger price' : 'text-success price'}>
          ₹{bal.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

// Task 46: BusTicketCard component
export function BusTicketCard({ ticketId, from, to, status }) {
  const normStatus = (status || '').toLowerCase();
  let badgeClass = 'badge-employee';
  
  if (normStatus === 'confirmed') badgeClass = 'badge-open';
  else if (normStatus === 'waiting list') badgeClass = 'badge-senior';
  else if (normStatus === 'cancelled') badgeClass = 'badge-closed';

  return (
    <div className="card ticket-card">
      <div className="card-header">
        <span className="badge badge-genre">Ticket #{ticketId}</span>
        <span className={`badge ${badgeClass}`}>{status}</span>
      </div>
      <h3>{from} ➔ {to}</h3>
    </div>
  );
}

// Task 47: OrderCard component
export function OrderCard({ orderId, itemsCount, total, status }) {
  const normStatus = (status || '').toLowerCase();
  
  // Choose styles based on status
  let cardClass = 'order-pending';
  let badgeClass = 'badge-senior';
  if (normStatus === 'shipped') {
    cardClass = 'order-shipped';
    badgeClass = 'badge-course';
  } else if (normStatus === 'delivered') {
    cardClass = 'order-delivered';
    badgeClass = 'badge-open';
  }

  return (
    <div className={`card order-card ${cardClass}`} style={{
      borderLeft: '5px solid ' + (normStatus === 'delivered' ? '#10b981' : normStatus === 'shipped' ? '#06b6d4' : '#f59e0b')
    }}>
      <div className="card-header">
        <span className="badge badge-company">Order #{orderId}</span>
        <span className={`badge ${badgeClass}`}>{status}</span>
      </div>
      <h3>{itemsCount} Items</h3>
      <p><strong>Total:</strong> ${total}</p>
    </div>
  );
}

// Task 50: QuizCard component
export function QuizCard({ title, subject, status }) {
  const isCompleted = (status || '').toLowerCase() === 'completed';
  return (
    <div className="card quiz-card">
      <div className="card-header">
        <span className="badge badge-student">{subject}</span>
        <span className={`badge ${isCompleted ? 'badge-open' : 'badge-closed'}`}>
          {isCompleted ? '✓ Completed' : 'Not Attempted'}
        </span>
      </div>
      <h3>{title}</h3>
    </div>
  );
}

// Task 51: TaskCard component
export function TaskCard({ title, priority }) {
  const normPri = (priority || '').toLowerCase();
  let badgeClass = 'badge-employee';
  
  if (normPri === 'high') badgeClass = 'badge-closed animate-pulse';
  else if (normPri === 'medium') badgeClass = 'badge-senior';
  else if (normPri === 'low') badgeClass = 'badge-open';

  return (
    <div className="card task-card">
      <div className="card-header">
        <span className="badge badge-company">Task</span>
        <span className={`badge ${badgeClass}`}>{priority} Priority</span>
      </div>
      <h3>{title}</h3>
    </div>
  );
}

// Task 54: PaymentCard component
export function PaymentCard({ invoiceNo, amount, isPaid }) {
  return (
    <div className={`card payment-card ${isPaid ? 'pass-border' : 'fail-border'}`}>
      <div className="card-header">
        <span className="badge badge-company">Invoice #{invoiceNo}</span>
        <span className={`badge ${isPaid ? 'badge-open' : 'badge-closed'}`}>
          {isPaid ? 'Paid' : 'Pending Payment'}
        </span>
      </div>
      <h3>Amount: ${amount}</h3>
    </div>
  );
}

// Task 58: GymMemberCard component
export function GymMemberCard({ name, expiryDate }) {
  const parsedExpiry = new Date(expiryDate);
  const today = new Date();
  
  // Set time of both to midnight to compare days
  parsedExpiry.setHours(0,0,0,0);
  today.setHours(0,0,0,0);

  const isExpired = parsedExpiry < today;

  return (
    <div className={`card gym-card ${isExpired ? 'fail-border' : 'pass-border'}`}>
      <div className="card-header">
        <span className="badge badge-cuisine">Gym Membership</span>
        {isExpired ? (
          <span className="badge badge-closed">Membership Expired</span>
        ) : (
          <span className="badge badge-open">Member Active</span>
        )}
      </div>
      <h3>{name}</h3>
      <p><strong>Expiry Date:</strong> {expiryDate}</p>
    </div>
  );
}

// Task 59: SubscriptionCard component
export function SubscriptionCard({ serviceName, status }) {
  const normStat = (status || '').toLowerCase();
  let badgeClass = 'badge-open';

  if (normStat === 'expired') badgeClass = 'badge-closed';
  else if (normStat === 'renew soon') badgeClass = 'badge-senior animate-pulse';

  return (
    <div className="card subscription-card">
      <div className="card-header">
        <span className="badge badge-company">Streaming Services</span>
        <span className={`badge ${badgeClass}`}>{status}</span>
      </div>
      <h3>{serviceName}</h3>
    </div>
  );
}
