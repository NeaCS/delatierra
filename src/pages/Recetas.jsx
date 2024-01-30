import { useEffect, useState } from "react";
import recetas from "../db/recetas.json";
import { Button, Card } from "react-bootstrap";
import "../assets/styles/Recetas.css";

const Recetas = () => {
  const [dataRecetas, setDataRecetas] = useState([]);

  useEffect(() => {
    setDataRecetas(recetas.recetas_chilenas);
  }, [recetas]);

  console.log("recetas", dataRecetas);
  return (
    <div className="recetas-container">
      <div>
        <h2>Aquí van las recetas</h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {dataRecetas.map((receta) => (
          <Card style={{ width: "18rem" }} key={receta.nombre}>
            <Card.Img variant="top" src="https://picsum.photos/50" />
            <Card.Body>
              <Card.Title>{receta.nombre}</Card.Title>
              <Card.Text>{receta.instrucciones}</Card.Text>
              <Button variant="success">Ver Detalles</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Recetas;
