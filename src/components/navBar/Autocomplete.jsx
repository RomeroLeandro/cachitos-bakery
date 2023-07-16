import { Prods } from "../../Context/Context";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";

export function Nombres(){
    let arr = []
    Prods.map((item)=>{
        arr.push(item.title);
    })
    return arr;
}

export function ShowOptions({name}){
    return(
        <div className="Show">
            {name.map((item) =>{
                return(<Link to={`/menu/${item}`}> <span>{item}</span> </Link>)
            })}
        </div>
    )
}