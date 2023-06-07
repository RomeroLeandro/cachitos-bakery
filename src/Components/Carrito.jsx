import './Carrito.css'
import { useContext} from 'react'
import { Context } from '../Context/Context'
import Item from './Item'

function Carrito(){
    let { lista, Addlist, SubList } = useContext(Context)

    return(
        <div className="Carrito">
            <h2>Carrito</h2>
            {lista !== undefined
                ?lista.map((item,index) => {
                    return(<Item key={item.id} Producto={lista[index]}/>)
                })
                :<h1>Carrito Vacio</h1>
            }
            
        </div>
    )
}
export default Carrito