import React from 'react';
import './container.css';
import { Link } from 'react-router-dom';

const Container = (props) => {
    function openWhatsApp() {
        // Specify the phone number and message (optional)
        var phoneNumber = '919369595897'; // Replace with your desired phone number
        var message = 'Hello Are your like this ? Know More about it..  '; // Replace with your desired message
  
        // Construct the WhatsApp URL
        var whatsappUrl = 'whatsapp://send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
  
        // Open the WhatsApp URL
        window.location.href = whatsappUrl;
      }
    return (
        <>
            <div className='main-container main-container-right'>
                <div className='image-box'>
                <img src={props.img} alt='image'/>
                </div>
                <div className='contant-box-right contant-box'>
                    <div className='contant-heading'>
                    {props.headingtitle}
                    </div>
                    <div className='text-contant'>
                    {props.textcontent} 
                    </div>

                    <div className='container-btn-right container-btn'>
                        <div className='btn btn1'>
                        <Link to={props.knowMore}><button>Know More..</button></Link>
                        </div>
                        <div className='btn btn2'>
                        <button onClick={openWhatsApp}>Enquiry</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Container