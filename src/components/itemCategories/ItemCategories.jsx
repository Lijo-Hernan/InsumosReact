import React, {useState,useEffect} from 'react';
import Item from '../item/Item';
import { Link } from 'react-router-dom';

const ItemCategories = ({cat}) => {

    const [catProd, setCatProd]= useState (null); 


    useEffect (()=> {

        const fetchData = ()=> {
            fetch("/data/productos.json") 
            .then ((response) => response.json())
            .then ((data)=>{ 
                const prodCategoria = data.filter((item) => item.categoria === cat);
                setCatProd(prodCategoria)
            })
            .catch ((error)=> console.log(error))
        }
        fetchData()
},[cat])

    return (
        <div className='container'>
            <h2 className='container__intro'>{`Productos listados bajo la categoria ${cat.toUpperCase()}`}</h2>
            <article className='container__card'>
            {catProd ? 
            catProd.map((producto) => 
            (<Item key={producto.id} producto={producto}/>))
            : <p>No hay productos disponibles para esta categoría.</p>
            }
            </article>         
        </div>
    );
};

export default ItemCategories;