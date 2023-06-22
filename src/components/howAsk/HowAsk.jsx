import React, { useEffect, useState } from 'react';
import './HowAsk.css';
import Modal from 'react-modal';
import whatsapp from '../../assets/icons/whatsapp.svg'
import '../whatsapp-icon/whatsappIcon.css';

export const HowAsk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div >
      <h2>¡Comunicate con nosotros!</h2>
      <div>
        <p>Escríbenos por WhatsApp</p>
        <div>
          {/* <img src={whatsapp} alt="WhatsApp Icon" className="whatsapp" /> */}
          <div>
            <a href="https://api.whatsapp.com/send?phone=541155755890" target="_blank" rel="noopener noreferrer">097265263</a>
            <p>Y</p>
            <a href="https://api.whatsapp.com/send?phone=541155755890" target="_blank" rel="noopener noreferrer">092090229</a>
          </div>

        </div>

        <div>


        </div>

      </div>
    </div >
  )
}