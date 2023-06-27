import React, { useEffect, useState } from 'react';
import './HowAsk.css';
import Modal from 'react-modal';
import whatsapp from '../../assets/icons/whatsapp.png'
import instagram from '../../assets/icons/instagram.png'
import '../whatsapp-icon/whatsappIcon.css';

export const HowAsk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='container-how-ask' >
      <h2 className='tittle-how-ask'>¿Cómo pedir?</h2>
      <p className='text-how-ask'>Tomamos tu pedido por Instagram o WhatsApp, al menos 24 horas antes del momento de la entrega.</p>
      <p className='text-how-ask'>Puedes escribirnos <strong>todos los días de 9 am a 22 pm.</strong></p>
      <p className='text-how-ask'>Las entregas se realizan en nuestro domicilio o en un punto a coordinar.</p>
      <p className='text-how-ask'>¡Esperamos tu consulta!</p>
      <div className='container-wpp'>
        <img src={whatsapp} alt="WhatsApp Icon" className='img-wpp-how-ask' />
        <a href="https://api.whatsapp.com/send?phone=541155755890" target="_blank" rel="noopener noreferrer">099358314</a>
      </div>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="" className='img-wpp-how-ask' />
      </a>
    </div >
  )
}