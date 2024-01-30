// src/components/Navbar.js

import { NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.css'; // Importa el archivo de estilos


const Navbar = () => {
  return (
    <nav className="libreria-navbar">
      <div className="libreria-navbar_container-logo">
      <NavLink to="/">
          <img src="../assets/images/logo.jpg" alt="logo" />
        </NavLink>
      </div>

      <ul className="libreria-navbar_nav-links">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/recetas">Recetas</NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
