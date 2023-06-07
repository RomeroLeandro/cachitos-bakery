import './Add.css'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'


function Add({title}){
    let {AddList} = useContext(Context)
    let [cant, setCant] = useState(1)
    let maxCant = 3;
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
            <span>{cant}</span>
            <button onClick={Inc}>+</button>
            <button onClick={() => AddList({name:title,cantidad:cant})}>Agregar</button>
        </div>
    )
}
export default Add