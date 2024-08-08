import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/musica">Música</Link></li>
        <li><Link to="/category/programacion">Programación</Link></li>
        <li><Link to="/category/pintura">Pintura</Link></li>
        <li><Link to="/category/escritura">Escritura</Link></li>
        <li><Link to="/cart">Carrito</Link></li> {/* Enlace al carrito */}
      </ul>
    </nav>
  );
}

export default Navbar;
