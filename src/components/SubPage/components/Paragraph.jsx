import React from 'react'
import './paragraph.css'

const Paragraph = (props) => {
  return (
    <div className='para-container'>  
    {props.paratext}
    </div>
  )
}

export default Paragraph
