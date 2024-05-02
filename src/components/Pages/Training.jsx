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
                <Containerleft img={tdata[0].imgsrc} headingtitle={tdata[0].title} textcontent={tdata[0].contant} custom_msg={'are you like this training'}  knowMore={'/threedayworkshopondrone'}/>
                <ContainerRight img={tdata[1].imgsrc} headingtitle={tdata[1].title} textcontent={tdata[1].contant} knowMore={'/oneweekworkshopondrone'}/>
                <Heading heading={"Design & 3D Printing"} />
                <Containerleft img={tdata[2].imgsrc} headingtitle={tdata[2].title} textcontent={tdata[2].contant} knowMore={'/oneweekworkshopondesign'}/>
                <ContainerRight img={tdata[3].imgsrc} headingtitle={tdata[3].title} textcontent={tdata[3].contant} knowMore={'/twoweekworkshopondesign'} />
                <Containerleft img={tdata[4].imgsrc} headingtitle={tdata[4].title} textcontent={tdata[4].contant} knowMore={'/onemonthworkshopondesign'}/>
                {/* <Heading heading={"Internet Of Things (IoT)"} />
                <ContainerRight img={tdata[5].imgsrc} headingtitle={tdata[5].title} textcontent={tdata[5].contant}/>
                <Containerleft img={tdata[6].imgsrc} headingtitle={tdata[6].title} textcontent={tdata[6].contant}/> */}
                <Footer />
            </div>
    </>
  )
}

export default Training