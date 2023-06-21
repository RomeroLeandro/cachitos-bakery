import React, { useState, useEffect } from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/carousel/banner-cachitos.png';
import image2 from '../../assets/carousel/banner-pan.png';
import image3 from '../../assets/carousel/banner-tequeños.png';
import { Link } from 'react-router-dom';
import textCachitos from '../../assets/logo/nombre-cachitos.png'

export const Home = () => {
  const images = [
    { url: image1, title: 'Imagen cachitos' },
    { url: image2, title: 'Imagen pan' },
    { url: image3, title: 'Imagen tequeños' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="carousel-container"> {/* Contenedor personalizado */}
        <Carousel selectedItem={activeIndex} showThumbs={false} showStatus={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={image.title} className="carousel-image" /> {/* Aplica la clase de estilo al elemento img */}
            </div>
          ))}
        </Carousel>
      </div>
      <div className='home-container'>
        <img className='text-cachitos' src={textCachitos} alt="cachitos bakery" />
        <p className='description-menu'>¡Te traemos los mejores sabores del Caribe!</p>
        <Link to={'/menu'}><button className='button-home'>MENÚ</button> </Link>

      </div>
    </div>

  )
}
