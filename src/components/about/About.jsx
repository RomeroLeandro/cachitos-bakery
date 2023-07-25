import React from 'react'
import './About.css';
import about from '../../assets/img/quienes-somos.png'

export const About = () => {
    return (
        <div className='container-about'>
            <h2 className='tittle-about'>¿Quiénes somos?</h2>
            <div className='content-about'>
                <img src={about} alt="" className='img-about' />
                <div className='content-text'>
                    <p className='text-about'>¡Hola! Somos Nora y Ana, madre e hija. Llegamos a Uruguay desde nuestra querida Venezuela. Aquí, hemos visto con alegría que a la gente le encanta descubrir sabores y experiencias nuevas. Por eso, y porque quisimos traerte un pedacito de nuestra cultura y de la cocina caribeña, en 2018 fundamos Cachitos Bakery, un emprendimiento familiar y artesanal.</p>
                    <p className='text-about'>Creemos en la importancia de una atención personalizada, en el empleo de los mejores ingredientes y en una producción atenta y destacada para todos nuestros clientes. Para nosotras, cada día es una nueva oportunidad para darles lo mejor.</p>
                    <p className='text-about'>Te agradecemos mucho tu confianza y apoyo.</p>
                    <p className='text-about'>¿Ya te animaste a probar alguno de nuestros productos? ¡Cuéntanos!</p>
                    <p className='text-about'>Hasta pronto, Nora y Ana
                    </p>
                </div>
            </div>
        </div>
    )
}
