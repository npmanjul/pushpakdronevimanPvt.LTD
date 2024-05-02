import React from 'react';
import './productpage.css';
import Footer from '../../Basic components/Footer';
import Maincontainerimg from '../components/Maincontainerimg';
import Subpageheading from '../components/Subpageheading';
import Paragraph from '../components/Paragraph';
import Points from '../components/Points';
import Heading from '../components/Heading';
import Advantagesheading from '../components/Advantagesheading';
import AdvantagesImages from '../components/AdvantagesImages';
import Blankspace from '../../Basic components/Blankspace';
import pData from '../subpage data/Product Data/Productdata';
import Twophotes from '../components/Twophotes';

const Videographydrone = () => {
  return (
    <>
         <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={pData[1].imgloc} />
                        <Subpageheading topheading={pData[1].heading} />
                        <div className='subpage-content'>
                            <Paragraph paratext="Pushpak Drone Viman is equipped with state-of-the-art aerial photography and videography capabilities. Our drones feature high-resolution cameras with advanced stabilization technology to capture stunning images and videos from various angles and altitudes. With precise GPS navigation systems and intelligent flight controls, our drones ensure smooth and stable operation even in challenging environments." />

                            <Points Point={pData[1].point1} />
                            <Points Point={pData[1].point2} />
                            <Points Point={pData[1].point3} />
                            <Points Point={pData[1].point4} />
                            
                            {/* <Advantagesheading /> */}
                            <Twophotes images1={pData[1].img1}  images2={pData[1].img2} images3={pData[1].img3} images4={pData[1].img4}   />


                        </div>
                    </div>
                </div>

            </div>

            <Footer />
    </>
  )
}

export default Videographydrone