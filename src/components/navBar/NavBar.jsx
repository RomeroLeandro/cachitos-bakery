import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo/cachitos-logo.PNG'

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

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
            <aside className={`navbar ${isOpen ? 'open' : ''}`}>
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={isOpen}
                    onChange={toggleNavbar}
                />
                <label htmlFor="checkbox" className={`toggle ${isOpen ? 'open' : ''}`}>
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
                {isOpen && (
                    <div    >
                        <ul className="navbar-items">
                            {links.map((el) => {
                                return (
                                    <li key={el.id} className='lista'>
                                        <Link to={`/${el.link}`}>{el.nombre}</Link>
                                    </li>)
                            })}
                        </ul>
                        <div>
                            {/* Facebook and Instagram logos */}
                        </div>
                    </div>
                )}
            </aside>
            <nav>
                <Link to={`/`}>
                    <img src={logo} alt="imagen" /></Link>
                <div className='iconsNav'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>

                </div>
            </nav>
        </header>

    )
}
