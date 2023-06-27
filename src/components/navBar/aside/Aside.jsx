import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../../assets/icons/instagram.png'

export const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    {
      id: 1,
      link: "menu",
      nombre: "Menu"
    },
    {
      id: 2,
      link: "comopedir",
      nombre: "Como pedir"
    },
    {
      id: 3,
      link: "novedades",
      nombre: "Novedades y promociones"
    },
    {
      id: 4,
      link: "sobrenosotros",
      nombre: "Quienes somos"
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
        <nav    >
          <ul className="navbar-items">
            {links.map((el) => {
              return (
                <li key={el.id} className='lista'>
                  <Link to={`/${el.link}`}>{el.nombre}</Link>
                </li>)
            })}
          </ul>
          <div>
            {/* <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="" className='img-wpp-how-ask' />
            </a> */}
          </div>
        </nav>
      )}
    </aside>
  )
}
