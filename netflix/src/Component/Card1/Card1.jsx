import "./Card1.css";

const Card1 = ({ title, icon,body }) => {
  return (
    <>
      <div className="card1">
        <h1 className="card1-h1">{title}</h1>
        <p className="card1-p">
        {body}
        </p>
        <div className="card1-icon">{icon}</div>
      </div>
    </>
  );
};

export default Card1;
