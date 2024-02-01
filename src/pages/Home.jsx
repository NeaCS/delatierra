// src/components/Home.js

import "../assets/styles/Home.css";
import Carrousel from "../components/Home/Carrousel";

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Bienvenido a De la Tierra a la Olla</h1>
      <p className="paragraph">
        Explora nuestras deliciosas recetas tradicionales chilenas y disfruta de
        la auténtica cocina.
      </p>
      <Carrousel />
    </div>
  );
};

export default Home;
