import './Carrito.css'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context'
import Item from './Item'

function Carrito(){
    let { lista } = useContext(Context)
    let [arr,setArr] = useState([])
    // let arr = []
    useEffect(() => {
        lista.map(((item,index) => {
            return(
                setArr([...arr,<Item key={item.id} Producto={lista[index]}/>])
            )
        }))
        console.log("lista",arr)
    },[lista])
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
            {arr}
            {lista.length > 0
                ?<>
                    {arr}
                    <button onClick={Finish}>Finalizar Pedido</button>
                </>
                :<h1>Carrito Vacio</h1>
            }
            
        </div>
    )
}
export default Carrito