import React, { useState, useEffect } from 'react'
import './Community.css';
import { Comments } from "./comments/Comments";
import { Opinion } from "./opinion/Opinion";
import { obtenerComentarios, agregarComentario } from '../../utils/firebase';

export const Community = () => {
    const [comentarios, setComentarios] = useState([]);
    const [enviado, setEnviado] = useState(false);

    const addComment = async (newComment) => {
        try {
          const comentarioRef = await agregarComentario(newComment);
          setComentarios([...comentarios, { id: comentarioRef.id, ...newComment }]);
          setEnviado(true); // Si quieres mostrar el mensaje de "Gracias" luego de agregar el comentario
        } catch (error) {
          console.error('Error al agregar el comentario:', error);
        }
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
  

  useEffect(() => {
    obtenerComentarios().then((comentariosObtenidos) => {
      setComentarios(comentariosObtenidos);
    });
  }, []);

    return (
        <div className='nav-community'>
            <div className='container-buttons-community'>
                <button
                    className={`buttons-community ${showComments ? 'selected' : ''}`}
                    onClick={() => showComponent('Com')}
                >
                    COMENTARIOS
                </button>
                <button
                    className={`buttons-community ${showOpinion ? 'selected' : ''}`}
                    onClick={() => showComponent('Op')}
                >
                    TU OPINIÓN
                </button>
            </div>
            {showComments && <Comments comentarios={comentarios} />}
            {showOpinion && <Opinion addComment={addComment} setEnviado={setEnviado} />}
        </div>
    );
};
