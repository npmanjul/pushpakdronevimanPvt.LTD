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

const ThreeDayWorkshopOnDrone = () => {
    return (
        <>
            <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={dwData[0].imgloc} />
                        <Subpageheading topheading={dwData[0].heading} />
                        <div className='subpage-content'>
                            <Dayheading daysheading={dwData[0].day1heading} />
                            <Sessionheading sessionheading={dwData[0].session1heading} />
                            <Points Point={dwData[0].point1} />
                            <Points Point={dwData[0].point2} />
                            <Points Point={dwData[0].point3} />
                            <Sessionheading sessionheading={dwData[0].session2heading} />
                            <Points Point={dwData[0].point4} />
                            <Points Point={dwData[0].point5} />
                            <Points Point={dwData[0].point6} />
                            <Dayheading daysheading={dwData[0].day2heading} />
                            <Sessionheading sessionheading={dwData[0].session3heading} />
                            <Points Point={dwData[0].point7} />
                            <Points Point={dwData[0].point8} />
                            <Points Point={dwData[0].point9} />
                            <Points Point={dwData[0].point10} />
                            <Sessionheading sessionheading={dwData[0].session4heading} />
                            <Points Point={dwData[0].point11} />
                            <Points Point={dwData[0].point12} />
                            <Points Point={dwData[0].point13} />
                            <Dayheading daysheading={dwData[0].day3heading} />
                            <Sessionheading sessionheading={dwData[0].session5heading} />
                            <Points Point={dwData[0].point14} />
                            <Points Point={dwData[0].point15} />
                            <Points Point={dwData[0].point16} />
                            <Sessionheading sessionheading={dwData[0].session6heading} />
                            <Points Point={dwData[0].point17} />
                            <Points Point={dwData[0].point18} />
                            <Points Point={dwData[0].point19} />
                            <Points Point={dwData[0].point20} />
                            <Points Point={dwData[0].point21} />
                            {/* <Advantagesheading /> */}
                            <AdvantagesImages images1={dwData[0].img1} imagetitle1={dwData[0].title1} images2={dwData[0].img2} imagetitle2={dwData[0].title2} images3={dwData[0].img3} imagetitle3={dwData[0].title3} images4={dwData[0].img4} imagetitle4={dwData[0].title4} />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ThreeDayWorkshopOnDrone;