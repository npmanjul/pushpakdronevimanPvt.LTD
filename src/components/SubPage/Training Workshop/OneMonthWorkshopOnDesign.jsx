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

const OneMonthWorkshopOnDesign = () => {
    return (
        <>
            <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={dwData[4].imgloc} />
                        <Subpageheading topheading={dwData[4].heading} />
                        <div className='subpage-content'>
                            <Topheading topHeading={dwData[4].tophading1}/>
                            <Dayheading daysheading={dwData[4].day1heading} />
                            <Sessionheading sessionheading={dwData[4].session1heading} />
                            <Points Point={dwData[4].point1} />
                            <Points Point={dwData[4].point2} />
                            <Points Point={dwData[4].point3} />
                            <Points Point={dwData[4].point4} />
                            <Points Point={dwData[4].point5} />
                            <Dayheading daysheading={dwData[4].day2heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[4].point6} />
                            <Points Point={dwData[4].point7} />
                            <Points Point={dwData[4].point8} />
                            <Points Point={dwData[4].point9} />
                            <Dayheading daysheading={dwData[4].day3heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[4].point10} />
                            <Points Point={dwData[4].point11} />
                            <Points Point={dwData[4].point12} />
                            <Points Point={dwData[4].point13} />
                            <Dayheading daysheading={dwData[4].day4heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[4].point14} />
                            <Points Point={dwData[4].point15} />
                            <Points Point={dwData[4].point16} />
                            <Dayheading daysheading={dwData[4].day13heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[4].point17} />
                            <Points Point={dwData[4].point18} />
                            <Points Point={dwData[4].point19} />
                            <Points Point={dwData[4].point20} />
                            <Dayheading daysheading={dwData[4].day14heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[4].point21} />
                            <Points Point={dwData[4].point22} />
                            <Dayheading daysheading={dwData[4].day15heading} />
                            <Sessionheading sessionheading={dwData[4].session2heading} />
                            <Points Point={dwData[4].point23} />
                            <Points Point={dwData[4].point24} />
                            <Points Point={dwData[4].point25} />

                            <Dayheading daysheading={dwData[4].day17heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[4].point26} />
                            <Points Point={dwData[4].point27} />
                            <Points Point={dwData[4].point28} />

                            <Dayheading daysheading={dwData[4].day19heading} />
                            <Sessionheading sessionheading={dwData[4].session3heading} />
                            
                            <Points Point={dwData[4].point29} />
                            <Points Point={dwData[4].point30} />
                            <Points Point={dwData[4].point31} />
                            <Points Point={dwData[4].point32} />

                            <Dayheading daysheading={dwData[4].day21heading} />
                            <div>&nbsp;</div>
                            <Points Point={dwData[4].point33} />
                            <Points Point={dwData[4].point34} />
                            <Points Point={dwData[4].point35} />
                            <Points Point={dwData[4].point36} />
                            <Points Point={dwData[4].point37} />
                            <Points Point={dwData[4].point38} />

                            <Dayheading daysheading={dwData[4].day23heading} />
                            <Dayheading daysheading={dwData[4].day24heading} />
                            <Points Point={dwData[4].point39} />
                            <Points Point={dwData[4].point40} />
                            <Points Point={dwData[4].point41} />
                            <Points Point={dwData[4].point42} />

                            <Topheading topHeading={dwData[4].tophading1}/>

                            <Sessionheading sessionheading={dwData[4].session4heading} />
                            <Points Point={dwData[4].point43} />
                            <Points Point={dwData[4].point44} />
                            <Points Point={dwData[4].point45} />
                            <Points Point={dwData[4].point46} />
                            <Points Point={dwData[4].point47} />
                            <Points Point={dwData[4].point48} />
                            
                            <Sessionheading sessionheading={dwData[4].session5heading} />
                            <Points Point={dwData[4].point49} />
                            <Points Point={dwData[4].point50} />
                            <Points Point={dwData[4].point51} />
                            <Points Point={dwData[4].point52} />
                   
                            <Advantagesheading />
                            <AdvantagesImages images1={dwData[4].img1} imagetitle1={dwData[4].title1}  images2={dwData[4].img2} imagetitle2={dwData[4].title2} images3={dwData[4].img3} imagetitle3={dwData[4].title3} images4={dwData[4].img4} imagetitle4={dwData[4].title4}  />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OneMonthWorkshopOnDesign;