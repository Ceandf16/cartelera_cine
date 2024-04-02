import { useState } from "react";

import NavBar from "./NavBar.jsx";
import Carrusel from "./Carrusel.jsx";
import Peliculas from "./Peliculas.jsx";
function App() {
  return (
    <>
      <section className="navbar2">
        <div>
          <NavBar />
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="carrusel">
        <div className="min-h-screen w-screen flex justify-center items-center bg-gradient-to-t from-slate-950 to-slate-900">
          <div className="container mx-auto">
            <Carrusel />
          </div>
        </div>
      </section>
      <div className="catalogo">
        <Peliculas />
      </div>
    </>
  );
}

export default App;
