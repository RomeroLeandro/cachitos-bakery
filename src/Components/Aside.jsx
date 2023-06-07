import './Aside.css'
import { useContext } from 'react'
import { Context } from '../Context/Context'
function Aside(){
    let {StCarrt} = useContext(Context)
    console.log("cart",StCarrt)
    return(
        <aside className='Aside'>
            <h3>Info</h3>
            <h3>Whatsapp</h3>
            <h3>Instagram</h3>
            <h3>Galeria</h3>
            <button onClick={() => StCarrt()}>Carrito</button>
            {/* <h3>Carrito</h3> */}
        </aside>
    )
}
export default Aside