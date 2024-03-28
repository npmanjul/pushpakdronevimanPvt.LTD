import React from 'react';
import './sessionheading.css'

const Sessionheading = (props) => {
  return (
    <>
        <div className='session-heading'>
        {props.sessionheading}
        </div>
    </>
  )
}

export default Sessionheading