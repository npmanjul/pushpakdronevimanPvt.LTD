import React from 'react';
import './heading.css';

const Heading = (props) => {

  return (
    <>
        <div className='heading-container'>
        <div className='pageheading' >
            {props.heading}
        </div>
        <div className='heading-line'></div>
        </div> 
    </>
  )
}

export default Heading