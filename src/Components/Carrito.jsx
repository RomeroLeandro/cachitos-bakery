import './Carrito.css'
import { useContext} from 'react'
import { Context } from '../Context/Context'
import Item from './Item'

function Carrito(){
    let { lista } = useContext(Context)

    function Finish(){
        let message = `Pedido: ${lista.map((item) =>{
            console.log("Aca")
            let pr = `${item.descr} ${item.title}\n`
            return pr
        })}`
        window.open(`https://wa.me/5492664006000?text=${message}`)
        console.log(message)
    }
    return(
        <div className="Carrito">
            <h2>Carrito</h2>
            {lista !== undefined
                ?lista.map((item,index) => {
                    return(<Item key={item.id} Producto={lista[index]}/>)
                })
                :<h1>Carrito Vacio</h1>
            }
            <button onClick={Finish}>Finalizar Pedido</button>
            
        </div>
    )
}
export default Carrito