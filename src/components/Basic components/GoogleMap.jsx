import React from 'react';
import './googlemap.css'

const GoogleMap = () => {

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.40546335258!2d83.43055267488876!3d26.73143426785858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915ca3e2aa136b%3A0xc039bdf0211338a9!2sMadan%20Mohan%20Malaviya%20University%20Of%20Technology!5e0!3m2!1sen!2sin!4v1717479179191!5m2!1sen!2sin";

  return (
    <>
      <iframe
        src={mapSrc}
        style={{ border: 0 ,outline:0,borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className='iframe-box'
      ></iframe>
    </>
  );
};

export default GoogleMap;
