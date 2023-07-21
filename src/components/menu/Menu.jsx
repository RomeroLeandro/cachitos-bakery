import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Context/Context';
import 'firebase/database';
import './Menu.css';
import { obtenerProductos } from '../../utils/firebase';
import Slider from 'react-slick';
import Modal from 'react-modal'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [numSlidesToShow, setNumSlidesToShow] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [productoModal, setProductoModal] = useState({});//Producto que se muestra en el modal
  const [ShowAdd, setShowAdd] = useState(false);
  const [check,setCheck] = useState([0,0])
  const {AddList, Finish} = useContext(Context);
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

  const OpenModal = (item,event) =>{
    // event.stopPropagation();
    setShowModal(1 - showModal)
    setProductoModal(item)
  }
  const CloseModal = (event) =>{
    event.stopPropagation();
    setShowModal(0)
  }
  function Agregar(key){
    // console.log(key)
    setCheck(() =>{
      let chk = [...check]
      chk[key] = 1- chk[key]
      return (chk)
    })
    // console.log(check)
  }
  const Pedir = () =>{
    AddtoCart(productoModal)
    Finish();
  }

  const AddtoCart = (item) =>{
    let arr = [item]
    check.map((chk,key) =>{
      if(chk){
        arr.push(productosPorCategoria['adicionales'][key]);
      }
    })
    arr.map((item) =>{
      return(setTimeout(() =>{
        AddList(item,1)
      },200))
    })
    setShowAdd(0)
    setShowModal(0)
  }

  return (
    <div className='Menu-Completo'>
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
              <>
              <div onClick={() => OpenModal(producto)} className='card-product' key={producto.id}>
                <img src={producto.img} alt="" />
                <div>
                  <h3>{producto.nombre}</h3>
                  <p className='detalle'>{producto.detalle}</p>
                  <p>$ {producto.precio}.00</p>
                </div>
              </div>
              </>
            ))}
          </div>
        </div>
      ))}
      
      <Modal
          isOpen = {showModal}
          onRequestClose= {OpenModal}
          className="modal"
          
          shouldCloseOnOverlayClick = {false}
          overlayClassName = "cetered-overlay"
      >
        <div /*onClick={CloseModal}*/ className='modal-container'>
          <button className='close-modal' onClick={OpenModal}>X</button>
          <div className='modal-center'>
            <img src={productoModal.img} alt={productoModal.nombre}/>
            <div className='text-container'>
              <h2>{productoModal.nombre}</h2>
              <p className='detalle'>{productoModal.detalle}</p>
              <p>${productoModal.precio}</p>
            </div>
            <div className='buttons'>
              <button onClick={Pedir}>PEDIR</button>
              <button onClick={() => AddtoCart(productoModal)}>AGREGAR AL CARRITO</button>
              <button onClick={() => {setShowAdd(1- ShowAdd)}} className='add'>{ShowAdd ? "^" : "v"}</button>
            </div>
            <div className='adicionales'>
              {ShowAdd
                ?<>
                <p>¿Deseas agregar adicionales?</p>
                {productosPorCategoria["adicionales"].map((item,key) => {
                  return(
                    <>
                    <div key = {key} className='adicional'>
                      <p>{item.nombre}</p>
                      <div>
                        <p>$ {item.precio}</p>
                        <input onClick={() =>Agregar(key)} className='check' type='checkbox'></input>
                      </div>
                    </div>
                    </>
                  )
                })}
                </>
                :<></>
              }
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}