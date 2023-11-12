import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {


    return (
        <article className='item__card'>
            {(producto.stock) == 0 ? <img src="../public/data/sin_stock.gif" alt="Sin Stock" className='sinStock'/> 
            : ''}
            <h2 className='item__titulo'>{producto.nombre}</h2>
            <img src={producto.imagen} alt="IMAGEN" className='item__img'/>
            <Link to={`../item/${producto.id}`}><button className='item__boton'>Detalle del producto</button></Link>
        </article>
    );
};

export default Item;