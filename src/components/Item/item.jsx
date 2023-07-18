import { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Modal from 'react-modal'
import Add from '../Add/Add';
// import './Item.css'
import { Context } from '../../Context/Context';
import './Item.css'

function Item({Producto}){
// export const Item = (Producto) =>{
    let { AddList } = useContext(Context)
    let { carrito } = useParams();
    let [getOpenModal, setOpenModal] = useState(0)
    let [posModal, setPosModal] = useState({top:0,left:0})
    // console.log(carrito)
    // let [modal, setModal] = useState(null);
    function OpenModal(event){
        setOpenModal(1- getOpenModal);
        let {top, left} = event.target.getBoundingClientRect();
        setPosModal({top,left})
    }
    function AddItem(cant){
        AddList(Producto,+cant);
    }
    // console.log(Producto.cant)
    return(
        <div className= {carrito !== "carrito"? 'Item' : "cartItem"}>
            {Producto.pic&&<img onClick={OpenModal} src={Producto.pic} alt='Img'/>}
            <div className='info'>
                <p>{Producto.name}</p>
                <hr/>
                {carrito === "carrito" && <p>Cantidad: {Producto.cant}</p>}
                {carrito !== "carrito" && <p>{Producto.descr}</p>}
                <hr/>
                {carrito !== "carrito" && <p>${Producto.price}</p>}
                {/* {carrito !== "carrito" && <Add add = {AddItem} cantidad = {1}/>} */}
            </div>               
            <Modal
                // style={{top:posModal.top,left:posModal.left}}
                isOpen = {getOpenModal}
                onRequestClose= {OpenModal}
                contentLabel="EjemploModal"
                className="MyModal"
                shouldCloseOnOverlayClick = {false}
                overlayClassName = "cetered-overlay"
            >
                <button className='CloseModal' onClick={OpenModal}>X</button>
                <img src={Producto.pic} alt="Imagen"/>
                {/* <p>{Producto.name}</p> */}
                {/* <p>{Producto.descr}</p> */}
                <Add add = {AddItem}/>
            </Modal>
        </div>
    )
}
export default Item