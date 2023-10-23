import React from "react";
import './header.css'
import logo from './assets/logo.jpg'
import CartWidget from "../cartWidget/CartWidget";


const Header = () => {
    return (
        <header>
            <div className="header">
                <img src={logo} alt="logo ecomerce" className="header__img" />
                    <h1 className="header__title">Insumos react</h1>
                    <CartWidget className="carrito"/>
                    <ul className="header__list">
                        <li><button href="#" >Inicio</button></li>
                        <li><button href="#" >Conectores</button></li>
                        <li><button href="#" >Contrastes</button></li>
                        <li><button href="#" >Descartables</button></li>
                    </ul>
                </div>
        </header>
    )
}

export default Header