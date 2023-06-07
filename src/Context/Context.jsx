import { createContext } from "react";

export let Context = createContext()

export function ContextProvider({children}){
    return(
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}