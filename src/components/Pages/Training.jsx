import React from 'react';
import Blankspace from '../Basic components/Blankspace';
import Footer from '../Basic components/Footer';
import Heading from '../Basic components/Heading';
import Containerleft from '../Basic components/Containerleft';
import ContainerRight from '../Basic components/ContainerRight';
import tdata from '../Basic components/data/trainingdata';

const Training = () => {
  return (
    <>
           <div className='container'>
                <Blankspace />
                <Heading heading={"Drone"} />
                <Containerleft img={tdata[0].imgsrc} headingtitle={tdata[0].title} textcontent={tdata[0].contant}/>
                <ContainerRight img={tdata[1].imgsrc} headingtitle={tdata[1].title} textcontent={tdata[1].contant}/>
                <Heading heading={"Design & 3D Printing"} />

                <Footer />
            </div>
    </>
  )
}

export default Training