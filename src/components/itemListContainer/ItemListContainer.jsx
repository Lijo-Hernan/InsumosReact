import React, {useState,useEffect} from 'react';
import './itemListContainer.css'
import ItemList from '../itemList/ItemList'

const ItemListContainer = ({introduccion}) => {

    const [productos, setproductos]= useState ([]); 

    useEffect (()=> {

            const fetchProd = ()=> {
                fetch("/data/productos.json") 
                .then ((response) => response.json())
                .then ((data)=> setproductos(data))
                .catch ((error)=> console.log(error))
            }

            fetchProd()

    },[])
    
    return (
        <div className='container'>
            <h2 className='container__intro'>{introduccion}</h2>
            <div className='container__card'>
                {productos.length == 0 ? <h3>Cargando...</h3> 
                : 
                <ItemList productos={productos}/>}
            </div>
        </div>
    );
};

export default ItemListContainer;