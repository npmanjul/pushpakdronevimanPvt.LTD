import React from "react";
import './dropdown.css';
import { Link, NavLink }from 'react-router-dom';

const Training_dropdown = () => {
    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Drone</div>
                    <div ></div>
                    <NavLink to='/threedayworkshopondrone' className="dropdown-subheading hov">3-Day Workshop</NavLink>
                    <NavLink to='/oneweekworkshopondrone' className="dropdown-subheading hov">1-Week Workshop</NavLink>
                    <div className="dropdown-subheading hov"></div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Design & 3D Printing
                        <div className="dropdown-subheading-title">(Auto CAD/Solidworks / Fusion 360 /Ansys)</div>
                    </div>
                    <NavLink to='/oneweekworkshopondesign' className="dropdown-subheading hov">1-Week Workshop</NavLink>
                    <NavLink to='/twoweekworkshopondesign' className="dropdown-subheading hov">2-Week Workshop</NavLink>
                    <NavLink to='/onemonthworkshopondesign' className="dropdown-subheading hov">1-Month Internship</NavLink>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading">Internet of Things (IoT)</div>
                    <Link to='/comingsoonpage' className="dropdown-subheading hov">3-Day Workshop</Link>
                    <Link to='/comingsoonpage' className="dropdown-subheading hov">1-Week Workshop</Link>
                </div>
            </div>
        </>
    )
}

export default Training_dropdown;