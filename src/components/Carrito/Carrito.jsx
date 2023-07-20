import './Carrito.css'
import { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import { Context } from '../../Context/Context'
import { Item } from '../Item/item'


// function Carrito(){
export const Carrito = () =>{
    let { lista,Clean } = useContext(Context)
    // let [productos, setProductos] = useState([])
    let [total, setTotal] = useState(0);

    useEffect(() => {
        let tot = 0;
        lista.map((item) =>{
            tot += item.cant * item.precio 
        })
        setTotal(tot)
        // setProductos(lista)
        // console.log(productos[0])
    },[lista])
    
    function HandleClear(){
        let ans = window.confirm("Borrar carrito")
        if(ans){
            Clean();
        }
        // alert("esta a punto de borrar el carrito")
    }

    function Finish(){
        let ans = window.confirm("Se te va a redirigir a Whatsapp para que puedas finalizar tu pedido")
        if(ans){
            let message = `Pedido:\%0D%0A${lista.map((item) =>{
                let pr = `${item.cant} ${item.nombre}%0D%0A`
                return pr
            }).join('')}`
            // console.log(message)
            window.open(`https://wa.me/5492664006000?text=${message}`)
        }// else {
        //     ans = window.confirm("Desea ir al menu para ver otro plato?")
        //     if(ans){
        //         window.location = "/menu"
        //     }
        // }
    }
    return(
        <div className="Carrito">
            <h2>Carrito</h2>
            {lista.length > 0
                ?<>
                    {lista.map((item,index) => {
                        return<Item key={index} Producto={lista[index]}/>
                    })}
                    <div className='Fin'>
                        <button onClick={Finish}>Finalizar Pedido (${total})</button>
                        <button onClick={HandleClear}>Borrar carrito</button>
                    </div>
                </>
                :<h1>Carrito Vacio</h1>
            }
            
        </div>
    )
}
// export default Carrito