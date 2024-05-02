import React from 'react';
import './twophoto.css';

const Twophotes = (props) => {
  return (
    <>
    <div className='adv-images-two'>
        <div className='adv-img-box'>
            <img src={props.images1} alt='img'/>
            {/* <div className='img-title'>{props.imagetitle1}</div> */}
        </div>
        <div className='adv-img-box'>
            <img src={props.images2} alt='img' />
            {/* <div className='img-title'>{props.imagetitle2}</div> */}
        </div>
    </div>
</>
  )
}

export default Twophotes