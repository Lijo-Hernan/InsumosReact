import React from "react";
import './header.css'

import Navbar from "../navbar/navbar";




const Header = () => {
    return (
        <header className="header">
                <img src="./src/assets/logo.jpg" alt="logo Ecomerce" className="header__img" />
                    <h1 className="header__title">Insumos react</h1>
                    <Navbar/>
        </header>
    )
}

export default Header