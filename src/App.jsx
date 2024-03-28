import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import Training from './components/Pages/Training';
import Services from './components/Pages/Services';
import Product from './components/Pages/Product';
import R_D from './components/Pages/R_D';
import Aboutus from './components/Pages/Aboutus';
import Contactus from './components/Pages/Contactus';
import Navbar from './components/Basic components/Navbar';
import Error from './components/Basic components/Error';
import Threedayworkshopondrone from './components/SubPage/Training Workshop/ThreeDayWorkshopOnDrone'



const App = () => {
    return (
        <>
          <BrowserRouter>
          <Navbar/>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/training' element={<Training/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/rd' element={<R_D/>}/>
                <Route path='/aboutus' element={<Aboutus/>}/>
                <Route path='/contactus' element={<Contactus/>}/>
                <Route path='/threedayworkshopondrone' element={<Threedayworkshopondrone/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;