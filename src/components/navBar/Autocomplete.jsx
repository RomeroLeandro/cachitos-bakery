import { Prods,Context } from "../../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";

export function Nombres(){
    // console.log(Prods)
    let arr = []
    Prods.map((item)=>{
        arr.push(item.title);
    })
    return arr;
}

export function ShowOptions({opcion}){
    let {setShowLista,showLista} = useContext(Context);
    // console.log(opcion,"opcion");
    let arr = []
    // useEffect(() => {
    //     opcion.map((item) => {
    //         arr.push(<Link to={item.name}><p>{item.name}</p></Link>)
    //     })
    // },[opcion])
    return(
        <div className="Show">
            {opcion.map((item) => {
                return(<Link key={item.id} to={`menu/${item.name.replace(/\s+/g,'')}`} onClick={() => setShowLista(0)}><p>{item.name}</p></Link>)
            })}
        </div>
    )
}