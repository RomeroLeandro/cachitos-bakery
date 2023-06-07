import './Add.css'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'


function Add({title}){
    let {AddList,SubList, Cart} = useContext(Context)
    let [cant, setCant] = useState(1)
    let maxCant = 3;
    console.log(Cart)
    function Inc(){
        if(cant < maxCant)
            setCant(cant+1);
    }
    function Dec(){
        if(Cart){
            SubList({title:title,descr:1})
            return
        }
        if(cant > 1)
            setCant(cant -1);
    }
    return(
        <div className='Add'>
            <button onClick={Dec}>-</button>
            {!Cart&&<span>{cant}</span>}
            <button onClick={Inc}>+</button>
            {!Cart&&<button onClick={() => AddList({title:title,descr:cant})}>Agregar</button>}
        </div>
    )
}
export default Add