import './Navbar.css'
import Logo from '../Assets/Logo/Logo.png'
// import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'


function NavBar(){
    let {OpenSideBar, sideBar} = useContext(Context);

    return(
        <div className="Navbar">
            <h2 onClick={OpenSideBar} id='menu'>{sideBar? "Menu" : ">"}</h2>
            {/* {size >= 400 && <h1>Cachitos Bakery</h1>} */}
            <img className='Logo' src={Logo} alt='Logo Cachitos Bakery'></img>
        </div>
    )
}
export default NavBar