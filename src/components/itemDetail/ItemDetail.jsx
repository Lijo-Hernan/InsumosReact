import React, {useState, useEffect} from 'react';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({prod}) => {

    const onAdd = (unidades) => {
        alert(unidades)
    };

    return (
        <div className='container'>
            <section className='item__card'>
            {(prod.stock) == 0 ? <img src="../public/data/sin_stock.gif" alt="Sin Stock" className='sinStock'/> 
            : ''}
            <h2 className='item__titulo'>{prod.nombre}</h2>
                <img src="../public/data/tresVias.png" alt="IMAGEN" className='item__img'/>
            <p className='item__p'>$ {prod.precio}</p>
                {(prod.stock) > 1 ? <p className='item__p'>{prod.stock} unidades disponibles</p> 
                : <p className='item__p'>{prod.stock} unidad disponible</p>}
                <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
            </section>
        </div>
    );
};

export default ItemDetail;