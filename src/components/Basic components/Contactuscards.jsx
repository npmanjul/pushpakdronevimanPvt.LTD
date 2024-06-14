import React from 'react';
import './contactuscards.css';
import contactImg from '../Basic components/icon/contactus/contact-information.png';
import arrowImg from '../Basic components/icon/contactus/right-arrow (1).png';
import locationImg from '../Basic components/icon/contactus/location.png';
import workinghourImg from '../Basic components/icon/contactus/working-time.png';


const Contactuscards = () => {
    return (
        <>
            <div className='contactuscards-container'>
                <div className='contactuscards-box'>
                    <div className='contactuscards-box-topcontainer'>
                        <div className='contactuscards-box-topcontainer-txt'>Help Center</div>
                        <div className='contactuscards-box-topcontainer-img'>
                            <img src={arrowImg}/>
                        </div>
                    </div>

                    <div className='contactuscards-box-lowercontainer'>
                        <div className='contactuscards-box-lowercontainer-content'>
                            <div className='contactuscards-box-lowercontainer-content_top'>
                                <div className='contactuscards-box-lowercontainer-content-heading'>Get in Touch</div>
                                <div className='contactuscards-box-lowercontainer-content-txt'>9876543210</div>
                                <div className='contactuscards-box-lowercontainer-content-txt'>pushpakdrone12@gmail.com</div>
                            </div>
                            <div className='contactuscards-box-lowercontainer-content_lower'>
                                <img src={contactImg}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contactuscards-box'>
                    <div className='contactuscards-box-topcontainer'>
                        <div className='contactuscards-box-topcontainer-txt'>Track Locations </div>
                        <div className='contactuscards-box-topcontainer-img'>
                            <img src={arrowImg}/>
                        </div>
                    </div>

                    <div className='contactuscards-box-lowercontainer'>
                        <div className='contactuscards-box-lowercontainer-content'>
                            <div className='contactuscards-box-lowercontainer-content_top'>
                                <div className='contactuscards-box-lowercontainer-content-heading'>Main Office</div>
                                <div className='contactuscards-box-lowercontainer-content-address'>Jungle subhan Ali, Unaula, Gorakhpur, 273152(U.P.)</div>
                            </div>
                            <div className='contactuscards-box-lowercontainer-content_lower'>
                                <img src={locationImg}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contactuscards-box'>
                    <div className='contactuscards-box-topcontainer'>
                        <div className='contactuscards-box-topcontainer-txt'>Timing</div>
                        <div className='contactuscards-box-topcontainer-img'>
                            <img src={arrowImg}/>
                        </div>
                    </div>

                    <div className='contactuscards-box-lowercontainer'>
                        <div className='contactuscards-box-lowercontainer-content'>
                            <div className='contactuscards-box-lowercontainer-content_top'>
                                <div className='contactuscards-box-lowercontainer-content-heading'>Working Hours</div>
                                <div className='contactuscards-box-lowercontainer-content-txt'>Open <b>Monday</b> to <b>Saturday</b></div>
                                <div className='contactuscards-box-lowercontainer-content-txt'>From <b>9 AM</b> to <b>6 PM</b></div>
                            </div>
                            <div className='contactuscards-box-lowercontainer-content_lower'>
                                <img src={workinghourImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactuscards