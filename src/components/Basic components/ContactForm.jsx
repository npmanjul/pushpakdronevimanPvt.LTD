import React from 'react';
import './contactform.css';
import formImg from '../Basic components/icon/contactus/formimg.jpg'
import Form from './Form';

const ContactForm = () => {
  return (
    <>
      <div className='contactform_main_box'>
        <div className='contactform_upper_container'>
        <img src={formImg}/>
        </div>
        
        <div className='contactform_container'>
        <Form/>
        </div>
      </div>

    </>
  )
}

export default ContactForm