import React from 'react';
import Blankspace from '../Basic components/Blankspace';
import Footer from '../Basic components/Footer';
import pdata from '../Basic components/data/productdata';
import Heading from '../Basic components/Heading';
import Containerleft from '../Basic components/Containerleft';
import ContainerRight from '../Basic components/ContainerRight';

const Product = () => {
  return (
    <>
           <div className='container'>
                <Blankspace />
                <Heading heading={"Drone"} />
                <Containerleft img={pdata[0].imgsrc} headingtitle={pdata[0].title} textcontent={pdata[0].contant}  knowMore={'/agriculturepage'}/>
                <ContainerRight img={pdata[1].imgsrc} headingtitle={pdata[1].title} textcontent={pdata[1].contant}/>
                <Containerleft img={pdata[2].imgsrc} headingtitle={pdata[2].title} textcontent={pdata[2].contant}/>
                <ContainerRight img={pdata[3].imgsrc} headingtitle={pdata[3].title} textcontent={pdata[3].contant}/>
                <Heading heading={"3d printing"} />
                <Containerleft img={pdata[4].imgsrc} headingtitle={pdata[4].title} textcontent={pdata[4].contant}/>
                <ContainerRight img={pdata[5].imgsrc} headingtitle={pdata[5].title} textcontent={pdata[5].contant}/>
                <Containerleft img={pdata[6].imgsrc} headingtitle={pdata[6].title} textcontent={pdata[6].contant}/>
                <ContainerRight img={pdata[7].imgsrc} headingtitle={pdata[7].title} textcontent={pdata[7].contant}/>
                {/* <Containerleft img={pdata[8].imgsrc} headingtitle={pdata[8].title} textcontent={pdata[8].contant}/> */}
                {/* <Heading heading={"Internet Of Things (IoT)"} />
                <ContainerRight img={pdata[9].imgsrc} headingtitle={pdata[9].title} textcontent={pdata[9].contant}/>
                <Containerleft img={pdata[10].imgsrc} headingtitle={pdata[10].title} textcontent={pdata[10].contant}/>
                <ContainerRight img={pdata[11].imgsrc} headingtitle={pdata[11].title} textcontent={pdata[11].contant}/>
                <Containerleft img={pdata[12].imgsrc} headingtitle={pdata[12].title} textcontent={pdata[12].contant}/>
                <ContainerRight img={pdata[13].imgsrc} headingtitle={pdata[13].title} textcontent={pdata[13].contant}/> */}
                
                <Footer />
            </div>
    </>
  )
}

export default Product;