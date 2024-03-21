import React from "react";
import './nav.css';
import {NavLink} from 'react-router-dom';
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
                    <div className="home_section">
                        <NavLink to='/' className="link">Home</NavLink>
                    </div>
                    <div className="dropdown_box">
                    <NavLink to='/training' className="link">Training</NavLink>
                        <div className="dropdown_boxes">
                        <Training_dropdown/>
                        </div>
                    </div>
                    <div className="dropdown_box">
                    <NavLink to='/services' className="link">Services</NavLink>
                        <div className="dropdown_boxes ">
                        <Services_dropdown/>
                        </div>
                    </div>
                    <div className="dropdown_box">
                    <NavLink to='/product' className="link">Product</NavLink>
                        <div className="dropdown_boxes ">
                        <Product_dropdown/>
                        </div>
                    </div>
                    <div className="R&D_section ">
                    <NavLink to='/rd' className="link">R&D</NavLink>
                    </div>
                    <div className="about_us_section " >
                    <NavLink to='/aboutus' className="link">About Us</NavLink>
                    </div>
                </div>
                <div className="contact_section">
                <NavLink to='/contactus' className="linkcontactus"> <button>Contact Us</button></NavLink>  
                </div>
                <div className='menu-section'>
                <button ><MenuIcon/></button>
                </div>
            </div>

        </>
    )
}

export default Navbar;