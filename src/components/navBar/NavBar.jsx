import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        {
            id: 1,
            link: "menu",
        },
        {
            id: 2,
            link: "encuentranos",
        },
        {
            id: 3,
            link: "nosotros",
        },
        {
            id: 4,
            link: "contacto",
        },
        {
            id: 5,
            link: "comunidad",
        },
    ];
    return (
        <div className={`navbar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleNavbar}>
                <div className="hamburger-icon">
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </div>
            </button>
            {isOpen && (
                <ul className="navbar-items">
                    {/* {links.map(({ id, link }) => (
                        <li key={id}>
                            <Link to={`/${link}`} className="nav-link">{link}</Link>
                        </li>
                    ))} */}
                    <li>MENU</li>
                    <li>ENCUENTRANOS</li>
                    <li>NOSOTROS</li>
                    <li>CONTACTO</li>
                    <li>COMUNIDAD</li>
                </ul>
            )}
        </div>
    )
}
