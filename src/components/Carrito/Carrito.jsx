import './Carrito.css'
import { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import { Context } from '../../Context/Context'
import Item from '../Item/item'

// function Carrito(){
export const Carrito = () =>{
    let { lista } = useContext(Context)
    
    function Finish(){
        console.log(lista);
        let message = `Pedido:\%0D%0A${lista.map((item) =>{
            let pr = `${item.cant} ${item.name}%0D%0A`
            return pr
        }).join('')}`
        console.log(message)
        window.open(`https://wa.me/5492664006000?text=${message}`)
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