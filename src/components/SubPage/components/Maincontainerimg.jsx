import React from 'react';
import './maincontainerimg.css';

const Maincontainerimg = (props) => {
    return (
        <>
            <div className='subpage-image-container'>
                <img src={props.imgsrc} />
            </div>
        </>
    )
}

export default Maincontainerimg;