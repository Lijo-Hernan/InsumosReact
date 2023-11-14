import React from 'react';
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
                <img src={prod.imagen} alt="IMAGEN" className='item__img'/>
            <h2 className='item__titulo'>$ {prod.precio}</h2>
            <h3 className='item__p'>{prod.marca}</h3>
            <p className='item__p'>{prod.descripcion}</p>
                {(prod.stock) > 1 ? <p className='item__p'>{prod.stock} unidades disponibles</p> 
                : <p className='item__p'>{prod.stock} unidad disponible</p>}
                <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
            </section>
        </div>
    );
};

export default ItemDetail;