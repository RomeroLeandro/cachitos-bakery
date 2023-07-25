import { useContext } from 'react'
import { Context } from '../../Context/Context';
import './Item.css'

export function Item({Producto}){
    const { AddList } = useContext(Context)
    // const [cant, setCant] = useState(0)
    

    const Add = (cantidad) =>{
        AddList(Producto,cantidad)
    }

    // console.log(Producto.img," ITEM")
    return(
        <div className= "cartItem">
                <div className='cart-product' key={Producto.id}>
                    <img src={Producto.img} alt={Producto.nombre} />
                    <div style={{display:'flex', flexDirection:'column', gap:'20px', justifyContent:'center', alignItems:'center'}} className='i'>
                        <h3 style={{fontFamily: 'Agane', textAlign:'center'}}>{Producto.nombre}</h3>
                        <p style={{fontFamily: 'Agane', textAlign:'center'}} className='detalle'>{Producto.platillo}</p>
                        <p style={{fontFamily: 'Agane'}}>$ {Producto.precio}.00</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', gap:'5px', justifyContent:'center', alignItems:'center'}}>
                    <div  className='buttons'>
                        <button onClick={() => {Producto.cant > 0 && Add(-1)}}>-</button>
                        <p>{Producto.cant}</p>
                        <button onClick={() => Add(1)}>+</button>
                    </div>
                    </div>
                    
                </div>
        </div>
    )
}