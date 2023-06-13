import { createContext, useEffect, useState } from "react";


export let Context = createContext()

export function ContextProvider({children}){
    let [lista,setLista] = useState([])
    let [sideBar, setSideBar] = useState(0);
    useEffect(() => {
        console.log(sideBar)
    },[sideBar])
    function OpenSideBar(){
        setSideBar(1-sideBar);
    }

    function AddList(item){
        let list = lista;
        for (let i = 0; i< lista.length;i++){
            if(lista[i].title === item.title){
                list[i].descr += item.descr;
                console.log("Agregado")
                setLista(list)
                console.log(lista)
                return
            }
        }
        setLista([...list,item])
    }

    function SubList(item){
        let list = lista;
        for (let i = 0; i< lista.length;i++){
            if(lista[i].title === item.title){
                list[i].descr -= item.descr;
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