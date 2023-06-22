import './Add.css'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/Context'



function Add({title,id}){
    let [cant, setCant] = useState(1)
    let { AddList,SubList } = useContext(Context)
    let { section } = useParams();
    let maxCant = 3;
    function Inc(){
        if(section === "cart"){
            console.log("Inc cart")
            AddList({id:id,title:title,descr:1});
            return;
        }
        if(cant < maxCant)
            setCant(cant+1);
    }
    function Dec(){
        if(section === "cart"){
            SubList({id:id,title:title,descr:1});
            return;
        }
        if(cant > 1)
            setCant(cant -1);
    }
    return(
        <div className='Add'>
            <button onClick={() =>Dec}>-</button>
            {section !== "cart" && <span>{cant}</span>}
            <button onClick={() =>Inc}>+</button>
            {section !== "cart" && <button onClick={() => AddList({id:id,title:title,descr:cant})}>Agregar</button>}
        </div>
    )
}
export default Add