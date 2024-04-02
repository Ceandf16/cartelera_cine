// CarouselItem.jsx
import React from "react";

const CarouselItem = ({ image }) => {
  return (
    <div>
      <div className="shadow slide-item transition-all">
        <img src={image} className="object-cover h-48 rounded" alt="pelicula" />
      </div>
    </div>
  );
};

export default CarouselItem;
