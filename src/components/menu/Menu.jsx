import React from 'react';
import Productos from '../../Productos/Productos';
import Item from '../Item/item';
import './Menu.css';


export const Menu = () => {
  return(
    <div className="Menu">
        <h2>Menu</h2>
        {Productos.map((item) => {
            return(<Item key={item.id} Producto={item}/>)
        })}
        {/* <Item Producto = {Productos[0]}/> */}
    </div>
  )
}