import React from "react";

const Card = ({ name, age, img }) => {
  return (
    <div className="parent">
      <div className="card">
        <img className="img_card" src={img} alt={name} />
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <button className="btn">Click Me</button>
      </div>
    </div>
  );
};

export default Card;
