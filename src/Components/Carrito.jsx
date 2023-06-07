import './Carrito.css'
import { useSate, useContext} from 'react'
import { Context } from '../Context/Context'
import Item from './Item'

function Carrito(){
    let { Lista, Addlist, SubList } = useContext(Context)

    return(
        <div className="Carrito">
            <h2>Menu</h2>
            {Lista.map((item) => {
                return(<Item key={item.id} Producto={{title:item,descr:item.cantidad}}/>)
            })}
            {/* <Item Producto = {Productos[0]}/> */}
        </div>
    )
}
export default Carrito