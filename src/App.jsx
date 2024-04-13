import React,{ useEffect }from 'react';
import {BrowserRouter,Route,Routes,useLocation} from 'react-router-dom';
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
import Agriculturedrone from './components/SubPage/Product Page/Agriculturedrone';
import Videographydrone from './components/SubPage/Product Page/Videographydrone';
import CustomisedObject from './components/SubPage/Product Page/CustomisedObject';
import Mappingdrone from './components/SubPage/Product Page/Mappingdrone';
import Lithographicprinting from './components/SubPage/Product Page/Lithographicprinting';
import Mappingandservillancing from './components/SubPage/Services/Mappingandservillancing';
import Aerialphotographyandvideography from './components/SubPage/Services/Aerialphotographyandvideography ';
import Droneassembly from './components/SubPage/Services/Droneassembly';


const App = () => {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page when the pathname changes
    }, [pathname]);
  
    return null;
  }

    return (
        <>
          <BrowserRouter>
          <Navbar/>
            <ScrollToTop />
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
                <Route path='/agriculturepage' element={<Agriculturedrone/>}/>
                <Route path='/videographydronepage' element={<Videographydrone/>}/>
                <Route path='/customisedobjectpage' element={<CustomisedObject/>}/>
                <Route path='/mappingdronepage' element={<Mappingdrone/>}/>
                <Route path='/lithographyprintingpage' element={<Lithographicprinting/>}/>
                <Route path='/mappingandservillancingpage' element={<Mappingandservillancing/>}/>
                <Route path='/aerialphotographyandvideographypage' element={<Aerialphotographyandvideography/>}/>
                <Route path='/droneassembly' element={<Droneassembly/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;