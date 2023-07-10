import React from 'react';
import Productos from '../../Productos/Productos';
import Item from '../Item/item';
import { useParams } from 'react-router';
import './Menu.css';
import { useEffect } from 'react';


export const Menu = () => {
  const {element} = useParams()
  useEffect(() => {
    console.log(element)
  },[])
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