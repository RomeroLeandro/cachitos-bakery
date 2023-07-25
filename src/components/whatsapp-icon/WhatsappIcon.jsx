import React from 'react'
import './whatsappIcon.css';
import whatsapp from '../../assets/icons/whatsapp.png'
export const WhatsappIcon = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=59899358314" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="WhatsApp Icon" />
    </a>
  )
}
