import React, { useEffect, useState } from 'react';
import './gallery.css'
import GalleryImg from './GalleryImg';
import { useAuth } from '../../Store/auth';

const Gallerypage = () => {

  const {galleryData}=useAuth();

  return (
    <>
      <div className='gallery-container'>
        {galleryData.map(function (data) {
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