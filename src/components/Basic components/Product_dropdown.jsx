import React from "react";
import './dropdown.css';

const Product_dropdown = () => {
    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Drone</div>
                    <div className="dropdown-subheading hov">Agriculture Drone</div>
                    <div className="dropdown-subheading hov">Serveillance Drone</div>
                    <div className="dropdown-subheading hov">Videography Drone</div>
                    <div className="dropdown-subheading hov">Mapping Drone</div>
                    <div className="dropdown-subheading hov">Drone Components/Kit</div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading ">3D Printing
                    </div>
                    <div className="dropdown-subheading hov">Customised Objects</div>
                    <div  className="dropdown-subheading hov">Lithographic 3D Printing</div>
                    <div className="dropdown-subheading hov">3D Printed Objects</div>
                    <div className="dropdown-subheading hov">Educational Tool</div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading">Internet of Things (IoT)</div>
                    <div className="dropdown-subheading hov">Microcontroller</div>
                    <div className="dropdown-subheading hov">Microcomputer</div>
                    <div className="dropdown-subheading hov">Soldering Equipment</div>
                    <div className="dropdown-subheading hov">All Type Sensor</div>
                    <div className="dropdown-subheading hov">IoT Based Kit</div>
                </div>
            </div>
        </>
    )
}

export default Product_dropdown;