import './App.css';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { NavBar } from './components/navBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Community } from './components/community/Community';
import { Menu } from './components/menu/Menu';
import { HowAsk } from './components/howAsk/HowAsk';
import { Find } from './components/find/Find';
import { Home } from './components/home/Home';
import { WhatsappIcon } from './components/whatsapp-icon/WhatsappIcon';
import clock from './assets/icons/clock.png'




Modal.setAppElement('#root');

function App() {
  const [isOutsideBusinessHours, setIsOutsideBusinessHours] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentHour = moment().hour();
    const isOutsideHours = currentHour < 9 || currentHour >= 22;

    setIsOutsideBusinessHours(isOutsideHours);

    if (isOutsideHours) {
      setIsModalOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
          contentLabel="Fuera de Horario"
        >
          <h2 className='hello'>¡Hola!</h2>
          <img src={clock} alt="icono de un reloj" className='clock' />
          <p className='localClose' >Nuestro negocio se encuentra cerrado, pero pronto estaremos disponibles. Podés continuar explorando y programar tu pedido.</p>
          <button onClick={closeModal} className='button-name'>CONTINUAR</button>
        </Modal>
        <div className='container' >
          <NavBar />
          <WhatsappIcon />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            {/* <Route path='/Carrito' element={<Carrito />} /> */}
            <Route path='/novedades' element={<Find />} />
            <Route path='/comopedir' element={<HowAsk />} />
            <Route path='/sobrenosotros' element={<About />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/comunidad' element={<Community />} />
          </Routes>
        </div>


      </BrowserRouter>
    </>
  );
}

export default App;
