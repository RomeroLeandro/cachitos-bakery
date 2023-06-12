import './Aside.css'
import { useContext } from 'react'
import { Context } from '../Context/Context'
function Aside(){
    let {StCarrt} = useContext(Context)
    return(
        <aside className='Aside'>
            <h3>Info</h3>
            <h3>Whatsapp</h3>
            <h3>Instagram</h3>
            <button onClick={() => StCarrt(0)}>Menu</button>
            <button onClick={() => StCarrt(1)}>Carrito</button>
            {/* <h3>Carrito</h3> */}
        </aside>
    )
}
export default Aside