import React, { useState } from 'react'
import './Opinion.css'
import { Link } from "react-router-dom";
export const Opinion = ({ addComment }) => {
    const [nombre, setNombre] = useState('');
    const [comentario, setComentario] = useState('');
    const [estrellas, setEstrellas] = useState(0);
    const [enviado, setEnviado] = useState(false);


    const handleStarClick = (index) => {
        setEstrellas(index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !comentario || estrellas === 0) {
            return; // Si algún campo requerido está vacío, no se envía el comentario
        }
        const newComment = {
            nombre,
            comentario,
            estrellas,
        };
        addComment(newComment);
        console.log(newComment)
        setNombre('');
        setComentario('');
        setEstrellas(0);
        setEnviado(true);
    };

    return (
        <div className='content-opinion'>

            {enviado ? (
                <div className='container-opinion'>
                    <p className='add-comment'>¡Gracias!</p>
                    <p className='add-comment'>Hemos recibido tus comentarios. ¡Tu opinión es muy importante para nosotros!</p>
                    <Link to={'/'}><button className='button-home'>IR AL INICIO</button> </Link>
                </div>
            ) : (
                <>
                    <h2 className='add-comment'>Agregar Comentario</h2>
                    <form className='form-container' onSubmit={handleSubmit}>
                        <label className='label-op'>Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        <label className='label-op'>Mensaje</label>
                        <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} required />

                        <label className='label-exp'>
                            ¿Como fue tu experiencia con nosotros?</label>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <span
                                    key={index}
                                    className={`star ${index <= estrellas ? 'filled' : ''}`}
                                    onClick={() => handleStarClick(index)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        <button className='button-opinion' type="submit">ENVIAR</button>
                    </form>
                </>
            )}
        </div>




    );
}
