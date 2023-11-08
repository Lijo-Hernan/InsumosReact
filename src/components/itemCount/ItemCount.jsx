import React, {useState} from 'react';
import './itemCount.css'
import { BsCart3 } from "react-icons/bs";

const ItemCount = ({initial, stock, onAdd}) => {

let [cuenta, setCuenta] = useState(initial)

const sube = () => {
    if (cuenta < stock){
        setCuenta(cuenta +1)
    }
}
const baja = () => {
    if (cuenta > 1){
        setCuenta(cuenta -1)
    }
}

    return (
        <>
            <div className='contador'>
                <button className="contador__boton" onClick={baja} disabled={cuenta== initial}>-</button>
                <p className='contador__p'>{cuenta}</p>
                <button className="contador__boton" onClick={sube} disabled={cuenta==stock}>+</button>
            </div>
            <div className='cart__cont'>
                <button className='cart__boton' disabled={stock==0} onClick={()=>onAdd(cuenta)}><p className='boton__p'>Agregar al carrito</p>
                <BsCart3 className='boton__img'/></button> 
            </div>
        </>
    );
};

export default ItemCount;