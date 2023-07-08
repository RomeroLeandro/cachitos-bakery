import React, {useEffect, useState} from "react";
import promotions from "../../../assets/carousel/promotions.jpg";
import {Carousel} from "react-responsive-carousel";
import {Link} from "react-router-dom";

export const News = () =>{
    const images = [
        { url: promotions, title: 'Imagen promociones' },
        { url: promotions, title: 'Imagen promociones' },
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
                <Link to={'#'}><button className='button-home button-find'>AGREGAR AL CARRITO</button> </Link>
            </div>
        </div>)
}