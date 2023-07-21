import './Carrito.css'
import { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import { Context } from '../../Context/Context'
import { Item } from '../Item/item'


// function Carrito(){
export const Carrito = () =>{
    let { lista,Clean,Finish } = useContext(Context)
    let [total, setTotal] = useState(0);

    useEffect(() => {
        let tot = 0;
        lista.map((item) =>{
            tot += item.cant * item.precio 
        })
        setTotal(tot)
    },[lista])
    
    function HandleClear(){
        let ans = window.confirm("Borrar carrito")
        if(ans){
            Clean();
        }
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