import React from 'react';
import './WorkshopOnDroneDesign.css';
import Footer from '../../Basic components/Footer'
import Blankspace from '../../Basic components/Blankspace';
import Maincontainerimg from '../components/Maincontainerimg';
import dwData from '../subpage data/Training Workshop/Trainingworkshop'
import Subpageheading from '../components/Subpageheading';
import Dayheading from '../components/Dayheading';
import Sessionheading from '../components/Sessionheading';
import Points from '../components/Points';
import Advantagesheading from '../components/Advantagesheading';
import AdvantagesImages from '../components/AdvantagesImages';
import Topheading from '../components/Topheading';

const ThreeDayWorkshopOnDrone = () => {
    return (
        <>
            <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={dwData[2].imgloc} />
                        <Subpageheading topheading={dwData[2].heading} />
                        <div className='subpage-content'>
                            <Topheading topHeading={dwData[2].tophading1}/>
                            <Dayheading daysheading={dwData[2].day1heading} />
                            <Sessionheading sessionheading={dwData[2].session1heading} />
                            <Points Point={dwData[2].point1} />
                            <Points Point={dwData[2].point2} />
                            <Points Point={dwData[2].point3} />
                            <Points Point={dwData[2].point4} />
                            <Points Point={dwData[2].point5} />
                            <Sessionheading sessionheading={dwData[2].session2heading} />
                            <Points Point={dwData[2].point6} />
                            <Points Point={dwData[2].point7} />
                            <Points Point={dwData[2].point8} />
                            <Points Point={dwData[2].point9} />
                            <Dayheading daysheading={dwData[2].day2heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[2].point10} />
                            <Points Point={dwData[2].point11} />
                            <Points Point={dwData[2].point12} />
                            <Dayheading daysheading={dwData[2].day3heading} />
                            <Sessionheading sessionheading={dwData[2].session3heading} />
                            <Points Point={dwData[2].point13} />
                            <Points Point={dwData[2].point14} />
                            <Points Point={dwData[2].point15} />
                            <Points Point={dwData[2].point16} />
                            <Sessionheading sessionheading={dwData[2].session4heading} />
                            <Points Point={dwData[2].point17} />
                            <Points Point={dwData[2].point18} />
                            <Points Point={dwData[2].point19} />
                            <Points Point={dwData[2].point20} />
                            <Topheading topHeading={dwData[2].tophading2}/>
                            <Dayheading daysheading={dwData[2].day4heading} />
                            <Sessionheading sessionheading={dwData[2].session5heading} />
                            <Points Point={dwData[2].point21} />
                            <Points Point={dwData[2].point22} />
                            <Points Point={dwData[2].point23} />
                            <Points Point={dwData[2].point24} />
                            <Points Point={dwData[2].point25} />
                            <Points Point={dwData[2].point26} />
                            <Sessionheading sessionheading={dwData[2].session6heading} />
                            <Points Point={dwData[2].point25} />
                            <Points Point={dwData[2].point26} />
                            <Points Point={dwData[2].point27} />
                            <Points Point={dwData[2].point28} />
                            <Points Point={dwData[2].point29} />
                            <Points Point={dwData[2].point30} />
                            <Points Point={dwData[2].point31} />
                            <Points Point={dwData[2].point32} />
                           
                            
                            {/* <Advantagesheading /> */}
                            <AdvantagesImages images1={dwData[2].img1} imagetitle1={dwData[2].title1}  images2={dwData[2].img2} imagetitle2={dwData[2].title2} images3={dwData[2].img3} imagetitle3={dwData[2].title3} images4={dwData[2].img4} imagetitle4={dwData[2].title4}  />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ThreeDayWorkshopOnDrone;