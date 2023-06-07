import { createContext, useState, useEffect } from "react";


export let Context = createContext()

export function ContextProvider({children}){
    let [lista,setLista] = useState([])
    let [Cart, setCart] = useState(0);
    function StCarrt(estado){
        setCart(estado)
    }
    console.log(StCarrt)
    function AddList(item){
        let list = lista;
        for (let i = 0; i< lista.length;i++){
            if(lista[i].name === item.name){
                list[i].cantidad += item.cantidad;
                console.log("Agregado")
                setLista(list)
                console.log(lista)
                return
            }
        }
        setLista([...list,item])
    }

    function SubList(item,cant){
        

    }
    function Clean(){
        setLista([])
    }


    useEffect(() => {
        console.log(lista)
    },[lista])
    return(
        <Context.Provider value={{
            Cart,Cart,
            StCarrt,StCarrt:
            lista,lista,
            AddList:AddList,
            SubList:SubList,
            Clean:Clean
        }}>
            {children}
        </Context.Provider>
    )
}