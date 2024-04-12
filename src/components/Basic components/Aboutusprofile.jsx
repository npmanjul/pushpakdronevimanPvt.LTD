import React from 'react';
import './aboutusprofile.css';
import founderImage from './img/sumit sir.jpg';
import cofounderImage from './img/cofounder.jpeg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Aboutusprofile = () => {
  return (
    <>
      <div className='aboutus-profile-container'>
        <div className='profile-boxes'>
          <div className='profile-main-box'>
            <div className='profile-image'>
              <img src={founderImage} alt='sumit singh' />
            </div>
            <div className='profile-contant'>
              <div className='profile-heading'>
                Sumit Singh
                <div className='profile-heading-subtitle'>
                  Founder and CEO
                </div>
              </div>
              <div className='profile-description'>
                I have completed my B. Tech and M.Tech, and I am currently pursuing a Ph.D. at MMMUT Gorakhpur.Under my leadership, Pushpak Drone Viman has achieved significant milestones. I have had the privilege of showcasing the innovative applications of our drone technology to the Honourable Chief Minister, Shri Yogi Adityanath,and UP Governor, Anandiben Patel. This experience is a matter of pride for me, and it provides an opportunity to contribute further to our mission.
              </div>
              <div className='social-media-icons'>
              <div className='profile-socialmedialogos'>
                        <div className='circle'><YouTubeIcon /></div>
                        <div className='circle'><FacebookIcon /></div>
                        <div className='circle'><LinkedInIcon /></div>
                        <div className='circle'><InstagramIcon /></div>
                        <div className='circle'><XIcon /></div>
                    </div>
              </div>
            </div>
          </div>
          <div className='profile-main-box'>
            <div className='profile-image'>
              <img src={cofounderImage} alt='dharmendra singh'/>
            </div>
            <div className='profile-contant'>
              <div className='profile-heading'>
              Dharmendra Singh
                <div className='profile-heading-subtitle'>
                Co-Founder & CIO
                </div>
              </div>
              <div className='profile-description'>
                I have completed my B. Tech and M.Tech, and I am currently pursuing a Ph.D. at MMMUT Gorakhpur.Under my leadership, Pushpak Drone Viman has achieved significant milestones. I have had the privilege of showcasing the innovative applications of our drone technology to the Honourable Chief Minister, Shri Yogi Adityanath,and UP Governor, Anandiben Patel. This experience is a matter of pride for me, and it provides an opportunity to contribute further to our mission.
              </div>
              <div className='social-media-icons'>
              <div className='profile-socialmedialogos'>
                        <div className='circle'><YouTubeIcon /></div>
                        <div className='circle'><FacebookIcon /></div>
                        <div className='circle'><LinkedInIcon /></div>
                        <div className='circle'><InstagramIcon /></div>
                        <div className='circle'><XIcon /></div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutusprofile;