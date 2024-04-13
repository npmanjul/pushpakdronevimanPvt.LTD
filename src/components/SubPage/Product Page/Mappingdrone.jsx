import React from 'react';
import './productpage.css';
import Blankspace from '../../Basic components/Blankspace';
import Maincontainerimg from '../components/Maincontainerimg';
import pData from '../subpage data/Product Data/Productdata';
import Subpageheading from '../components/Subpageheading';
import Paragraph from '../components/Paragraph';
import Points from '../components/Points';
import Heading from '../components/Heading';
import AdvantagesImages from '../components/AdvantagesImages';
import Advantagesheading from '../components/Advantagesheading';
import Footer from '../../Basic components/Footer';

const Mappingdrone = () => {
  return (
    <>
        <Blankspace />
        <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={pData[2].imgloc} />
                        <Subpageheading topheading={pData[2].heading} />
                        <div className='subpage-content'>
                            <Paragraph paratext="  Mapping drones navigate the skies with precision, utilizing advanced technology to create detailed and accurate maps. Equipped with specialized sensors, they survey landscapes, monitor terrain changes, and contribute to urban planning and environmental management. These unmanned aerial vehicles revolutionize mapping processes, providing efficient and high-resolution data for various industries." />

                            <Points Point={pData[2].point1} />
                            <Points Point={pData[2].point2} />
                            <Points Point={pData[2].point3} />

                            <Heading headingtext="Application:" />

                            <Points Point={pData[2].point4} pointHeadingtext={"Agriculture:- "}/>
                            <Points Point={pData[2].point5} pointHeadingtext={"Healthcare:- "} />
                            <Points Point={pData[2].point6} pointHeadingtext={"Disaster management support:- "}/>




                            <Advantagesheading />
                            <AdvantagesImages images1={pData[2].img1} images2={pData[2].img2} images3={pData[2].img3} images4={pData[2].img4} />


                        </div>
                    </div>
                </div>

            </div>

            <Footer/>

    </>
  )
}

export default Mappingdrone