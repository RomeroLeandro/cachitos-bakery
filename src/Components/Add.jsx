import './Add.css'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/Context'



function Add({add}){
    let [cant, setCant] = useState(1)
    let { AddList,SubList } = useContext(Context)
    let { section } = useParams();
    let maxCant = 3;
    useEffect(() => {
        console.log(cant)
    },[cant])
    function Inc(){
        if(cant < maxCant)
            setCant(cant+1);
    }
    function Dec(){
        if(cant > 1)
            setCant(cant -1);
    }
    return(
        <div className='Add'>
            <button onClick={Dec}>-</button>
            {section !== "cart" && <span>{cant}</span>}
            <button onClick={Inc}>+</button>
            {section !== "cart" && <button onClick={() => add(cant)}>Agregar</button>}
        </div>
    )
}
export default Add