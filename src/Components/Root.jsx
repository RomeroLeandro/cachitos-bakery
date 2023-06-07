import './Root.css'
import Aside from "./Aside";
import Body from "./Body";
import Carrito from './Carrito';
import { Context } from '../Context/Context';
import { useContext } from 'react';

function Root(){
    let { Cart } = useContext(Context)
    return(
        <div className="Root">
            <Aside/>
            {Cart === 1
                ?<Carrito/> 
                :<Body></Body>
            }
            {/* <Body></Body> */}
        </div>
    )
}
export default Root