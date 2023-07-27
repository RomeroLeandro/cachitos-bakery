import React, { useState, useEffect, useRef, useContext } from 'react';
import Modal from 'react-modal'
import { Context } from '../../Context/Context';
import { Link } from 'react-router-dom';
import { Item } from '../Item/item';
import './NavBar.css';
import logo from '../../assets/logo/cachitos-logo.PNG'
import { Aside } from './aside/Aside';

export const NavBar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [cant, setCant] = useState(0);
    const searchRef = useRef(null);
    const {lista, Clean, Finish} = useContext(Context);
    const [total, setTotal] = useState(0);
    const [openCart, setOpenCart] = useState(false);

    const handleSearchIconClick = () => {
        setSearchVisible(!isSearchVisible);
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchVisible(false);
        }
    };
    useEffect(() =>{
        let c = 0;
        let tot = 0;
        lista.map((item) =>{
            c += item.cant;
            tot += item.cant * item.precio 
        })
        setCant(c)
        setTotal(tot)
    },[lista])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function HandleClear(){
        let ans = window.confirm("Borrar carrito")
        if(ans){
            Clean();
        }
    }

    return (
        <header>
            <Aside />
            <nav className='nav-header'>
                <div className='iconsNav'>
                    <Link to={`/`}>
                        <img src={logo} alt="imagen" />
                    </Link>
                    <div className='icons'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-search" viewBox="0 0 16 16" onClick={handleSearchIconClick}>
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg> */}
                        {/* <Link to = {'/Carrito'}> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        {cant > 0 &&
                            <>
                                <div onClick={() => setOpenCart(!openCart)} className="notification">{cant}</div>
                                <p style={{fontFamily:'Agane', padding:'5px', width:'320px'}} onClick={() => setOpenCart(1-openCart)}>Haz click aquí para continuar con tu pedido</p>
                            </>
                        }
                        {/* </Link> */}
                        {isSearchVisible && (
                            <div className="search-dropdown">
                                <div>
                                    <button onClick={handleSearchIconClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg></button>
                                    <input type="text" placeholder="Buscar productos" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <Modal className="modal-cart" isOpen = {openCart} onRequestClose = {() => setOpenCart(0)} overlayClassName = "cetered-overlay">
                <div className="cart-container">
                    <button className='close-modal' onClick={() => setOpenCart(false)}>X</button>
                    <div className="Carrito">
                        {lista.length > 0
                            ?<>
                                <div className='items'>
                                    {lista.map((item,index) => {
                                        return<Item key={index} Producto={lista[index]}/>
                                    })}
                                </div>
                                <div className='Fin'>
                                    <button key={1} onClick={Finish}>Finalizar pedido (${total})</button>
                                    <button key={2} onClick={HandleClear}>Borrar carrito</button>
                                </div>
                            </>
                            :<h1>Carrito Vacio</h1>
                        }
                    </div>
                </div>
            </Modal>
        </header>
    )
}
