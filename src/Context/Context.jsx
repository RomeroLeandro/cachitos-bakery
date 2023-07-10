import { createContext, useState } from "react";


export let Context = createContext()

export function ContextProvider({children}){
    let [lista,setLista] = useState([])
    let [sideBar, setSideBar] = useState(0);
    
    function OpenSideBar(){
        setSideBar(1-sideBar);
    }

    function AddList(item){
        let list = lista;
        for (let i = 0; i< lista.length;i++){
            if(lista[i].title === item.title){
                list[i].cant += item.cant;
                console.log("Agregado")
                setLista(list)
                console.log(lista)
                return
            }
        }
        setLista([...list,item])
        console.log(lista,"contexto")
    }

    function SubList(item){
        let list = lista;
        for (let i = 0; i< lista.length;i++){
            if(lista[i].title === item.title){
                list[i].cant -= item.cant;
                console.log("Agregado")
                setLista(list)
                console.log(lista)
                return
            }
        }
    }
    function Clean(){
        setLista([])
    }

    return(
        <Context.Provider value={{
            OpenSideBar:OpenSideBar,
            sideBar:sideBar,
            lista:lista,
            AddList:AddList,
            SubList:SubList,
            Clean:Clean
        }}>
            {children}
        </Context.Provider>
    )
}