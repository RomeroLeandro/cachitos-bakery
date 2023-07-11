import React from 'react';
import Productos from '../../Productos/Productos';
import Item from '../Item/item';
import { useParams } from 'react-router';
import './Menu.css';
import { useEffect, useState } from 'react';


export const Menu = () => {
  const [lista, setLista] = useState([])
  const {element} = useParams()
  useEffect(() => {
    if(element === '0'){
      setLista(Productos)
    } else{
      let ar = Productos.filter(item => item.title === element)
      setLista(ar)
    }
    console.log(element)
  },[element])
  return(
    <div className="Menu">
        <h2>Menu</h2>
        {lista.map((item) => {
            return(<Item key={item.id} Producto={item}/>)
        })}
        {/* <Item Producto = {Productos[0]}/> */}
    </div>
  )
}