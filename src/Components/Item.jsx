import { useContext } from 'react'
import Add from './Add'
import './Item.css'
import { Context } from '../Context/Context'

function Item({Producto}){
    let {AddList} = useContext(Context)
    function AddItem(cant){
        Producto.cant = cant;
        AddList(Producto);
    }
    return(
        <div className='Item'>
            {Producto.pic&&<img src={Producto.pic} alt='Img'/>}
            <p>{Producto.title}</p>
            <p>{Producto.descr}</p>
            <Add add = {AddItem}/>
        </div>
    )
}
export default Item