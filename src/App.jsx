import React from 'react';
import Navbar from './components/Basic components/Navbar';
import Herosection from './components/Basic components/Herosection';
import Navigationbox from './components/Basic components/Navigationbox';

const App = () => {
    return (
        <>
            <div className='container'>
                <Navbar />
                <Herosection/>
                <Navigationbox/>
            </div>
        </>
    )
}

export default App;