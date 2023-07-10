import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Add from '../Add/Add';
// import './Item.css'
import { Context } from '../../Context/Context';
import './Item.css'

function Item({Producto}){
// export const Item = (Producto) =>{
    let {AddList} = useContext(Context)
    let { carrito } = useParams();
    // console.log(carrito)
    function AddItem(cant){
        Producto.cant = cant;
        AddList(Producto);
    }
    return(
        <div className='Item'>
            {Producto.pic&&<img src={Producto.pic} alt='Img'/>}
            <p>{Producto.title}</p>
            <p>{Producto.descr}</p>
            {carrito !== "carrito" && <Add add = {AddItem} cantidad = {Producto.cant}/>}
        </div>
    )
}
export default Item