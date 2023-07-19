import { createContext, useState, useEffect } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore"

export let Context = createContext()
export let Prods = []

export function ContextProvider({children}){
    const [lista,setLista] = useState([])
    const [cant,setCant] = useState(0);
    const [total, setTotal] = useState(0);
    // const [showLista, setShowLista] = useState(0)
    const db = getFirestore();
    


    function CantCart(cantidad,precio){
        setCant(cant + +cantidad);
        setTotal(total + +precio)
        // console.log(cant,total)
    }

    const AddList = (item,cantidad) =>{
        console.log(item,cantidad,"addList -> context")
        let index = lista.findIndex(prod => prod.nombre === item.nombre);
        console.log(index,"indice")
        setLista(prevLista =>{
            let arr = [...prevLista];
            if(index !== -1){
                if(arr[index].hasOwnProperty("cant")){
                    arr[index].cant += cantidad;
                } else{
                    arr[index].cant = cantidad;
                }
            } else{
                console.log("aca")
                item.cant = cantidad;
                arr.push(item);
            }
            return arr;
        })
        // console.log(lista,"Lista")
        CantCart(cantidad,cantidad*item.precio);
    }
    // useEffect(() => {
    //     console.log(lista);
    // },[lista])

    function SubList(item){
        let list = lista;
        for (let i = 0; i< lista.length;i++){
            if(lista[i].title === item.title){
                list[i].cant -= item.cant;
                // console.log("Agregado")
                setLista(list)
                // console.log(lista)
                return
            }
        }
    }
    function Clean(){
        setLista([]);
        setCant(0);
        setTotal(0);
        console.log("limpiado")
    }

    return(
        <Context.Provider value={{
            lista:lista,
            AddList:AddList,
            cant:cant,
            total:total,
            Clean:Clean,
        }}>
            {children}
        </Context.Provider>
    )
}