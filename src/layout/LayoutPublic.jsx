import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const LayoutPublic = () => {
  return (
    <>
      <div className="divApp">
        <Navbar />
        <Outlet />
        
      </div>{" "}
      <Footer />
    </>
  );
};

export default LayoutPublic;