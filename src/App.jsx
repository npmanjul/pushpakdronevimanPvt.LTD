import React,{ useEffect }from 'react';
import {BrowserRouter,Route,Routes,useLocation} from 'react-router-dom';
import Home from './components/Pages/Home';
import Training from './components/Pages/Training';
import Services from './components/Pages/Services';
import Product from './components/Pages/Product';
import News_article from './components/Pages/News_article';
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
import AgricultureDroneAppliction from './components/SubPage/Services/AgricultureDroneAppliction';
import DroneTesting from './components/SubPage/Services/DroneTesting';
import Testingandcalibration from './components/SubPage/Services/Testingandcalibration';
import Dronerepairservice from './components/SubPage/Services/Dronerepairservice';
import DroneKits from './components/SubPage/Product Page/DroneKits';
import PrintedObject from './components/SubPage/Product Page/PrintedObject';
import EductionalTool from './components/SubPage/Product Page/EductionalTool';
import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/SignupPage';
import LogoutPage from './components/Pages/LogoutPage';
import AdminPage from './components/Pages/AdminPage';
import Admin_user from './components/Pages/Admin-user';
import Admin_contact from './components/Pages/Admin_contact';
import Adminmedia from './components/Pages/Admin-media';
import Admin_user_update from './components/Pages/Admin_user_update';
import Admin_addMedia from './components/Pages/Admin_addMedia';
import Admin_updateMedia from './components/Pages/Admin_updateMedia';
import { useAuth } from './Store/auth';
import Adminteam from './components/Pages/Admin-team';
import Admin_addTeamMember from './components/Pages/Admin_addTeamMember';
import Admin_updateTeamMember from './components/Pages/Admin_updateTeamMember';


const App = () => {
  const {fetchGalleryData}=useAuth();

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page when the pathname changes
    }, [pathname]);
    
    return null;
  }
  
  useEffect(() => {
    fetchGalleryData();
  }, []);
    return (
        <>
          <BrowserRouter>
          <Navbar/>
          {/* <Blankspace/> */}
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/training' element={<Training/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/news-article' element={<News_article/>}/>
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
                <Route path='/AgricultureDroneAppliction' element={<AgricultureDroneAppliction/>}/>
                <Route path='/Dronetesting' element={<DroneTesting/>}/>
                <Route path='/Dronerepairservicepage' element={<Dronerepairservice/>}/>
                <Route path='/Testingandcalibrationpage' element={<Testingandcalibration/>}/>
                <Route path='/DroneKitspage' element={<DroneKits/>}/>
                <Route path='/PrintedObjectpage' element={<PrintedObject/>}/>
                <Route path='/EductionalToolpage' element={<EductionalTool/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/logout' element={<LogoutPage/>}/>
                <Route path='/adminpage' element={<AdminPage/>}>
                    <Route path='user' element={<Admin_user/>}/>
                    <Route path='user-message' element={<Admin_contact/>}/>
                    <Route path='media' element={<Adminmedia/>}/>
                    <Route path='user-update/:id' element={<Admin_user_update/>}/>
                    <Route path='media/addmedia' element={<Admin_addMedia/>}/>
                    <Route path='update/:id' element={<Admin_updateMedia/>}/>
                    <Route path='ourteam' element={<Adminteam/>}/>
                    <Route path='addteammember' element={<Admin_addTeamMember/>}/>
                    <Route path='updateteammember/:id' element={<Admin_updateTeamMember/>}/>
                </Route>
                <Route path='*' element={<Error/>}/>
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;