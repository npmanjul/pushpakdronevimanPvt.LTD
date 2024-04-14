import React from 'react'
import './Servicespage.css'
import Blankspace from '../../Basic components/Blankspace';
import Maincontainerimg from '../components/Maincontainerimg';
import Sessionheading from '../components/Sessionheading';
import sData from '../subpage data/Services Data/Servicesdata';
import Subpageheading from '../components/Subpageheading';
import AdvantagesImages from '../components/AdvantagesImages';
import Advantagesheading from '../components/Advantagesheading';
import Footer from '../../Basic components/Footer';

const Testingandcalibration = () => {
  return (
    <>
 <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={sData[6].imgloc} />
                        <Subpageheading topheading={sData[6].heading} />
                        <div className='subpage-content'>

                            <Sessionheading sessionheading={sData[6].topicheading1} />


                            <Advantagesheading />
                            <AdvantagesImages images1={sData[6].img1} images2={sData[6].img2} images3={sData[6].img3} images4={sData[6].img4} />


                        </div>
                    </div>
                </div>

            </div>

            <Footer />
    </>
  )
}

export default Testingandcalibration