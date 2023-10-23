import React from 'react';
import './cartWidget.css'


const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <img className='cartWidget__img' src="../src/assets/carrito2.png" alt="carrito"/>
            <p className='cartWidget__p'>0</p>
        </div>
    );
};

export default CartWidget;