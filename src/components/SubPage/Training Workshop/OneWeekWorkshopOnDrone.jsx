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
                        <Maincontainerimg imgsrc={dwData[1].imgloc} />
                        <Subpageheading topheading={dwData[1].heading} />
                        <div className='subpage-content'>
                            <Dayheading daysheading={dwData[1].day1heading} />
                            <Sessionheading sessionheading={dwData[1].session1heading} />
                            <Points Point={dwData[1].point1} />
                            <Points Point={dwData[1].point2} />
                            <Points Point={dwData[1].point3} />
                            <Points Point={dwData[1].point4} />
                            <Sessionheading sessionheading={dwData[1].session2heading} />
                            <Points Point={dwData[1].point5} />
                            <Points Point={dwData[1].point6} />
                            <Points Point={dwData[1].point7} />
                            <Dayheading daysheading={dwData[1].day2heading} />
                            <Sessionheading sessionheading={dwData[1].session3heading} />
                            <Points Point={dwData[1].point8} />
                            <Points Point={dwData[1].point9} />
                            <Points Point={dwData[1].point11} />
                            <Points Point={dwData[1].point11} />
                            <Points Point={dwData[1].point12} />
                            <Points Point={dwData[1].point13} />
                            <Points Point={dwData[1].point14} />
                            <Sessionheading sessionheading={dwData[1].session4heading} />
                            <Points Point={dwData[1].point15} />
                            <Points Point={dwData[1].point14} />
                            <Points Point={dwData[1].point15} />
                            <Points Point={dwData[1].point16} />
                            <Points Point={dwData[1].point17} />
                            <Points Point={dwData[1].point18} />
                            <Points Point={dwData[1].point19} />
                            <Dayheading daysheading={dwData[1].day3heading} />
                            <Sessionheading sessionheading={dwData[1].session5heading} />
                            <Points Point={dwData[1].point20} />
                            <Points Point={dwData[1].point21} />
                            <Sessionheading sessionheading={dwData[1].session6heading} />
                            <Points Point={dwData[1].point22} />
                            <Dayheading daysheading={dwData[1].day4heading} />
                            <Sessionheading sessionheading={dwData[1].session7heading} />
                            <Points Point={dwData[1].point23} />
                            <Points Point={dwData[1].point24} />
                            <Points Point={dwData[1].point25} />
                            <Sessionheading sessionheading={dwData[1].session8heading} />
                            <Points Point={dwData[1].point26} />
                            <Points Point={dwData[1].point27} />
                            <Dayheading daysheading={dwData[1].day5heading} />
                            <Sessionheading sessionheading={dwData[1].session9heading} />
                            <Points Point={dwData[1].point28} />
                            <Points Point={dwData[1].point29} />
                            <Sessionheading sessionheading={dwData[1].session10heading} />
                            
                            {/* <Advantagesheading /> */}
                            <AdvantagesImages images1={dwData[1].img1} imagetitle1={dwData[1].title1} images2={dwData[1].img2} imagetitle2={dwData[1].title2} images3={dwData[1].img3} imagetitle3={dwData[1].title3} images4={dwData[1].img4} imagetitle4={dwData[1].title4} />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ThreeDayWorkshopOnDrone;