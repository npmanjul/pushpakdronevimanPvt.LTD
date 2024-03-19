import React from "react";
import './nav.css';
import logo from './img/logo.png'

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

                        </div>
                    </div>
                    <div class="dropdown_box">Services
                        <div class="dropdown_boxes ">

                        </div>
                    </div>
                    <div class="dropdown_box">Product
                        <div class="dropdown_boxes ">

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