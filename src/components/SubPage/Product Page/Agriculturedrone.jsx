import React from 'react';
import './productpage.css';
import Blankspace from '../../Basic components/Blankspace';
import Maincontainerimg from '../components/Maincontainerimg';
import pData from '../subpage data/Product Data/Productdata';
import Subpageheading from '../components/Subpageheading';
import Paragraph from '../components/Paragraph';
import Points from '../components/Points';

const Agriculturedrone = () => {
    return (
        <>
            <Blankspace />
            <div className='subpage-main-container'>
                <div className='upper-border'>
                    <div className='lower-border'>
                        <Maincontainerimg imgsrc={pData[0].imgloc} />
                        <Subpageheading topheading={pData[0].heading} />
                        <div className='subpage-content'>
                            <Paragraph />
                            <Points Point={pData[0].point1} />
                            <Points Point={pData[0].point2} />
                            <Points Point={pData[0].point3} />
                            <Points Point={pData[0].point4} />
                            <Points Point={pData[0].point5} />


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Agriculturedrone;