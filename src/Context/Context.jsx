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
    


    function Finish(){
        let ans = window.confirm("Se te va a redirigir a Whatsapp para que puedas finalizar tu pedido")
        if(ans){
            let message = `Pedido:\%0D%0A${lista.map((item) =>{
                let pr = `${item.cant} ${item.nombre}%0D%0A`
                return pr
            }).join('')}`
            window.open(`https://wa.me/5492664006000?text=${message}`)
        }
    }

    const AddList = (item,cantidad) =>{
        // console.log(item,cantidad,"addList -> context")
        let index = lista.findIndex(prod => prod.nombre === item.nombre);
        // console.log(index,"indice")
        setLista(prevLista =>{
            let arr = [...prevLista];
            if(index !== -1){
                if(arr[index].hasOwnProperty("cant")){
                    arr[index].cant += cantidad;
                    if(arr[index].cant <= 0){
                        arr.splice(index,1)
                    }
                } else{
                    arr[index].cant = cantidad;
                }
            } else{
                item.cant = cantidad;
                arr.push(item);
            }
            return arr;
        })
        // console.log("sumando precio")
        // CantCart(cantidad,cantidad*item.precio);
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
            Finish:Finish,
        }}>
            {children}
        </Context.Provider>
    )
}