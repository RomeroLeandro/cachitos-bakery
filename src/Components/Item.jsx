import Add from './Add'
import './Item.css'

function Item({Producto}){
    return(
        <div className='Item'>
            <img src={Producto.pic} alt='Img'/>
            <p>{Producto.title}</p>
            <p>{Producto.descr}</p>
            <Add title={Producto.title} />
        </div>
    )
}
export default Item