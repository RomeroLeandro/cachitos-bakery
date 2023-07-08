import React, {useState} from 'react'
import './Find.css';
import {Comments} from "../community/comments/Comments";
import {Opinion} from "../community/opinion/Opinion";
import {Promotions} from "./promotions/Promotions";
import {News} from "./news/News";

export const Find = () => {

    const [showNews, setShowNews] = useState(true);
    const [showPromotions, setShowPromotions] = useState(false);

    const showComponent = (component) => {
        if (component === 'Pro') {
            setShowPromotions(true);
            setShowNews(false);
        } else if (component === 'Nov') {
            setShowPromotions(false);
            setShowNews(true);
        }
    };
    return (
        <div className='nav-community'>
            <div className='container-buttons-community'>
                <button
                    className={`buttons-community ${showPromotions ? 'selected' : ''}`}
                    onClick={() => showComponent('Pro')}
                >
                    PROMOCIONES
                </button>
                <button
                    className={`buttons-community ${showNews ? 'selected' : ''}`}
                    onClick={() => showComponent('Nov')}
                >
                    NOVEDADES
                </button>
            </div>
            {showPromotions && <Promotions/>}
            {showNews && <News />}
        </div>
    )
}
