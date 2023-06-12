
import './App.css';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { NavBar } from './components/navBar/NavBar';
import { ModalProduct } from './components/modalProduct/ModalProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Find } from './components/find/Find';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Community } from './components/community/Community';



Modal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentHour = moment().hour();
    const isOutsideBusinessHours = currentHour < 8 || currentHour >= 17;

    if (isOutsideBusinessHours) {
      setIsModalOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      {/* <Routes>
        <Route path='/' />
        <Route path='/menu' element={<ModalProduct />} />
        <Route path='/encuentranos' element={<Find />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/comunidad' element={<Community />} />
      </Routes> */}
      <ModalProduct />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Fuera de Horario"
      >
        <h2>El local se encuentra cerrado</h2>
        <p>Lo sentimos, estamos fuera del horario de atención aunque puedes programar tu pedido. ¿Quieres continuar?</p>
        <button onClick={closeModal}>Programar pedido</button>
      </Modal>
    </div>
  );
}

export default App;

