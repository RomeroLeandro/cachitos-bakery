import Productos from "../../Productos/Productos";
import ReactModal from "react-modal";

export function Nombres(){
    let arr = []
    Productos.map((item)=>{
        arr.push(item.title);
    })
    return arr;
}

export function ShowOptions({name}){
    return(
        <div className="Show">
            {name.map((item) =>{
                return(<span>{item}</span>)
            })}
        </div>
    )
}