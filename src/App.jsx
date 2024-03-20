import React from 'react';
import Cursor from './components/Basic components/Cursor';
import Navbar from './components/Basic components/Navbar';
import Herosection from './components/Basic components/Herosection';
import Navigationbox from './components/Basic components/Navigationbox';
import Footer from './components/Basic components/Footer';

const App = () => {
    return (
        <>
            <div className='container'>
               <Cursor/>
                <Navbar />
                <Herosection />
                <Navigationbox />
                <Footer/>
            </div>
        </>
    )
}

export default App;