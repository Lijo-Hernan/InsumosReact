import React from "react";
import './header.css'
import Navbar from "../navbar/navbar";
import logo from "/src/assets/logo.jpg"

const Header = () => {
    return (
        <header className="header">
                <img src= {logo} alt="logo Ecomerce" className="header__img" />
                <h1 className="header__title">Insumos React</h1>
                <Navbar/>
        </header>
    )
}

export default Header