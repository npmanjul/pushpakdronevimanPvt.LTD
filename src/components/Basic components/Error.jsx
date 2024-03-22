import React from 'react';
import './error.css';
import Blankspace from '../Basic components/Blankspace';

const Error = () => {
    return (
        <>
            <Blankspace />
            <div className='error-container'>
                <div className='error-heading'>404</div>
                <div className='error-title'>Page Not Found !</div>
            </div>
        </>
    )
}

export default Error