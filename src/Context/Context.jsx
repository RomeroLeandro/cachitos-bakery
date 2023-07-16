import { createContext, useState, useEffect } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

export let Context = createContext()
export let Prods = []

export function ContextProvider({children}){
    const [lista,setLista] = useState([])
    const [sideBar, setSideBar] = useState(0);
    const [Productos,setProductos] = useState([])
    const db = getFirestore();
    const itemColletion = collection(db,"Menu");
    
  useEffect(() => {
    const arr = []
    getDocs(itemColletion).then((snapshot) => {
      if(snapshot.size > 0){
        snapshot.docs.map((doc) => {
            console.log(doc.data())
            arr.push({id:doc.id,...doc.data()})
        })  
    }
    }).then(() => {
        setProductos(arr)
        Prods = Productos;
    })
    },[])
    
    function OpenSideBar(){
        setSideBar(1-sideBar);
    }

    function AddList(item){
        let list = lista;
        console.log(list);
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
            Clean:Clean,
            Productos,Productos
        }}>
            {children}
        </Context.Provider>
    )
}