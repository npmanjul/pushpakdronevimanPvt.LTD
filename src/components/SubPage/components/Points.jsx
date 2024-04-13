import React from 'react';
import './points.css'

const Points = (props) => {
  return (
    <>
        <div className='point-text'>
        <ul>
            <li><b>{props.pointHeadingtext}</b>{props.Point}</li>
        </ul>
        </div>
    </>
  )
}

export default Points