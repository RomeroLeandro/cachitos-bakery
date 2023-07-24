import React, { useState, useEffect } from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import menu from '../../assets/carousel/menu.png';
import comoPedir from '../../assets/carousel/como-pedir.png';
import promociones from '../../assets/carousel/promociones.png';
import conocenos from '../../assets/carousel/conocenos.png';
import conocenosWeb from '../../assets/carousel/conocenosWeb.png'
import menuWeb from '../../assets/carousel/menuWeb.png'
import promocionesWeb from '../../assets/carousel/promocionesWeb.png'
import { Link } from 'react-router-dom';
import textCachitos from '../../assets/logo/nombre-cachitos.png'
import { HowAsk } from '../howAsk/HowAsk';
import { Contact } from '../contact/Contact';
import { Find } from '../find/Find';

const imagesForSmallScreen = [
  { url: menu, title: 'Imagen menu', redirectTo: '/menu' },
  { url: comoPedir, title: 'Imagen como pedir', redirectTo: '/comopedir' },
  { url: promociones, title: 'Imagen promociones', redirectTo: '/novedades' },
  { url: conocenos, title: 'Imagen conocenos', redirectTo: '/menu' }
];
const imagesForLargeScreen = [
  { url: menuWeb, title: 'Imagen menu', redirectTo: '/menu' },
  { url: promocionesWeb, title: 'Imagen promociones', redirectTo: '/novedades' },
  { url: conocenosWeb, title: 'Imagen conocenos', redirectTo: '/menu' }
];

export const Home = () => {
  const isSmallScreen = window.innerWidth <= 650;

  const images = isSmallScreen ? imagesForSmallScreen : imagesForLargeScreen
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='home'>
      <div className="carousel-container"> {/* Contenedor personalizado */}
        <Carousel selectedItem={activeIndex} showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
        <div key={index}>
          <Link to={image.redirectTo}>
            <div className="image-container">
              <img src={image.url} alt={image.title} className="carousel-image" />
            </div>
          </Link>
        </div>
      ))}
        </Carousel>
      </div>
      <div className='home-container'>
        <img className='text-cachitos' src={textCachitos} alt="cachitos bakery" />
        <p className='description-menu'>¡Los mejores sabores de Venezuela y el Caribe!</p>
        <Link to={'/menu'}><button className='button-home'>MENÚ</button> </Link>

      </div>
    </div>

  )
}
