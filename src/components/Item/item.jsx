import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Add from '../Add/Add';
// import './Item.css'
import { Context } from '../../Context/Context';
import './Item.css'
import { useState } from 'react';

function Item({Producto}){
// export const Item = (Producto) =>{
    let { AddList } = useContext(Context)
    let { carrito } = useParams();
    // console.log(carrito)
    function AddItem(cant){
        // setText("Agregado")
        AddList(Producto,+cant);

    }
    // console.log(Producto.cant)
    return(
        <div className= {carrito !== "carrito"? 'Item' : "cartItem"}>
            {Producto.pic&&<img src={Producto.pic} alt='Img'/>}
            <div className='info'>
                <p>{Producto.name}</p>
                {carrito === "carrito" && <p>Cantidad: {Producto.cant}</p>}
                {carrito !== "carrito" && <p>{Producto.descr}</p>}
                <hr/>
                {carrito !== "carrito" && <p>${Producto.price}</p>}
                {carrito !== "carrito" && <Add add = {AddItem} cantidad = {1}/>}
            </div>                
        </div>
    )
}
export default Item