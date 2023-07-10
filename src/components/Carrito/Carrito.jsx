import './Carrito.css'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../../Context/Context'
import Item from '../Item/item'

// function Carrito(){
export const Carrito = () =>{
    let { lista } = useContext(Context)
    let { carrito } = useParams();
    console.log(carrito)
    
    function Finish(){
        let message = `Pedido: ${lista.map((item) =>{
            console.log("Aca")
            let pr = `${item.cant} ${item.title}\n`
            return pr
        })}`
        window.open(`https://wa.me/5492664006000?text=${message}`)
        console.log(message)
    }
    return(
        <div className="Carrito">
            <h2>Carrito</h2>
            {lista.length > 0
                ?<>
                    {lista.map((item,index) => {
                        return<Item key={item.id} Producto={lista[index]}/>
                    })}
                    <div className='Fin'>
                        <button onClick={Finish}>Finalizar Pedido</button>
                    </div>
                </>
                :<h1>Carrito Vacio</h1>
            }
            
        </div>
    )
}
// export default Carrito