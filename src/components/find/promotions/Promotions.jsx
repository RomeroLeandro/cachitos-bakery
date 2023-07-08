import React, { useState, useEffect } from 'react';
import news from "../../../assets/carousel/news.png"
import { Carousel } from 'react-responsive-carousel';
import './Promotions.css'
import {Link} from "react-router-dom";
export const Promotions = () => {
    const images = [
        { url: news, title: 'Imagen novedades' },
        { url: news, title: 'Imagen novedades' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
            <div className="carousel-find">
                <div className="container-img-find">
                <Carousel  selectedItem={activeIndex} showThumbs={false} showStatus={false}>
                    {images.map((image, index) => (
                        <div key={index} >
                            <div className="image-find">
                                <img src={image.url} alt={image.title} className="carousel-image" />
                            </div>

                        </div>
                    ))}
                </Carousel>
                    <div className="contain-text-find">

                    </div>
                    <Link to={'#'}><button className='button-home button-find'>QUIERO PARTICIPAR</button> </Link>
                </div>
            </div>
    )
}