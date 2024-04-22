import React from 'react';
import './productpage.css';
import Footer from '../../Basic components/Footer';
import Maincontainerimg from '../components/Maincontainerimg';
import Subpageheading from '../components/Subpageheading';
import Paragraph from '../components/Paragraph';
import Advantagesheading from '../components/Advantagesheading';
import AdvantagesImages from '../components/AdvantagesImages';
import Blankspace from '../../Basic components/Blankspace';
import pData from '../subpage data/Product Data/Productdata';

const DroneKits = () => {
    return (
        <>
            <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={pData[3].imgloc} />
                        <Subpageheading topheading={pData[3].heading} />
                        <div className='subpage-content'>

                            {/* <Advantagesheading /> */}
                            <AdvantagesImages images1={pData[3].img1} images2={pData[3].img2} images3={pData[3].img3} images4={pData[3].img4} />


                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default DroneKits