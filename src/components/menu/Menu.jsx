import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/carousel/banner-cachitos.png';
import image2 from '../../assets/carousel/banner-pan.png';
import image3 from '../../assets/carousel/banner-tequeños.png';

export const Menu = () => {

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
    <div className="carousel-container"> {/* Contenedor personalizado */}
      <Carousel selectedItem={activeIndex} showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.title} className="carousel-image" /> {/* Aplica la clase de estilo al elemento img */}
            <p className="legend">{image.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}