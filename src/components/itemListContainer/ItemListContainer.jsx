import React from 'react';
import './itemListContainer.css'


const ItemListContainer = ({introduccion}) => {
    
    return (
        <div className='container'>
            <h2 className='container__intro'>{introduccion}</h2>
        </div>    
    );
};

export default ItemListContainer;