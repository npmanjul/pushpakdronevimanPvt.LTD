import React from 'react';
import './Servicespage.css';
import Blankspace from '../../Basic components/Blankspace';
import Maincontainerimg from '../components/Maincontainerimg';
import sData from '../subpage data/Services Data/Servicesdata';
import Subpageheading from '../components/Subpageheading';
import Paragraph from '../components/Paragraph';
import Points from '../components/Points';
import Heading from '../components/Heading';
import AdvantagesImages from '../components/AdvantagesImages';
import Advantagesheading from '../components/Advantagesheading';
import Footer from '../../Basic components/Footer';

const AgricultureDroneAppliction = () => {
  return (
    <>
         <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={sData[0].imgloc} />
                        <Subpageheading topheading={sData[0].heading} />
                        <div className='subpage-content'>
                            <Paragraph paratext="By incorporating agriculture drones into Pushpak Drone, we aim to provide innovative solutions for modern farming, emphasizing precision farming, efficient pesticide and fertilizer application, as well as time and cost savings. Our commitment extends to promoting sustainability and empowering farmers and rural communities, enabling them to make data-driven decisions while fostering economic growth and environmental stewardship Agriculture Drone." />

                            <Paragraph paratext="Agriculture drones in modern farming. It effectively highlights the empowerment of farmers through data-driven decision-making and the opportunity for younger individuals to earn income while contributing to the agricultural sector. Additionally, the mention of avoiding chemical overuse and emphasizing time and cost savings resonates well with sustainability and efficiency goals.By incorporating this technology into Pushpak Drone, you're positioning your company as a provider of innovative solutions that address the needs of farmers and rural communities. This statement effectively communicates your commitment to leveraging technology for the betterment of agriculture and the livelihoods of those involved" />

                            <Paragraph paratext="Leading the way in agricultural precision, I offer assembled and tested spraying drones through my startup at competitive rates. Delivering optimal solutions to ensure your fields thrive,plus enjoy a complimentary 6-month service for sustained success ." />

                            <Points Point={sData[0].point1} />
                            <Points Point={sData[0].point2} />
                            <Points Point={sData[0].point3} />
                            <Points Point={sData[0].point4} />
                            <Points Point={sData[0].point5} />


                            <Heading headingtext="Application:" />

                            <Points Point={sData[0].point6} />
                            <Points Point={sData[0].point7} />
                            <Points Point={sData[0].point8} />
                            <Points Point={sData[0].point9} />
                            <Points Point={sData[0].point10} />
                            <Points Point={sData[0].point11} />

                            {/* <Advantagesheading /> */}
                            <AdvantagesImages images1={sData[0].img1} images2={sData[0].img2} images3={sData[0].img3} images4={sData[0].img4} />


                        </div>
                    </div>
                </div>

            </div>

            <Footer />
    </>
  )
}

export default AgricultureDroneAppliction