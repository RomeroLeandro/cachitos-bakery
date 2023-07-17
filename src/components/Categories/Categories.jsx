import { Context } from "../../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Categories.css'

let Categorias = [
    "PROMOS",
    "CACHITOS",
    "PAN",
    "TEQUEÑOS SALADOS",
    "TEQUEÑOS DULCES",
    "EMPANADAS",
    "AREPAS",
    "LASAÑA",
    "ADICIONALES",
    "POSTRES",
    "BEBIDAS"
]

export function Categories(){
    let {Productos } = useContext(Context);
    return(
        <ul className="Categories">
            {Categorias.map((item,index) => {
                return(<Link key={index} to={`/menu/category/${item}`}><p>{item}</p></Link>)
            })}
        </ul>
    )

}