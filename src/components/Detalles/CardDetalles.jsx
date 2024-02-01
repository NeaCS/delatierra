import { useParams } from "react-router-dom";


const CardDetalles = () => {
    const { id } = useParams();
  return (
    <div>
      Aquí van los detalles del plato id: {id}
    </div>
  )
}

export default CardDetalles
