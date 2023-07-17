import { createContext, useState, useEffect } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

export let Context = createContext()
export let Prods = []

export function ContextProvider({children}){
    const [lista,setLista] = useState([])
    const [sideBar, setSideBar] = useState(0);
    const [cant,setCant] = useState(0);
    const [total, setTotal] = useState(0);
    const [Productos,setProductos] = useState([])
    const [showLista, setShowLista] = useState(0)
    const db = getFirestore();
    const itemColletion = collection(db,"Menu");
    
  useEffect(() => {
    const arr = []
    getDocs(itemColletion).then((snapshot) => {
      if(snapshot.size > 0){
        snapshot.docs.map((doc) => {
            console.log(doc.data().name.replace(/\s+/g,''))
            arr.push({id:doc.id,link:doc.data().name.replace(/\s+/g,''),...doc.data()})
        })  
    }
    }).then(() => {
        setProductos(arr)
        Prods = [...Productos];
    })
    },[])
    
    function OpenSideBar(){
        setSideBar(1-sideBar);
    }

    function CantCart(cantidad,precio){
        setCant(cant + +cantidad);
        setTotal(total + +precio)
        console.log(cant,total)
    }

    function AddList(item,cantidad){
        console.log(item,cantidad,"addList -> context")
        let index = lista.findIndex(prod => prod.id === item.id);
        setLista(prevLista =>{
            let arr = [...prevLista];
            if(index !== -1){
                if(arr[index].hasOwnProperty("cant")){
                    arr[index].cant += cantidad;
                } else{
                    arr[index].cant = cantidad;
                }
            } else{
                item.cant = cantidad;
                arr.push(item);
            }
            return arr;
        })
        console.log(lista)
        CantCart(cantidad,cantidad*item.price);
    }
    // useEffect(() => {
    //     console.log(lista);
    // },[lista])

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
            Productos,Productos,
            cant:cant,
            showLista:showLista,
            setShowLista,setShowLista,
            total:total
        }}>
            {children}
        </Context.Provider>
    )
}