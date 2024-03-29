import React from 'react';
import './topheading.css';

const Topheading = (props) => {
  return (
    <>
        <div className='top-heading'>
        {props.topHeading}
        </div>
    </>
  )
}

export default Topheading