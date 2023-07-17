import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../../Context/Context';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo/cachitos-logo.PNG'
import { Aside } from './aside/Aside';
import {Nombres, ShowOptions} from './Autocomplete';

export const NavBar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [options, setOptions] = useState([]);
    const [lista, setLista] = useState([]);
    const searchRef = useRef(null);
    const { cant, Productos,setShowLista,showLista } = useContext(Context)

    const handleSearchIconClick = () => {
        setSearchVisible(!isSearchVisible);
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchVisible(false);
        }
    };
    useEffect(() =>{
        setLista(Productos);
    },[Productos])

    function HandleText(evt){
        console.log(lista)
        let opciones = lista.filter(item => item.name.toLowerCase().includes(evt.target.value))
        if((opciones.length) > 0 && (evt.target.value !== '')){
            setShowLista(1)
        } else {
            setShowLista(0)
        }
        setOptions([...opciones])
        console.log(opciones,evt.target.value,typeof options)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const links = [
        {
            id: 1,
            link: "menu",
            nombre: "menu"
        },
        {
            id: 2,
            link: "comopedir",
            nombre: "Como pedir"
        },
        {
            id: 3,
            link: "novedades",
            nombre: "Novedades"
        },
        {
            id: 4,
            link: "sobrenosotros",
            nombre: "Sobre nosotros"
        },
        {
            id: 5,
            link: "contacto",
            nombre: "Contacto"
        },
        {
            id: 6,
            link: "comunidad",
            nombre: "Comunidad"
        },
    ];
    return (
        <header>
            <Aside />
            <nav className='nav-header'>
                <div className='iconsNav'>
                    <Link to={`/`}>
                        <img src={logo} alt="imagen" />
                    </Link>
                    <div className='icons'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-search" viewBox="0 0 16 16" onClick={handleSearchIconClick}>
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <Link to={'/carrito'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        </Link>
                        {isSearchVisible && (
                            <div className="search-dropdown">
                                <div>
                                    <button onClick={handleSearchIconClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg></button>
                                    <input onChange={HandleText} type="text" placeholder="Buscar productos" />
                                </div>
                            </div>
                        )}
                        <p>{cant}</p>
                        {showLista && <ShowOptions opcion={options}/>}
                    </div>

                </div>
            </nav>
        </header>

    )
}
