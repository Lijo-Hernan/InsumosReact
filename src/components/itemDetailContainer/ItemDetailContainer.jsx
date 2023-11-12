import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import Error from '../error/Error';



const ItemDetailContainer = () => {

    const [prod, setProd]= useState (null); 

    const {idProducto} = useParams()

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
                : <Error/>}
            </section>
        </div>
    );
};

export default ItemDetailContainer;