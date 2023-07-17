import './Add.css'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Context } from '../Context/Context'



function Add({add,cantidad = 1}){
    let [cant, setCant] = useState(cantidad)
    let [text, setText] = useState("Agregar")
    let [hab,setHab] = useState(0);
    let { section } = useParams();
    let maxCant = 3;
    
    function HandleClick(){
        setText("Agregando");
        setHab(1);
        add(cant)
        setTimeout(() =>{
            setHab(0)
            setText("Agregar");
        },2000)
    }
    function Inc(){
        // if(cant < maxCant)
        setCant(cant+1);
    }
    function Dec(){
        if(cant > 1)
            setCant(cant -1);
    }
    return(
        <div className='Add'>
            <button onClick={Dec}>-</button>
            {<span>{cant}</span>}
            <button onClick={Inc}>+</button>
            {section !== "cart" && <button onClick={HandleClick} disabled={hab}>{text}</button>}
        </div>
    )
}
export default Add
