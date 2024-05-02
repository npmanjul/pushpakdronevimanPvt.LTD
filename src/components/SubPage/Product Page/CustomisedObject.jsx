import React from 'react';
import './shoppingPage.css';
import Blank from '../../Basic components/Blankspace';
import Heading from '../../Basic components/Heading';
import ShoppingCards from '../components/ShoppingCards';
import Footer from '../../Basic components/Footer'


const CustomisedObject = () => {
  return (
    <>
      <Blank />
      <Heading heading={"Customised Object"} />
      
          <div className='shopping-card-conatainer'>
            <ShoppingCards />
          </div>
          <Footer/>
    </>
  )
}

export default CustomisedObject;