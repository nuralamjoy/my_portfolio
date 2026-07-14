import "./Card.css";

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="card-inner">{children}</div>
    </div>
  );
};

export default Card;
