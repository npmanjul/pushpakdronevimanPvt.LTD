import React from 'react';
import Blankspace from '../Basic components/Blankspace';
import Footer from '../Basic components/Footer';
import sdata from '../Basic components/data/Servicesdata';
import Heading from '../Basic components/Heading';
import Containerleft from '../Basic components/Containerleft';
import ContainerRight from '../Basic components/ContainerRight';

const Services = () => {
  return (
    <>
           <div className='container'>
                <Blankspace />
                <Heading heading={"Drone"} />
                <Containerleft img={sdata[0].imgsrc} headingtitle={sdata[0].title} textcontent={sdata[0].contant} knowMore={'/AgricultureDroneAppliction'}/>
                <ContainerRight img={sdata[1].imgsrc} headingtitle={sdata[1].title} textcontent={sdata[1].contant} knowMore={'/mappingandservillancingpage'}/>
                <Containerleft img={sdata[2].imgsrc} headingtitle={sdata[2].title} textcontent={sdata[2].contant}  knowMore={'/aerialphotographyandvideographypage'}/>
                <ContainerRight img={sdata[3].imgsrc} headingtitle={sdata[3].title} textcontent={sdata[3].contant} knowMore={'/droneassembly'}/>
                <Containerleft img={sdata[4].imgsrc} headingtitle={sdata[4].title} textcontent={sdata[4].contant} knowMore={'/Dronetesting'}/>
                <ContainerRight img={sdata[5].imgsrc} headingtitle={sdata[5].title} textcontent={sdata[5].contant} knowMore={'/Dronerepairservicepage'}/>
                <Containerleft img={sdata[6].imgsrc} headingtitle={sdata[6].title} textcontent={sdata[6].contant} knowMore={'/Testingandcalibrationpage'}/>  
                <Footer />
            </div>
            
    </>
  )
}

export default Services;