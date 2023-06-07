import Add from './Add'
import './Item.css'

function Item({Producto}){
    console.log("item",Producto)
    return(
        <div className='Item'>
            {Producto.pic&&<img src={Producto.pic} alt='Img'/>}
            <p>{Producto.title}</p>
            <p>{Producto.descr}</p>
            <Add title={Producto.title} />
        </div>
    )
}
export default Item