import Add from './Add'
import './Item.css'
import { useContext } from 'react'
import { Context } from '../Context/Context'

function Item({Producto}){
    let { Cart } = useContext(Context)
    return(
        <div className='Item'>
            {Producto.pic&&<img src={Producto.pic} alt='Img'/>}
            <p>{Producto.title}</p>
            <p>{Producto.descr}</p>
            {!Cart&&<Add title={Producto.title} id={Producto.id} />}
        </div>
    )
}
export default Item