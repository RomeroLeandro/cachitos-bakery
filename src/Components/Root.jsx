import './Root.css'
import SideBar from "./SideBar";
import Body from "./Body";
import Carrito from './Carrito';
import { useParams } from 'react-router-dom';

function Root(){
    let { section } = useParams();
    let seccion = {
        "menu":<Body/>,
        "cart":<Carrito/>,
        undefined:<Body/>
    }
    return(
        <div className="Root">
            <SideBar/>
            {seccion[section]}
            {/* <Body></Body> */}
        </div>
    )
}
export default Root