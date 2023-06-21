import React from 'react'
import './whatsappIcon.css';
import whatsapp from '../../assets/icons/whatsapp.svg'
export const WhatsappIcon = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=541155755890" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="WhatsApp Icon" />
    </a>
  )
}
