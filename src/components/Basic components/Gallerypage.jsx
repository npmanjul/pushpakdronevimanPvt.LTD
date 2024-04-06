import React from 'react';
import './gallery.css'
import GalleryImg from './GalleryImg';

const Gallerypage = () => {
    return (
        <>
            
            <div className='gallery-container'>
                <GalleryImg imgSrc="https://firebasestorage.googleapis.com/v0/b/pushpak-drone-viman-pvt-ltd.appspot.com/o/GalleryImg%2Fimg%202.jpg?alt=media&token=4af4b919-ef89-4c1b-886f-c51d4a947577"/>

                <GalleryImg imgSrc="https://firebasestorage.googleapis.com/v0/b/pushpak-drone-viman-pvt-ltd.appspot.com/o/GalleryImg%2Fimg%201.jpg?alt=media&token=c3cdddaa-6387-432d-805a-4fc60da51aad"/>

                <GalleryImg imgSrc="https://firebasestorage.googleapis.com/v0/b/pushpak-drone-viman-pvt-ltd.appspot.com/o/GalleryImg%2Fimg4.jpg?alt=media&token=a965297f-a8dc-4e40-80ad-7de71aa239a4"/>

                <GalleryImg imgSrc="https://firebasestorage.googleapis.com/v0/b/pushpak-drone-viman-pvt-ltd.appspot.com/o/GalleryImg%2Fimg5.jpg?alt=media&token=ed7c0e0c-fc93-4aa5-a071-6b975db119f1"/>

                <GalleryImg imgSrc="https://firebasestorage.googleapis.com/v0/b/pushpak-drone-viman-pvt-ltd.appspot.com/o/GalleryImg%2Fimg6.jpg?alt=media&token=fa0b958b-2d87-46f5-9bcf-c3bc3befde04"/>

                <GalleryImg imgSrc="https://firebasestorage.googleapis.com/v0/b/pushpak-drone-viman-pvt-ltd.appspot.com/o/GalleryImg%2Fimg7.jpg?alt=media&token=8b0417f8-471c-4c49-8423-1fe18cc1dd5b"/>
                 
           </div>       
                
        </>
    )
}

export default Gallerypage