import React from "react";
import './dropdown.css';

const Training_dropdown = () => {
    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Drone</div>
                    <div className="dropdown-subheading hov">3-Day Workshop</div>
                    <div className="dropdown-subheading hov">1-Week Workshop</div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Design & 3D Printing
                        <div className="dropdown-subheading-title">(Auto CAD/Solidworks / Fusion 360 /Ansys)</div>
                    </div>
                    <div className="dropdown-subheading hov">1-Week Workshop</div>
                    <div  className="dropdown-subheading hov">2-Week Workshop</div>
                    <div className="dropdown-subheading hov">1-Month Internship</div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading">Internet of Things (IoT)</div>
                    <div className="dropdown-subheading hov">3-Day Workshop</div>
                    <div className="dropdown-subheading hov">1-Week Workshop</div>
                </div>
            </div>
        </>
    )
}

export default Training_dropdown;