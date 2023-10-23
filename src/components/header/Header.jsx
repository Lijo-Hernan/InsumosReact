import React from "react";
import './header.css'
import CartWidget from "../cartWidget/CartWidget";



const Header = () => {
    return (
        <header className="header">
                <img src="./src/assets/logo.jpg" alt="logo Ecomerce" className="header__img" />
                    <h1 className="header__title">Insumos react</h1>
                    <CartWidget className="carrito"/>
                    <ul className="header__list">
                        <li><a href="#" className="boton">Inicio</a></li>
                        <li><a href="#" className="boton">Conectores</a></li>
                        <li><a href="#" className="boton">Contrastes</a></li>
                        <li><a href="#" className="boton">Descartables</a></li>
                    </ul>
        </header>
    )
}

export default Header