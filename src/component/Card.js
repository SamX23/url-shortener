const Card = ({ children, className }) => (
  <div className="card">
    <div className={`card-body ${className}`}>{children}</div>
  </div>
);

export default Card;
