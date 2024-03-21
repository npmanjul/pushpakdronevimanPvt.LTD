import React from 'react';
import Herosection from '../Basic components/Herosection';
import Navigationbox from '../Basic components/Navigationbox';
import Footer from '../Basic components/Footer';
import Blankspace from '../Basic components/Blankspace';

const Home = () => {
    return (
        <>
            <div className='container'>
                <Blankspace />
                <Herosection />
                <Navigationbox />
                <Footer />
            </div>
        </>
    )
}

export default Home