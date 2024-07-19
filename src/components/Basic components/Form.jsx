import React, { useEffect } from 'react';
import './form.css';


const scriptURL = 'https://script.google.com/macros/s/AKfycbwHVBKwahGjQOPbUWiZUlx6Ekqp1rKIQqzQ18Qm0EAJ3bjyll3wPmlZPihSvBE91umZ/exec';

const Form = () => {

    var msg = document.getElementById("conform-msg");
    useEffect(() => {
        const form = document.forms['submit-to-google-sheet'];
        msg = document.getElementById("conform-msg");

        const submitForm = (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    console.log("ok");
                    alert("Submit Successfully");
                })
                .catch(error => console.error('Error!', error.message));
        };

        form.addEventListener('submit', submitForm);

        
        return () => {
            form.removeEventListener('submit', submitForm);
        };
    }, []);

    const showmsg=()=>{
        // msg.innerHTML = "Submit Succesfully !";

        setTimeout(function(){
            msg.innerHTML = "";
        }, 10);
    }

    return (
        <>
            <div className='contactus-container'>
                <div class="form">
                    {/* <div class="form-heading">
                        Connect With Us
                    </div> */}


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
                                    <input type="email" name="Email" placeholder="Enter your email address" />
                                </div>
                            </div>

                            <div class="phone-no">
                                <div class="phone-no-heading heading">
                                    Phone number
                                </div>
                                <div class="form-phone-no">
                                    <input type="number" name="PhoneNumber" placeholder="Enter your phone no." maxlength="10" required />
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
                                <button type="submit" onClick={ showmsg}>Submit</button>
                                <div id="conform-msg">&nbsp;</div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>

            {/* <div class="contact">
                <div class="contact-container">
                    <div class="contact-box icon-hover">
                        <img src={phoneImg} alt="" />
                        <span class="contactus-title">Call Me</span>
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={mailImg} alt="" />
                        <span class="contactus-title">Email</span>
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={whatsappImg} alt="" />
                        <span class="contactus-title">Whatsapp</span>
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={linkedImg} alt="" />
                        <span class="contactus-title">LinkedIn</span>
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={youtubeImg} alt="" />
                        <span class="contactus-title">Youtube</span>
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={instaImg} alt="" />
                        <span class="contactus-title">Instagram</span>
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={twitter} alt="" />
                        <span class="contactus-title">Twitter(X)</span>
                    </div>
                    <div class="contact-box icon-hover">
                        <img src={facebookimg} alt="" />
                        <span class="contactus-title">Facebook</span>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Form