import React from "react";
import './nav.css';
import logo from './img/logo.png';
import Training_dropdown from './Training_dropdown';
import Services_dropdown from "./Services_dropdown";
import Product_dropdown from "./Product_dropdown";

const Navbar = () => {
    return (
        <>
            <div class="navbar">
                <div class="logo_section">
                    <img src={logo}/>
                </div>
                <div class="navigation">
                    <div class="home_section">Home</div>
                    <div class="dropdown_box">Training
                        <div class="dropdown_boxes">
                        <Training_dropdown/>
                        </div>
                    </div>
                    <div class="dropdown_box">Services
                        <div class="dropdown_boxes ">
                        <Services_dropdown/>
                        </div>
                    </div>
                    <div class="dropdown_box">Product
                        <div class="dropdown_boxes ">
                        <Product_dropdown/>
                        </div>
                    </div>
                    <div class="R&D_section ">R&D
                    </div>
                    <div class="about_us_section ">About Us
                    </div>
                </div>
                <div class="contact_section">
                    <button>Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;