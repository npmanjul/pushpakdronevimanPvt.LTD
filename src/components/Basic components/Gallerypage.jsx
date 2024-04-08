import React from 'react';
import './gallery.css'
import GalleryImg from './GalleryImg';
import gData from './data/GalleryData';

const Gallerypage = () => {
  return (
    <>


      <div className='gallery-container'>
        {gData.map(function (data) {
          return (
            <div className='gallery-container-inner'>
              <GalleryImg imgSrc={data.photoSrc} headingSrc={data.heading} subheadingSrc={data.subTitle} />
            </div>)
        })}
      </div>
    </>
  )
}

export default Gallerypage;