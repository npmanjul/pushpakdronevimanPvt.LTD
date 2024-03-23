import React from 'react';
import './aboutusquote.css';
import lquote from './icon/double-quotes-l.png';
import rquote from './icon/double-quotes-r.png';

const Aboutusqoute = () => {
    return (
        <>
            <div className='quote-container'>
                <div className='quote-box'>
                <div className='symbole-size-l'>
                <img src={lquote}/>
                </div>
                <div className='quote-text'>
                    Drones soar as modern marvels, weaving through skies to
                    capture breathtaking vistas, aid in vital missions, and
                    redefine possibilities with their aerial prowess.
                </div>
                <div className='symbole-size-r'>
                <img src={rquote}/>
                </div>
                </div>
            </div>
        </>
    )
}

export default Aboutusqoute