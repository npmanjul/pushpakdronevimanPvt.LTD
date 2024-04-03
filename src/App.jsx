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
import Oneweekworkshopondrone from './components/SubPage/Training Workshop/OneWeekWorkshopOnDrone';
import OneweekworkshoponDesign from './components/SubPage/Training Workshop/OneWeekWorkshopOnDesign';
import TwoWeekWorkshopondesign from './components/SubPage/Training Workshop/TwoWeekWorkshopondesign';
import OneMonthWorkshopOnDesign from './components/SubPage/Training Workshop/OneMonthWorkshopOnDesign';
import ComingSoonPage from './components/Basic components/ComingSoonPage';



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
                <Route path='/oneweekworkshopondrone' element={<Oneweekworkshopondrone/>}/>
                <Route path='/oneweekworkshopondesign' element={<OneweekworkshoponDesign/>}/>
                <Route path='/twoweekworkshopondesign' element={<TwoWeekWorkshopondesign/>}/>
                <Route path='/onemonthworkshopondesign' element={<OneMonthWorkshopOnDesign/>}/>
                <Route path='/comingsoonpage' element={<ComingSoonPage/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;