import React, { useEffect } from 'react';
import './form.css';
import instaImg from './icon/instagram-line.png';
import linkedImg from './icon/linkedin-fill.png';
import mailImg from './icon/mail-line.png';
import phoneImg from './icon/phone-fill.png';
import whatsappImg from './icon/whatsapp-line.png';
import youtubeImg from './icon/youtube-fill.png';
import twitter from './icon/twitter-x-line.png';
import facebookimg from './icon/facebook-fill.png'


const scriptURL = 'https://script.google.com/macros/s/AKfycbwHVBKwahGjQOPbUWiZUlx6Ekqp1rKIQqzQ18Qm0EAJ3bjyll3wPmlZPihSvBE91umZ/exec';

const Form = () => {
    useEffect(() => {
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById("conform-msg");

        const submitForm = (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Submit Succesfully !";

                    setTimeout(function(){
                        msg.innerHTML = "";
                    }, 5000);
                })
                .catch(error => console.error('Error!', error.message));
        };

        form.addEventListener('submit', submitForm);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            form.removeEventListener('submit', submitForm);
        };
    }, []);

    return (
        <>
            <div className='contactus-container'>
                <div class="form">
                    <div class="form-heading">
                        Connect With Us
                    </div>


                    <form name="submit-to-google-sheet">
                        <div class="form-box">
                            <div class="name">
                                <div class="form-name-heading heading">
                                    Your Name
                                </div>
                                <div class="form-name">
                                    <input type="text" name="Name" placeholder="Enter your name" required />
                                </div>
                            </div>

                            <div class="Email">
                                <div class="form-email-heading heading">
                                    Email Address
                                </div>
                                <div class="form-email">
                                    <input type="email" name="Email" placeholder="Eg.example@email.com" />
                                </div>
                            </div>

                            <div class="phone-no">
                                <div class="phone-no-heading heading">
                                    Phone number
                                </div>
                                <div class="form-phone-no">
                                    <input type="number" name="PhoneNumber" placeholder="Eg +1 8000 000000" maxlength="10" required />
                                </div>
                            </div>

                            <div class="name">
                                <div class="form-name-heading heading">
                                    Your Address
                                </div>
                                <div class="form-name">
                                    <input type="text" name="Address" placeholder="Enter your address" />
                                </div>
                            </div>

                            <div class="message">
                                <div class="message-heading heading">
                                    Message
                                </div>
                                <div class="form-message">
                                    <textarea name="Message" id="" cols="30" rows="5" placeholder="Please enter your comments..."></textarea>
                                </div>
                            </div>


                            <div class="submit-btn">
                                <button type="submit">Submit</button>
                                <div id="conform-msg">&nbsp;</div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>

            <div class="contact">
                <div class="contact-container">
                    <div class="contact-box icon-hover">
                        <img src={phoneImg} alt="" />
                        {/* <span class="contactus-title">Call Me</span> */}
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={mailImg} alt="" />
                        {/* <span class="contactus-title">Email</span> */}
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={whatsappImg} alt="" />
                        {/* <span class="contactus-title">Whatsapp</span> */}
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={linkedImg} alt="" />
                        {/* <span class="contactus-title">LinkedIn</span> */}
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={youtubeImg} alt="" />
                        {/* <span class="contactus-title">Youtube</span> */}
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={instaImg} alt="" />
                        {/* <span class="contactus-title">Instagram</span> */}
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={twitter} alt="" />
                        {/* <span class="contactus-title">Instagram</span> */}
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={facebookimg} alt="" />
                        {/* <span class="contactus-title">Instagram</span> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form