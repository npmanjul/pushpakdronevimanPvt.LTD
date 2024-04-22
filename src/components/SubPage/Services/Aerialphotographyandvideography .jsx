import React from 'react'
import './Servicespage.css';
import Blankspace from '../../Basic components/Blankspace';
import Maincontainerimg from '../components/Maincontainerimg';
import sData from '../subpage data/Services Data/Servicesdata';
import Subpageheading from '../components/Subpageheading';
import Paragraph from '../components/Paragraph';
import AdvantagesImages from '../components/AdvantagesImages';
import Advantagesheading from '../components/Advantagesheading';
import Footer from '../../Basic components/Footer';

const Mappingandservillancing = () => {
  return (
    <>
<Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={sData[2].imgloc} />
                        <Subpageheading topheading={sData[2].heading} />
                        <div className='subpage-content'>
                            <Paragraph paratext="Pushpak Drone Viman is equipped with state-of-the-art aerial photography and videography capabilities. Our drones feature high-resolution cameras with advanced stabilization technology to capture stunning images and videos from various angles and altitudes. With precise GPS navigation systems and intelligent flight controls, our drones ensure smooth and stable operation even in challenging environments." />

                            <Paragraph paratext="Freelance photographers and videographers can expand their service offerings by incorporating aerial imagery into their portfolios, attracting new clients, and increasing revenue streams. Entrepreneurs have the opportunity to establish drone photography and videography businesses, offering comprehensive aerial solutions to industries such as real estate, tourism, and advertising. Additionally, organizations can leverage our services for marketing campaigns, promotional events, and special projects, enhancing brand visibility and engagement. two lines." />
                            
                            {/* <Advantagesheading /> */}
                            <AdvantagesImages images1={sData[2].img1}  images2={sData[2].img2} images3={sData[2].img3} images4={sData[2].img4}   />


                        </div>
                    </div>
                </div>

            </div>

            <Footer />
    </>
  )
}

export default Mappingandservillancing