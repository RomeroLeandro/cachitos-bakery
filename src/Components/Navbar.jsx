import './Navbar.css'
import Logo from '../Assets/Logo/Logo.png'
import { useState, useEffect } from 'react'


function NavBar(){
    let [size,setSize] = useState(0)
    useEffect(() => {
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth);
        })
    },[])  

    return(
        <div className="Navbar">
            <h2 id='menu'>{size > 400? "Menu" : ">"}</h2>
            {size >= 400 && <h1>Cachitos Bakery</h1>}
            <img className='Logo' src={Logo} alt='Logo Cachitos Bakery'></img>
        </div>
    )
}
export default NavBar