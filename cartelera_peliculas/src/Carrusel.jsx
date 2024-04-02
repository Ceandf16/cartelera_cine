// Carrusel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import peli1 from "./assets/furiosa.jpg";
import peli2 from "./assets/madameweb.jpg";
import peli3 from "./assets/patos.jpg";
import peli4 from "./assets/terrifier.jpg";
import CarouselItem from "./CarouselItem";
// datos del api
import { useState } from "react";
import Peliculas from "./Peliculas";
function Carrusel() {
  const [peliculasA, setPeliculasA] = useState([]);

  const peliculas = [peli1, peli2, peli3, peli4];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8px",
  };

  const renderImages = () =>
    peliculas.map((image, index) => <CarouselItem key={index} image={image} />);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <Slider {...settings}>{renderImages()}</Slider>
      </div>
    </div>
  );
}

export default Carrusel;
