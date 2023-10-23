import React from 'react';
import './navbar.css'
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className="navbar__list">
                <li><a href="#" className="boton">Inicio</a></li>
                <li><a href="#" className="boton">Conectores</a></li>
                <li><a href="#" className="boton">Contrastes</a></li>
                <li><a href="#" className="boton">Descartables</a></li>
            </ul>
            <CartWidget className="carrito"/>
        </nav>
    );
};

export default Navbar;