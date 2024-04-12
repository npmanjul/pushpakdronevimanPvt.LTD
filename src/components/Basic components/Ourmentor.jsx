import React from 'react';
import './ourmentor.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import sonisirImg from './img/Soni Sir.jpg'

const Ourmentor = () => {

    function ourmentorFunction() {
        var dots = document.getElementById("ourmentordots");
        var moreText = document.getElementById("ourmentormore");
        var btnText = document.getElementById("ourmentorBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
    return (
        <>
            <div className='aboutus-ourmentor-profile-container'>
                <div className='ourmentor-profile-boxes'>
                    <div className='ourmentor-profile-main-box'>
                        <div className='ourmentor-profile-image'>
                            <img src={sonisirImg} alt='dr.sk soni sir' />
                        </div>
                        <div className='ourmentor-profile-contant'>
                            <div className='ourmentor-profile-heading'>
                                Prof. Sanjay Kumar Soni
                                <div className='ourmentor-profile-heading-subtitle'>
                                    Chief Advisor
                                </div>
                            </div>
                            <div className='ourmentor-profile-description'>
                                <b>Dr. Sanjay Kumar Soni</b> is a distinguished Professor in the Electronics and Communication Engineering Department at Madan Mohan Malaviya University of Technology, Gorakhpur, holding a Ph.D. from IIT Kharagpur. His extensive academic background includes 43 publications in SCI-indexed journals and international conference presentations. Leading sponsored projects, such as the
                                 <b>"Development of IoT and Drone-based Agriculture Monitoring System,"</b> funded  the <b>Ministry of Electronics and Information Technology (MeiTY), Government of India, New Delhi</b>, emphasizeby<span id="ourmentordots">...</span><span id="ourmentormore"> skill development for socially deprived communities. Serving as Chief Investigator, Dr. Soni demonstrates to research and innovation. His advisory role in the Pushpak Drone Viman project and interest in motivational speaking further showcase his contributions to academia and technology's societal impact.</span>
                                <button onClick={ourmentorFunction} id="ourmentorBtn">Read more</button>
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

export default Ourmentor;