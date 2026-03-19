import "./Card.css";
import React from "react";

const Card = ({image}) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default Card;
