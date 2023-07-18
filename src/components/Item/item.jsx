import { useContext, useState } from 'react'
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
    // console.log(carrito)
    // let [modal, setModal] = useState(null);
    function OpenModal(){
        setOpenModal(1- getOpenModal);
    }
    function AddItem(cant){
        AddList(Producto,+cant);
    }
    // console.log(Producto.cant)
    return(
        <div onClick={OpenModal} className= {carrito !== "carrito"? 'Item' : "cartItem"}>
            {Producto.pic&&<img src={Producto.pic} alt='Img'/>}
            <div className='info'>
                <p>{Producto.name}</p>
                {carrito === "carrito" && <p>Cantidad: {Producto.cant}</p>}
                {carrito !== "carrito" && <p>{Producto.descr}</p>}
                <hr/>
                {carrito !== "carrito" && <p>${Producto.price}</p>}
                {/* {carrito !== "carrito" && <Add add = {AddItem} cantidad = {1}/>} */}
            </div>               
            <Modal
                isOpen = {getOpenModal}
                onRequestClose= {OpenModal}
                contentLabel="EjemploModal"
                className="MyModal"
                overlayClassName = "cetered-overlay"
            >
                <img src={Producto.pic} alt="Imagen"/>
                <p>{Producto.name}</p>
                <p>{Producto.descr}</p>
                <Add add = {AddItem}/>
            </Modal>
        </div>
    )
}
export default Item