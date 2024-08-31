import React from 'react';
import './aboutus.css';
import Blankspace from '../Basic components/Blankspace';
import Footer from '../Basic components/Footer';
import Aboutushero from '../Basic components/Aboutushero';
import Aboutusqoute from '../Basic components/Aboutusqoute';
import Aboutuscontainer from '../Basic components/Aboutuscontainer';
import Missiovisionboxs from '../Basic components/Missiovisionboxs';
import Objective from '../Basic components/Objective';
import Aboutusprofile from '../Basic components/Aboutusprofile';
import Heading from '../Basic components/Heading';
import Ourmentor from '../Basic components/Ourmentor';
import Crousal from '../Basic components/Crousal';
import Teamcards from '../Basic components/Teamcards';

const Aboutus = () => {
  return (
    <>
      <div className='container'>
        <Blankspace />
        <Aboutushero />
        <div className='aboutus-container'>
          <Aboutusqoute />
          <Aboutuscontainer />
          <Missiovisionboxs />
          <Objective />
          <Aboutusprofile/>
          <Heading heading={"Our Mentor"} />
          <Ourmentor/>
          <Heading heading={"Our Team"} />
          {/* <Crousal/> */}
          <Teamcards/>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Aboutus;