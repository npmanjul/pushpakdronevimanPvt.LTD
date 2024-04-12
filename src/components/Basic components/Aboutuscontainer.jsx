import React from 'react';
import './aboutuscontainer.css';
import companyImage from './img/companyheading.jpg';

const Aboutuscontainer = () => {
    return (
        <>
            <div className='headline-container'>
                <div className='headline-subcontainer'>
                <div className='image-section'>
                <img src={companyImage} alt='img'/>
                </div>
                <div className='headline-content-section'>
                <div className='headline-heading'>India’s Most Dependable Drone Startup</div>
                <div className="headline-text">
                <ul >
                          <li>Provide expert-level education and training to educational institutions in India.
                          </li>

                          <li>Focus on drone design, maintenance, and repair as key components of the training
                            program.
                          </li>

                          <li>Conduct testing, repair, and maintenance services to ensure practical application
                            of
                            skills
                          </li>


                          <li>Specialize in the design and assembly of cost-effective drones for
                            agriculture,videography,andsurveillance applications, contributing to India's
                            technological progress in these sectors.
                          </li>
                        </ul>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Aboutuscontainer