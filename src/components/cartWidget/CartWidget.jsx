import React from 'react';
import './cartWidget.css'
import { BsCart3 } from "react-icons/bs";


const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <BsCart3 className='cartWidget__img'/>
            <p className='cartWidget__p'>0</p>
        </div>
    );
};

export default CartWidget;