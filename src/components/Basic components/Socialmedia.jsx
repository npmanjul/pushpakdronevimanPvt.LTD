import React from 'react';
import './socialmedia.css';
import instaImg from './icon/instagram-line.png';
import linkedImg from './icon/linkedin-fill.png';
import mailImg from './icon/mail-line.png';
import phoneImg from './icon/phone-fill.png';
import whatsappImg from './icon/whatsapp-line.png';
import youtubeImg from './icon/youtube-fill.png';
import twitter from './icon/twitter-x-line.png';
import facebookimg from './icon/facebook-fill.png'


const Socialmedia = () => {
    return (
        <>
            <div className='social-media-form-container'>
            
            <abbr title="Instagram">
                <div className='social-media-form-icons'>
                    <img src={instaImg} alt='icon' />
                </div>
            </abbr>

                <abbr title="LinkedIn">
                <div className='social-media-form-icons'>
                    <img src={linkedImg} alt='icon'/>
                </div>
                </abbr>

                <abbr title="Email">
                <div className='social-media-form-icons'>
                    <img src={mailImg} alt='icon'/>
                </div>
                </abbr>
               

                <abbr title="Call Us">
                <div className='social-media-form-icons'>
                    <img src={phoneImg} alt='icon'/>
                </div>
                </abbr>


                <abbr title="Whatsapp">
                <div className='social-media-form-icons'>
                    <img src={whatsappImg} alt='icon'/>
                </div>
                </abbr>
                

                <abbr title="YouTube">
                <div className='social-media-form-icons'>
                    <img src={youtubeImg}alt='icon' />
                </div>
                </abbr>


                <abbr title="Twitter(X)">
                    <div className='social-media-form-icons'>
                        <img src={twitter} alt='icon' />
                    </div>
                </abbr>



                <abbr title="Facebook">
                    <div className='social-media-form-icons'>
                        <img src={facebookimg} alt='icon' />
                    </div>
                </abbr>
            </div>
        </>
    )
}

export default Socialmedia