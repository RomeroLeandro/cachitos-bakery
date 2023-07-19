import './Carrito.css'
import { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import { Context } from '../../Context/Context'
import { Item } from '../Item/item'


// function Carrito(){
export const Carrito = () =>{
    let { lista,total,Clean } = useContext(Context)
    let [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos(lista)
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
        // console.log(lista);
        let message = `Pedido:\%0D%0A${lista.map((item) =>{
            let pr = `${item.cant} ${item.name}%0D%0A`
            return pr
        }).join('')}`
        // console.log(message)
        window.open(`https://wa.me/5492664006000?text=${message}`)
    }
    return(
        <div className="Carrito">
            <h2>Carrito</h2>
            {lista.length > 0
                ?<>
                    {lista.map((item,index) => {
                        console.log(productos[index])
                        return<Item key={item.id} Producto={productos[index]}/>
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