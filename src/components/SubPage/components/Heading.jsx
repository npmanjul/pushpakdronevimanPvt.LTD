import React from 'react';
import './heading.css';

const Heading = (props) => {
  return (
    <>
         <div className='product-subheading'>{props.headingtext}</div>
    </>
  )
}

export default Heading