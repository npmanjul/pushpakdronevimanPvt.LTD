import React from 'react';
import Blankspace from '../Basic components/Blankspace';
import Footer from '../Basic components/Footer';
import Aboutushero from '../Basic components/Aboutushero';
import Aboutusqoute from '../Basic components/Aboutusqoute';
import Aboutuscontainer from '../Basic components/Aboutuscontainer';

const Aboutus = () => {
  return (
    <>
           <div className='container'>
                <Blankspace />
                <Aboutushero/>
                <Aboutusqoute/>
                <Aboutuscontainer/>
                
                <Footer />
            </div>
    </>
  )
}

export default Aboutus;