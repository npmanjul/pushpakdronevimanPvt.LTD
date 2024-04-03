import React, { useEffect } from 'react';
import './comingsoon.css';

const scriptURL = 'https://script.google.com/macros/s/AKfycbwHVBKwahGjQOPbUWiZUlx6Ekqp1rKIQqzQ18Qm0EAJ3bjyll3wPmlZPihSvBE91umZ/exec';


const ComingsoonHero = () => {

    useEffect(() => {
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById("conform-msg-subscription");

        const submitForm = (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Thank you for subscribing !!";

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
            <div className='comingsoon-container'>
                <div className='comingsoon-container-inner'>
                    <div className='comingsoon-top-heading'>
                       Internet Of Things(IoT)
                        <div className='comingsoon-top-sub-heading'> Coming Soon</div>
                    </div>

                    <div className='comingsoon-email-input'>
                    <div className='comingsoon-subcription-heading'>Subscribe for More Detail </div>
                        <form name="submit-to-google-sheet">
                            <input type='email' name='Email_IOT' placeholder='Enter your email'  className='comingsoon-email-inputfield' required/>
                            <button type='submit'>Send</button>
                        </form>
                        <div className='comingsoon-subcription-submit' id="conform-msg-subscription"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ComingsoonHero;