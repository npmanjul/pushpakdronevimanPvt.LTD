import React, { useState } from 'react';
import './container.css';
import { Link } from 'react-router-dom';


const Container = (props) => {

    // const [whatsappmsg ,setwhatsappmsg]=useState("");
    // setwhatsappmsg=props.custom_msg;

    function openWhatsApp(cust_msg) {
        
        var phoneNumber = '919369595897'; 
        var message = 'Hello are your like this drone? Know More about it..  '; // Replace with your desired message

        // var message =cust_msg;
  
        // Construct the WhatsApp URL
        var whatsappUrl = 'whatsapp://send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
  
        // Open the WhatsApp URL
        window.location.href = whatsappUrl;
      }
    return (
        <>
            <div className='main-container main-container-left'>
                <div className='image-box'>
                <img src={props.img} alt='image'/>
                </div>
                <div className='contant-box-left contant-box'>
                    <div className='contant-heading'>
                    {props.headingtitle}
                    </div>
                    <div className='text-contant'>
                    {props.textcontent}
                    </div>

                    <div className='container-btn-left container-btn'>
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

export default Container;