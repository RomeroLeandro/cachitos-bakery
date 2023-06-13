import './SideBar.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'
function SideBar(){
    let {sideBar} = useContext(Context)
    return(
        !sideBar 
            ? <aside className='Aside0'/>
            : (<aside className='Aside1'>
                    <h3>Info</h3>
                    <h3>Whatsapp</h3>
                    <h3>Instagram</h3>
                    <Link to = "/menu"><h3 >Menu</h3></Link>
                    <Link to = "/cart"><h3 >Carrito</h3></Link>
                    {/* <button onClick={() => StCarrt(0)}>Menu</button>
                    <button onClick={() => StCarrt(1)}>Carrito</button> */}
                    {/* <h3>Carrito</h3> */}
                </aside>)


        // <aside className='Aside0'/>
        // <aside className='Aside1'>
        //     <h3>Info</h3>
        //     <h3>Whatsapp</h3>
        //     <h3>Instagram</h3>
        //     <button onClick={() => StCarrt(0)}>Menu</button>
        //     <button onClick={() => StCarrt(1)}>Carrito</button>
        //     {/* <h3>Carrito</h3> */}
        // </aside>}
    )
}
export default SideBar