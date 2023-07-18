import { Context } from "../../Context/Context";
import { useContext } from "react";
import Item from "../Item/item";
import './MyModal.css'

export function MyModal({Producto}){
    return(
        <div className="MyModal">
            <Item Producto={Producto}/>
        </div>
    )
}