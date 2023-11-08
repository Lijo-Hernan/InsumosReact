import React, {useState,useEffect} from 'react';
import ItemDetail from '../itemDetail/ItemDetail';



const ItemDetailContainer = ({idProducto}) => {

    const [prod, setProd]= useState (null); 

    useEffect (()=> {

            const fetchData = ()=> {
                fetch("/data/productos.json") 
                .then ((response) => response.json())
                .then ((data)=>{ 
                    const prodEncontrado = data.find ((item) => item.id == idProducto)
                    setProd(prodEncontrado)
                })
                .catch ((error)=> console.log(error))
            }
            fetchData()
    },[idProducto])

    return (
        <div className='detailContainer'>
            <section className='detailContainer__card'>
                {prod ? <ItemDetail prod={prod}/> 
                : <h3>Buscando...</h3>}
            </section>
        </div>
    );
};

export default ItemDetailContainer;