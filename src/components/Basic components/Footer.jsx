import React from 'react';
import './footer.css';
import footerlogoImage from './img/footer logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer=()=>{
return(
    <>
    {/* <div className='sep-line'></div> */}
        <div className='footer-container'>
        <div className='footer-top-box'>
            <div className='footer-logo'>
            <div className='footer-logo-img'><img src={footerlogoImage}/></div>
            <div className='logo-title'>Pushpak Drone Viman</div>
            </div>

            <div className='footer-col footer-col-1'>
            <div className='footer-heading'>Workshops</div>
            <div className='footer-text'>Workshop on Drone</div>
            <div className='footer-text'>Workshop on Design</div>
            <div className='footer-text'>Workshop on IoT</div>
            </div>

            <div className='footer-col footer-col-2'>
            <div className='footer-heading'>Drone Services</div>
            <div className='footer-text'>Agriculture Drone</div>
            <div className='footer-text'>Drone Testing</div>
            <div className='footer-text'>Drone Repair Services</div>
            <div className='footer-text'>Testing And Calibration</div>
            </div>

            <div className='footer-col footer-col-3'>
            <div className='footer-heading'>Products</div>
            <div className='footer-text'>Agriculture Drone</div>
            <div className='footer-text'>Mapping Drone</div>
            <div className='footer-text'>3D Printed Objects</div>
            <div className='footer-text'>Iot based Kits</div>
            <div className='footer-text'>Microcontroller</div>
            </div>
            
            <div className='footer-col footer-col-4'>
            <div className='footer-heading'>About Us</div>
            <div className='footer-heading'>Contact Us</div>
            <div className='footer-heading'>R&D</div>
            </div>
        </div>
        <div className='footer-middle-box'></div>
        <div className='footer-buttom-box'>
            <div className='socialmedialogos'>
            <div className='circle'><YouTubeIcon/></div>
            <div className='circle'><FacebookIcon/></div>
            <div className='circle'><LinkedInIcon/></div>
            <div className='circle'><InstagramIcon/></div>
            <div className='circle'><XIcon/></div>
            </div>
            <div className='copyright-text'>© 2024 Pushpak drome Viman Pvt. LTD, All Right Reserved</div>
        </div>
        </div>
    </>
)
}

export default Footer;
