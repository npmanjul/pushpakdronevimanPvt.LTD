import React from "react";
import './nav.css';
import logo from './img/footer logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import Training_dropdown from './Training_dropdown';
import Services_dropdown from "./Services_dropdown";
import Product_dropdown from "./Product_dropdown";

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="logo_section">
                    <img src={logo}/>
                </div>
                <div className="navigation">
                    <div className="home_section">Home</div>
                    <div className="dropdown_box">Training
                        <div className="dropdown_boxes">
                        <Training_dropdown/>
                        </div>
                    </div>
                    <div className="dropdown_box">Services
                        <div className="dropdown_boxes ">
                        <Services_dropdown/>
                        </div>
                    </div>
                    <div className="dropdown_box">Product
                        <div className="dropdown_boxes ">
                        <Product_dropdown/>
                        </div>
                    </div>
                    <div className="R&D_section ">R&D
                    </div>
                    <div className="about_us_section ">About Us
                    </div>
                </div>
                <div className="contact_section">
                    <button>Contact Us</button>  
                </div>
                <div className='menu-section'>
                <button ><MenuIcon/></button>
                </div>
            </div>

        </>
    )
}

export default Navbar;