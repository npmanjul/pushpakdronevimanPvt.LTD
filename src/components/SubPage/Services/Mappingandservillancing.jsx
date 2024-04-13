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
                        <Maincontainerimg imgsrc={sData[1].imgloc} />
                        <Subpageheading topheading={sData[1].heading} />
                        <div className='subpage-content'>
                            <Paragraph paratext="Mapping involves representing spatial information such as forests, roads, railway tracks, and water bodies. It's an ongoing process due to changes in weather and urban development. Historically, ground measurements were used, but now planes and helicopters capture diverse data, including temperature. However, aircraft are expensive and demand skilled operators. Mapping drones offer a cost-effective and user-friendly alternative. They autonomously capture high-quality images, ensuring efficient data collection. Utilizing UAV mapping software, drones follow pre-programmed routes, enabling accurate and swift mapping." />

                            <Paragraph paratext="Surveying, on the other hand, involves thoroughly examining an area to define its boundaries, characteristics, and potential. It includes methods like observation, measurement, research, and mapping. Surveys are commonly done to understand infrastructure, aid in urban development, inspect rail tracks, check solar panels, and support mining activities." />

                            <Advantagesheading />
                            <AdvantagesImages images1={sData[1].img1} images2={sData[1].img2} images3={sData[1].img3} images4={sData[1].img4} />


                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Mappingandservillancing