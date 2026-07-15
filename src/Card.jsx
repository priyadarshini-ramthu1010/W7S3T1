function Card({ name, email, city, country }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Country:</strong> {country}</p>
    </div>
  );
}

export default Card;
