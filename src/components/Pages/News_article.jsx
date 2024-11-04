import React from 'react';
import Error from '../Basic components/Error';
import Blankspace from '../Basic components/Blankspace';
import Gallerypage from '../Basic components/Gallerypage';
import Footer from '../Basic components/Footer'
import './media.css'


const R_D = () => {
  return (
    <>
      <div className='pvd-container'>
        <Blankspace />
        <div className='media-container'>
          <Gallerypage />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default R_D;