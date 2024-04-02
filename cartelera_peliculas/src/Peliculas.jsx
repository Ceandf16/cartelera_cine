import React, { useEffect, useState } from "react";
import Card from "./Card";
function Peliculas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Función para realizar la solicitud de red
    const apiKey = "de139070782acc39dde997692068ec2c";
    const privatekey = "0fdfc2d2229ebd10e353db1e75ba9c6d9c18ab64";
    const movieId = "id_de_la_pelicula";
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/characters?apikey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    // Llama a la función para realizar la solicitud de red al montar el componente
    fetchData();
  }, []); // El segundo argumento [] asegura que useEffect solo se ejecute una vez al montar el componente
  console.log(data);
  return (
    <div>
      {loading && <p>Loading...</p>}
      <div className="card-container">
        {data?.data?.results?.map((peli) => (
          <Card
            key={peli.id}
            title={peli.name}
            description={peli.description}
            imageUrl={peli.thumbnail.path + "." + peli.thumbnail.extension}
          />
        ))}
      </div>
    </div>
  );
}

export default Peliculas;
