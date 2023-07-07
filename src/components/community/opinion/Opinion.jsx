import React, {useState} from 'react'
import './Opinion.css'
import {Link} from "react-router-dom";
export const Opinion = ({ addComment }) => {
    const [nombre, setNombre] = useState('');
    const [comentario, setComentario] = useState('');
    const [valoracion, setValoracion] = useState(0);
    const [enviado, setEnviado] = useState(false);


    const handleStarClick = (index) => {
        setValoracion(index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !comentario || valoracion === 0) {
            return; // Si algún campo requerido está vacío, no se envía el comentario
        }
        const newComment = {
            nombre,
            comentario,
            valoracion,
        };
        addComment(newComment);
        setNombre('');
        setComentario('');
        setValoracion(0);
        setEnviado(true);
    };

    return (
        <div className='content-opinion'>
            <h2 className='add-comment'>Agregar Comentario</h2>
            {enviado ? (
                <div className='container-opinion'>
                    <p>¡Comentario enviado correctamente!</p>
                    <Link to="/">Ir al Home</Link>
                </div>
            ) : (
                <form className='form-container' onSubmit={handleSubmit}>
                    <label className='label-op'>MENSAJE</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                    <label className='label-op'>MENSAJE</label>
                        <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} required />

                    <label className='label-exp'>
                        ¿CÓMO FUE TU EXPERIENCIA CON NOSOTROS?</label>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <span
                                    key={index}
                                    className={`star ${index <= valoracion ? 'filled' : ''}`}
                                    onClick={() => handleStarClick(index)}
                                >
                  ★
                </span>
                            ))}
                        </div>

                    <button className='button-home' type="submit">MENÚ</button>
                </form>
            )}
        </div>




    );
}
