import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import './Menu.css';
import { obtenerProductos } from '../../utils/firebase';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [numSlidesToShow, setNumSlidesToShow] = useState(0);
  useEffect(() => {
    const obtenerProductosMenu = async () => {
      const productosObtenidos = await obtenerProductos();
      setProductos(productosObtenidos);

      // Obtener todas las categorías únicas
      const categoriasUnicas = Array.from(
        new Set(productosObtenidos.map((producto) => producto.categoria))
      );
      setCategorias(categoriasUnicas);
    };

    obtenerProductosMenu();
  }, []);

  const productosPorCategoria = {};
  productos.forEach((producto) => {
    const categoria = producto.categoria;
    if (!productosPorCategoria[categoria]) {
      productosPorCategoria[categoria] = [];
    }
    productosPorCategoria[categoria].push(producto);
  });


  const handleCategoriaClick = (categoria) => {
    const categoriaElement = document.getElementById(categoria);
    if (categoriaElement) {
      categoriaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const numSlides = Math.floor(windowWidth / 200); // Ajusta el ancho de los elementos según tus necesidades
      setNumSlidesToShow(numSlides);
    };

    handleResize(); // Llama a la función una vez al cargar la página

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className='container-slick'>
      <Slider className="category" slidesToShow={numSlidesToShow}>
        {categorias.map((categoria) => (
          <li key={categoria}>
            <button onClick={() => handleCategoriaClick(categoria)}>
              {categoria}
            </button>
          </li>
        ))}
      </Slider>
      </div>
      {Object.entries(productosPorCategoria).map(([categoria, productos]) => (
        <div className='container-full'>
          
        <div key={categoria} className='container-menu'>
          <h2 id={categoria}>{categoria}</h2>
          {productos.map((producto) => (
            <div className='card-product' key={producto.id}>
              <img src={producto.img} alt="" />
              <div>
         <h3>{producto.nombre}</h3>
       <p>{producto.detalle}</p>
      <p>${producto.precio}.00</p>
        </div>
            </div>
          ))}
        </div>
        </div>
      ))}
    </div>
  )
}