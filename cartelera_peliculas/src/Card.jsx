import React from "react";
import "./Card.css";
function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
