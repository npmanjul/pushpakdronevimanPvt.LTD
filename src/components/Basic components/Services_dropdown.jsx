import React from "react";
import './dropdown.css';

const Services_dropdown = () => {
    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Drone Services</div>
                    <div className="dropdown-subheading hov">Agriculture Drone Application</div>
                    <div className="dropdown-subheading hov">Mapping & Serveillance</div>
                    <div className="dropdown-subheading hov">Aerial Photography & Videography</div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading ">&nbsp;
                    </div>
                    <div className="dropdown-subheading hov">Drone Testing</div>
                    <div  className="dropdown-subheading hov">Drone Repair Service</div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading">&nbsp;</div>
                    <div className="dropdown-subheading hov">Drone Assembly</div>
                    <div className="dropdown-subheading hov">Testing and Calibration</div>
                </div>
            </div>
        </>
    )
}

export default Services_dropdown;