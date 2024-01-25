
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../assets/styles/Carrousel.css"
import comida1 from '../../assets/images/comida1.jpg';
import comida2 from '../../assets/images/comida2.jpg';
import comida3 from '../../assets/images/comida3.jpg';
import comida4 from '../../assets/images/comida4.jpg';
import comida5 from '../../assets/images/comida5.jpg';
import HoverCarousel from "hover-carousel";

const MyImageCarousel = () => {
  const images = [
    comida1,
    comida2,
    comida3,
    comida4,
    comida5,
    // Add more image URLs here
  ];

  return (
    <div>
      <HoverCarousel images={images} />
    </div>
  );
};

export default MyImageCarousel;
