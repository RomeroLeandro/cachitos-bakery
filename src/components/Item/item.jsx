import { useContext, useState,useEffect, useRef } from 'react'
// import { useParams } from 'react-router-dom'
import Modal from 'react-modal'
// import Add from '../Add/Add';
// import './Item.css'
import { Context } from '../../Context/Context';
import './Item.css'

export function Item({Producto}){
    const { AddList } = useContext(Context)
    const [cant, setCant] = useState(0)
    
    // useEffect(() =>{
    //     setCant(Producto.cant)
    // },[Producto])

    const Add = (cantidad) =>{
        AddList(Producto,cantidad)
    }

    console.log(Producto.img," ITEM")
    return(
        <div className= "cartItem">
                <div className='cart-product' key={Producto.id}>
                    <img src={Producto.img} alt="" />
                    <div>
                        <h3>{Producto.nombre}</h3>
                        <p className='detalle'>{Producto.detalle}</p>
                        <p>$ {Producto.precio}.00</p>
                    </div>
                    <div className='buttons'>
                        <button onClick={() => Add(1)}>+</button>
                        <p>{Producto.cant}</p>
                        <button onClick={() => Add(-1)}>-</button>
                    </div>
                </div>
        </div>
    )
}