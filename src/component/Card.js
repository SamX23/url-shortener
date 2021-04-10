function Card({ children, className }) {
  return (
    <div className="card">
      <div className={`card-body ${className}`}>{children}</div>
    </div>
  );
}

export default Card;
