import React, {useState} from 'react'
import './Comments.css'
import {Opinion} from "../opinion/Opinion";
export const Comments = ({ comentarios }) => {
    return (
        <div className='container-comments'>
            <h2>¿Qué dicen nuestros usuarios?</h2>
            <p>En Cachitos Bakery valoramos a nuestras y nuestros clientes y sus opiniones.</p>
            {comentarios.map((comentario, index) => (
                <div key={index} className='comment'>
                    <h3>{comentario.nombre}</h3>
                    <div className='valoracion'>
                        {Array.from({ length: comentario.valoracion }).map((_, index) => (
                            <span key={index} className='estrella' role='img' aria-label='Estrella'>
                &#9733;
              </span>
                        ))}
                    </div>
                    <p>{comentario.comentario}</p>
                </div>
            ))}
        </div>
    );
};