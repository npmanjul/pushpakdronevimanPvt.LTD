import React, { useEffect, useState } from 'react';
import './Teamcard.css'
import LinkedIcon from "../Basic components/icon/linkedin-fill.png"
import emailIcon from "../Basic components/icon/mail-line.png"
import { useAuth } from '../../Store/auth';

const Teamcards = () => {
    const [profiles, setProfiles] = useState([]);
    const { teamMembers } = useAuth();

    useEffect(() => {
        setProfiles(teamMembers);
    }, []);


    return (
        <>
            <div className='boardmember-container'>
                <div className='boardmember-area'>
                    {profiles.map((profile) => (
                        <div className='boardmember-profile-cards'>
                            <div className='boardmember-img'>
                                <img src={profile.imageSrc} alt={profile.name} />
                            </div>
                            <div className='boardmember-detail'>
                                <div className='boardmember-name'>
                                    {profile.name}
                                </div>
                                <div className='boardmember-designation'>
                                    {profile.designation}
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