import { createBrowserRouter } from "react-router-dom";

//layout - not found
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";

// pages
import Home from "../pages/Home";
import Recetas from "../pages/Recetas";
import Contacto from "../pages/Contacto";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/recetas",
        element: <Recetas />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
    ],
  },
]);