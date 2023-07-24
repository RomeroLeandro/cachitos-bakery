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
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const ordenCategorias = ['cachitos', 'pan', 'tequeños salados', 'tequeños dulces', 'empanadas', 'arepas', 'lasaña', 'adicionales', 'postres', 'bebidas'];

  useEffect(() => {
    const obtenerProductosMenu = async () => {
      const productosObtenidos = await obtenerProductos();
      setProductos(productosObtenidos);

      // Obtener todas las categorías únicas
      const categoriasUnicas = Array.from(
        new Set(productosObtenidos.map((producto) => producto.categoria))
      );

      // Ordenar las categorías según el orden específico
      const categoriasOrdenadas = ordenCategorias.filter((categoria) =>
        categoriasUnicas.includes(categoria)
      );

      setCategorias(categoriasOrdenadas);
    };

    obtenerProductosMenu();
  }, []);

  const ordenarProductosPorCategoria = (categoria) => {
    return productos.filter((producto) => producto.categoria === categoria);
  };


  // const handleCategoriaClick = (categoria) => {
  //   const categoriaElement = document.getElementById(categoria);
  //   if (categoriaElement) {
  //     categoriaElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  //     // Agrega un retraso para asegurarte de que el scrollIntoView se complete antes de agregar la clase
  //     setTimeout(() => {
  //       categoriaElement.classList.add('scroll-margin');
  //     }, 0);
  //   }
  // };
  const handleCategoriaClick = (categoria) => {
    const categoriaElement = document.getElementById(categoria);
    if (categoriaElement) {
      categoriaElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setCategoriaSeleccionada(categoria);
    setTimeout(() => {
      categoriaElement.classList.add('scroll-margin');
    }, 1000);
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
    <li
      key={categoria}
      className={categoria === categoriaSeleccionada ? 'selected' : ''}
    >
      <button onClick={() => handleCategoriaClick(categoria)}>
        {categoria.toUpperCase()} {/* Convertimos el texto a mayúsculas */}
      </button>
    </li>
  ))}
      </Slider>
      </div>
      {categorias.map((categoria) => (
  <div className='container-full' key={categoria}>
    <div id={categoria} className='container-menu'>
      <h2>{categoria}</h2>
      {ordenarProductosPorCategoria(categoria).map((producto) => (
        <div className='card-product' key={producto.id}>
          <img src={producto.img} alt='' />
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