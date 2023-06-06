import './Body.css'
import Item from './Item'
import Productos from '../Productos/productos'

function Body(children){
    return(
        <div className="Body">
            <h2>Menu</h2>
            {Productos.map((item) => {
                return(<Item key={item.id} Producto={item}/>)
            })}
            {/* <Item Producto = {Productos[0]}/> */}
        </div>
    )
}
export default Body