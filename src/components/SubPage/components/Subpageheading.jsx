import React from 'react';
import './subpageheading.css';

const Subpageheading = (props) => {
  return (
    <>
        <div className='top-heading-subpage'>
        {props.topheading}
        <div className='subpage-heading-line'></div>
        </div>
    </>
  )
}

export default Subpageheading