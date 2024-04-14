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

const TwoWeekWorkshopondesign = () => {
    return (
        <>
            <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={dwData[3].imgloc} />
                        <Subpageheading topheading={dwData[3].heading} />
                        <div className='subpage-content'>
                            <Dayheading daysheading={dwData[3].day1heading} />
                            <Sessionheading sessionheading={dwData[3].session1heading} />
                            <Points Point={dwData[3].point1} />
                            <Points Point={dwData[3].point2} />
                            <Points Point={dwData[3].point3} />
                            <Points Point={dwData[3].point4} />
                            <Points Point={dwData[3].point5} />
                            <Sessionheading sessionheading={dwData[3].session2heading} />
                            <Points Point={dwData[3].point6} />
                            <Points Point={dwData[3].point7} />
                            <Points Point={dwData[3].point8} />
                            <Points Point={dwData[3].point9} />
                            <Dayheading daysheading={dwData[3].day2heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[3].point10} />
                            <Points Point={dwData[3].point11} />
                            <Points Point={dwData[3].point12} />
                            <Dayheading daysheading={dwData[3].day3heading} />
                            <Sessionheading sessionheading={dwData[3].session3heading} />
                            <Points Point={dwData[3].point13} />
                            <Points Point={dwData[3].point14} />
                            <Points Point={dwData[3].point15} />

                            <Dayheading daysheading={dwData[3].day4heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[3].point16} />
                            <Points Point={dwData[3].point17} />
                            <Points Point={dwData[3].point18} />
                            
                            <Dayheading daysheading={dwData[3].day5heading} />
                            <Sessionheading sessionheading={dwData[3].session4heading} />
                            <Points Point={dwData[3].point19} />
                            <Points Point={dwData[3].point20} />
                            <Points Point={dwData[3].point21} />
                            <Points Point={dwData[3].point22} />
                            <Points Point={dwData[3].point23} />


                            <Sessionheading sessionheading={dwData[3].session5heading} />
                            <Points Point={dwData[3].point24} />
                            <Points Point={dwData[3].point25} />
                            <Points Point={dwData[3].point26} />
                            <Points Point={dwData[3].point27} />

                            <Dayheading daysheading={dwData[3].day6heading} />
                            <Sessionheading sessionheading={dwData[3].session6heading} />
                            <Points Point={dwData[3].point28} />
                            <Points Point={dwData[3].point29} />
                            <Points Point={dwData[3].point30} />
                            <Points Point={dwData[3].point31} />
                            <Points Point={dwData[3].point32} />
                           
                            <Topheading topHeading={dwData[3].tophading1}/>

                            <Sessionheading sessionheading={dwData[3].session7heading} />
                            <Points Point={dwData[3].point33} />
                            <Points Point={dwData[3].point34} />
                            <Points Point={dwData[3].point35} />
                            <Points Point={dwData[3].point36} />
                            <Points Point={dwData[3].point37} />
                            <Points Point={dwData[3].point38} />

                            <Sessionheading sessionheading={dwData[3].session8heading} />
                            <Points Point={dwData[3].point39} />
                            <Points Point={dwData[3].point40} />
                            <Points Point={dwData[3].point41} />
                            <Points Point={dwData[3].point42} />
                            
                            
                            {/* <Advantagesheading /> */}
                            <AdvantagesImages images1={dwData[3].img1} imagetitle1={dwData[3].title1}  images2={dwData[3].img2} imagetitle2={dwData[3].title2} images3={dwData[3].img3} imagetitle3={dwData[3].title3} images4={dwData[3].img4} imagetitle4={dwData[3].title4}  />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TwoWeekWorkshopondesign;