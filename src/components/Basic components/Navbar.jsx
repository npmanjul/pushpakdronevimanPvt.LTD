import React from "react";
import './nav.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './img/footer logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import Training_dropdown from './Training_dropdown';
import Services_dropdown from "./Services_dropdown";
import Product_dropdown from "./Product_dropdown";
import Marque from "./Marque";

const Navbar = () => {

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
        setTimeout(() => {
            document.getElementById("menu_line").style.display = "none";
        }, 300)

    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("menu_line").style.display = "block";
        console.log("ok")
    }

    return (
        <>
            <div className="navbar-container" >
            {/* <Marque/> */}
                <div  className="navbar">
                    <div className="logo_section">
                        <Link to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="navigation">
                        <div className="home_section">
                            <NavLink to='/' className="link">Home</NavLink>
                        </div>
                        <div className="dropdown_box">
                            <NavLink to='/training' className="link">Training</NavLink>
                            <div className="dropdown_boxes">
                                <Training_dropdown />
                            </div>
                        </div>
                        <div className="dropdown_box">
                            <NavLink to='/services' className="link">Services</NavLink>
                            <div className="dropdown_boxes ">
                                <Services_dropdown />
                            </div>
                        </div>
                        <div className="dropdown_box">
                            <NavLink to='/product' className="link">Product</NavLink>
                            <div className="dropdown_boxes ">
                                <Product_dropdown />
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
                        <button onClick={openNav} id="menu_line" ><MenuIcon /></button>
                    </div>
                </div>
            </div>

            <div class="Curtain_Menu">

                <div id="myNav" class="overlay">

                    <div className="menu-top">
                        <img src={logo} alt="logo" />
                    </div>
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

                    <div class="overlay-content">
                        <NavLink to='/' className="link" onClick={closeNav}>Home</NavLink>
                        <NavLink to='/training' className="link" onClick={closeNav}>Training</NavLink>
                        <NavLink to='/services' className="link" onClick={closeNav}>Services</NavLink>
                        <NavLink to='/product' className="link" onClick={closeNav}>Product</NavLink>
                        <NavLink to='/rd' className="link" onClick={closeNav}>R&D</NavLink>
                        <NavLink to='/aboutus' className="link" onClick={closeNav}>About Us</NavLink>
                        <div className="contact_section-menu">
                            <NavLink to='/contactus' className="linkcontactus" onClick={closeNav}> <button>Contact Us</button></NavLink>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar;