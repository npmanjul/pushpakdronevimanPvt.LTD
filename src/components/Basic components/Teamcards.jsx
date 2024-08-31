import React from 'react';
import './Teamcard.css'
// import img from '../../Basic components/img/shrivilas_mishra.jpg'
import profiles from '../Basic components/data/Crousaldata'
import LinkedIcon from "../Basic components/icon/linkedin-fill.png"
import emailIcon from "../Basic components/icon/mail-line.png"

const Teamcards = () => {
    return (
        <>
            <div className='boardmember-container'>
                <div className='boardmember-area'>
                    {profiles.map((profile) => (
                        <div className='boardmember-profile-cards'>
                            <div className='boardmember-img'>
                                <img src={profile.imgsrc} alt={profile.name} />
                            </div>
                            <div className='boardmember-detail'>
                                <div className='boardmember-name'>
                                    {profile.name}
                                </div>
                                <div className='boardmember-designation'>
                                    {profile.domin}
                                </div>
                                <div className='boardmember-socialmedia'>
                                    <a href={profile.linkedIn} target='_blank'>
                                        <img src={LinkedIcon} alt='linkedIn' />
                                    </a>
                                    <a href={`mailto:${profile.email}?subject=Support%20Request&body=Hello,%20I%20need%20help%20with...`} class="email-button">
                                        <img src={emailIcon} alt='email' />
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Teamcards