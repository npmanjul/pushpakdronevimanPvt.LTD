import React from 'react';
import './missionvisionbox.css';
import visionImg from './icon/vision.png';
import missionImg from './icon/mission.png';


const Missiovisionboxs = () => {
    return (
        <>
            <div className='missionvision-container'>
                <div className='missionvision-boxes'>
                    <div className='mission-box'>
                        <div className='box-img'>
                            <img src={visionImg} alt='vision' />
                        </div>
                        <div className='box-container'>
                            <div className='box-heading'>
                                Vision
                            </div>
                            <div className='box-title'>
                            To provide expert education and training in Design, 3D printing, IoT, and drone tech to Indian institutions, with a primary emphasis on drone design, maintenance, and manufacturing.
                            </div>
                        </div>
                    </div>
                    <div className='vision-box'>
                        <div className='box-img'>
                            <img src={missionImg} alt='mission' />
                        </div>
                        <div className='box-container'>
                            <div className='box-heading'>
                                Mission
                            </div>
                            <div className='box-title'>
                            To be a leading provider of comprehensive education, training, and drone technology, with a primary focus on drone design, testing, repair, and cost-effective assembly.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Missiovisionboxs