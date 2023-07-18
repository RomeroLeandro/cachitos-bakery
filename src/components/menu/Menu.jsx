import React from 'react';
// import Productos from '../../Productos/Productos';
import Item from '../Item/item';
import { useParams } from 'react-router';
import './Menu.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { Categories } from '../Categories/Categories';


export const Menu = () => {
  const [lista, setLista] = useState([])
  const {Productos} = useContext(Context)
  // const [Productos,setProductos] = useState([])
  const {element,producto} = useParams()
  // Importar productos

  useEffect(() => {
    switch(element){
      case '0':
        setLista(Productos);
        break;
      case 'producto':
        setLista(Productos.filter(item => item.link === producto))
        break;
      case "category":
        console.log(producto,"Category")
        setLista(Productos.filter(item => item.Category === producto))
        break;
      default:
        // setLista(Productos.filter(item => item.link === element))
        break;
    }
  },[element,producto])

  return(
    <div className="MenuCont">
      <div className='Menu'>
          <h2>Menu</h2>
          <Categories/>
          {lista.map((item) => {
            return(<Item key={item.id} Producto={item}/>)
          })}
        </div>
    </div>
  )
}