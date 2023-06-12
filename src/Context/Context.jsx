import { createContext, useState } from "react";


export let Context = createContext()

export function ContextProvider({children}){
    let [lista,setLista] = useState([])
    let [Cart, setCart] = useState(0);
    function StCarrt(estado){
        setCart(estado)
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


    // useEffect(() => {
    //     console.log(lista)
    // },[lista])
    return(
        <Context.Provider value={{
            Cart:Cart,
            StCarrt:StCarrt,
            lista:lista,
            AddList:AddList,
            SubList:SubList,
            Clean:Clean
        }}>
            {children}
        </Context.Provider>
    )
}