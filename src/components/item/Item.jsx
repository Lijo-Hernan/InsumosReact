import React, {useState} from 'react';
import './item.css'

const Item = ({producto}) => {


    return (
        <article className='item__card'>
            {(producto.stock) == 0 ? <img src="../public/data/sin_stock.gif" alt="Sin Stock" className='sinStock'/> 
            : ''}
            <h2 className='item__titulo'>{producto.nombre}</h2>
            <img src="../public/data/tresVias.png" alt="IMAGEN" className='item__img'/>
            <button className='item__boton'>Detalle del producto</button>
        </article>
    );
};

export default Item;