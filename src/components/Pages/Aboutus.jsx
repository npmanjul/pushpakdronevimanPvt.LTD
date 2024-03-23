import React from 'react';
import Blankspace from '../Basic components/Blankspace';
import Footer from '../Basic components/Footer';
import Aboutushero from '../Basic components/Aboutushero';
import Aboutusqoute from '../Basic components/Aboutusqoute';
import Aboutuscontainer from '../Basic components/Aboutuscontainer';
import Missiovisionboxs from '../Basic components/Missiovisionboxs';
import Objective from '../Basic components/Objective';

const Aboutus = () => {
  return (
    <>
           <div className='container'>
                <Blankspace />
                <Aboutushero/>
                <Aboutusqoute/>
                <Aboutuscontainer/>
                <Missiovisionboxs/>
                <Objective/>
                <Footer />
            </div>
    </>
  )
}

export default Aboutus;