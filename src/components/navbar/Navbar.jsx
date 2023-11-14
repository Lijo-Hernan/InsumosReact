import React from 'react';
import './navBar.css'
import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {

    const enlaces = [
        "Contrastes",
        "Descartables",
        "Consumibles"
    ]


    return (
        <nav className='navbar'>
            <ul className="navbar__list">

                {enlaces.map((e,id) => 
                    <li key={id}>
                        <a href={`../${e}`} className='boton'>
                        {e}
                        </a>
                    </li>
                )}

                {/* <li><a href="../Contrastes" className='boton'>Contrastes</a></li>
                <li><a href="../Descartables" className='boton'>Descartables</a></li>
                <li><a href="../Consumibles" className='boton'>Consumibles</a></li> */}

            </ul>
            <CartWidget className="carrito"/>
        </nav>
    );
};

export default NavBar;