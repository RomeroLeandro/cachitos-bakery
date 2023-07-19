import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import './ModalProduct.css';

export const ModalProduct = ({Producto,open}) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        setIsOpen(open)
        console.log("Hola")
    },[])
    return (
        <div className='modalProduct'>
            {/* <button onClick={openModal}>Abrir modal</button> */}
            <button onClick={openModal}>
                <img src="" alt="imagen" />
                <h2>PRODUCTO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid eligendi beatae quae molestias aliquam delectus mollitia, culpa eos obcaecati?</p>
                <p>$precio</p>
                <button>WhatsApp</button>
            </button>
            <Modal
                isOpen={false}
                onRequestClose={closeModal}
                contentLabel="Ejemplo de modal"
                className="centered-modal"
                overlayClassName="centered-overlay"
            >
                <button onClick={closeModal}>Cerrar</button>
                <img src="" alt="imagen" />
                <h2>PRODUCTO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid eligendi beatae quae molestias aliquam delectus mollitia, culpa eos obcaecati?</p>
                <p>$precio</p>
                <button>WhatsApp</button>
            </Modal>
        </div>
    )
}
