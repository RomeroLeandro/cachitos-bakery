import React, {useState} from 'react'
import './Community.css';
import {Comments} from "./comments/Comments";
import {Opinion} from "./opinion/Opinion";

export const Community = () => {
    const [comentarios, setComentarios] = useState([
        { nombre: 'Andrea', comentario: '¡Los mejores tequeños que he probado! Me han hecho sentir de nuevo en casa.', valoracion: 5 },
        { nombre: 'Martín', comentario: 'Rica comida y buen servicio. Entregaron el pedido a tiempo y nos mantuvieron informados.', valoracion: 4 },
    ]);

    const addComment = (newComment) => {
        setComentarios([...comentarios, newComment]);
    };

    const [showComments, setShowComments] = useState(true);
    const [showOpinion, setShowOpinion] = useState(false);

    const showComponent = (component) => {
        if (component === 'Com') {
            setShowComments(true);
            setShowOpinion(false);
        } else if (component === 'Op') {
            setShowComments(false);
            setShowOpinion(true);
        }
    };

    return (
        <div className='nav-community'>
            <div className='container-buttons-community'>
                <button className='buttons-community' onClick={() => showComponent('Com')}>
                    COMENTARIOS
                </button>
                <button className='buttons-community' onClick={() => showComponent('Op')}>
                    TU OPINIÓN
                </button>
            </div>
            {showComments && <Comments comentarios={comentarios} />}
            {showOpinion && <Opinion addComment={addComment} />}
        </div>
    );
};
