import React from 'react';
import './dayheading.css';

const Dayheading = (props) => {
    return (
        <>
            <div className='day-heading'>
            {props.daysheading}
            </div>
        </>
    )
}

export default Dayheading