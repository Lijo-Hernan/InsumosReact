import React from "react";
import './header.css'
import NavBar from "../navBar/NavBar";
import logo from "/src/assets/logo.jpg"

const Header = () => {
    return (
        <header className="header">
                <a href="/" className="header__cont"><img src= {logo} alt="logo Ecomerce" className="header__img"/></a>
                <h1 className="header__title">Insumos React</h1>
                <NavBar/>
        </header>
    )
}

export default Header