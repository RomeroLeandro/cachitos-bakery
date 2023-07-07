import React, { useState } from 'react';
import './Contact.css';
import whatsapp from '../../assets/icons/whatsapp.png'
import instagram from '../../assets/icons/instagram.png'
import { Link } from 'react-router-dom';


export const Contact = () => {
    return (
        <div className='container-contact'>
            <h2 className='tittle-contact' >Comunícate con nosotros</h2>
            <p className='text-contact' >Escríbenos por WhatsApp</p>
            <div className='container-wpp'>
                <img src={whatsapp} alt="WhatsApp Icon" className='img-wpp-how-ask' />
                <a href="https://api.whatsapp.com/send?phone=541155755890" target="_blank" rel="noopener noreferrer">099358314</a>
            </div>
            <p className='text-contact' >Síguenos en Instagram</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="" className='img-wpp-how-ask' />
            </a>
        </div>
    )
}
