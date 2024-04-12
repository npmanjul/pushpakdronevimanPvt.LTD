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
                                Empowering the Future of Agriculture Through Innovative Drone Solutions
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
                                To be a leading provider of comprehensive drone services, focusing on education, testing and repair, as well as the design and assembly of cost-effective agricultural drones.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Missiovisionboxs