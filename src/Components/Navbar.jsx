import './Navbar.css'
import { useState,useEffect } from 'react'


function NavBar(){
    let [size,setSize] = useState(0)
    useEffect(() => {
        setSize(window.innerWidth)
    },[])

    return(
        <div className="Navbar">
            <h2 id='menu'>{size > 400? "Menu" : ">"}</h2>
            <h1>Cachitos Bakery</h1>
        </div>
    )
}
export default NavBar