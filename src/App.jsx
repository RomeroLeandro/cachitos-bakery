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



Modal.setAppElement('#root');

function App() {
  const [isOutsideBusinessHours, setIsOutsideBusinessHours] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInsideBusinessHoursModalOpen, setIsInsideBusinessHoursModalOpen] = useState(false);

  useEffect(() => {
    const currentHour = moment().hour();
    const isOutsideHours = currentHour < 8 || currentHour >= 19;

    setIsOutsideBusinessHours(isOutsideHours);

    if (isOutsideHours) {
      setIsModalOpen(true);
    } else {
      setIsInsideBusinessHoursModalOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsInsideBusinessHoursModalOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/novedades' element={<Find />} />
          <Route path='comopedir' element={<HowAsk />} />
          <Route path='/sobrenosotros' element={<About />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/comunidad' element={<Community />} />
        </Routes>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
          contentLabel="Fuera de Horario"
        >
          <h2>El local se encuentra cerrado</h2>
          <p>Lo sentimos, estamos fuera del horario de atención aunque puedes programar tu pedido. ¿Quieres continuar?</p>
          <button onClick={closeModal} className='button-name'>Programar pedido</button>
        </Modal>
        <Modal
          isOpen={isInsideBusinessHoursModalOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
          contentLabel="Dentro de Horario"
        >
          <h2>El local está abierto</h2>
          <p>¡Bienvenido! Estamos dentro del horario de atención.</p>
          <p>¿En qué podemos ayudarte?</p>
          <button onClick={closeModal} className='button-name'>Programar pedido</button>
        </Modal>
      </BrowserRouter>
    </>
  );
}

export default App;
