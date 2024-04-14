import React from "react";
import './dropdown.css';
import { NavLink,Link } from "react-router-dom";

const Services_dropdown = () => {
    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Drone Services</div>
                    <div className="dropdown-subheading hov">
                        <details>
                        
                            <summary><NavLink to='/AgricultureDroneAppliction' className="dropdown-subheading hov">Agriculture Drone Application</NavLink></summary>
                            <ul type="none" className="dropdown-subpart">
                                <li class="dropdown-subpart hov"><Link to='/AgricultureDroneAppliction' className="dropdown-subheading hov">Crop Spraying</Link></li>
                                <li class="dropdown-subpart hov">
                                <Link to='/AgricultureDroneAppliction' className="dropdown-subheading hov">Seeds</Link></li>
                                <li class="dropdown-subpart hov">
                                <Link to='/AgricultureDroneAppliction' className="dropdown-subheading hov">Fertilizers</Link></li>
                            </ul>
                        </details>
                    </div>

                    <div className="dropdown-subheading hov">
                    <NavLink to='/mappingandservillancingpage' className="dropdown-subheading hov">Mapping & Serveillance</NavLink></div>
                    <div className="dropdown-subheading hov">
                    <NavLink to='/aerialphotographyandvideographypage' className="dropdown-subheading hov">Aerial Photography & Videography</NavLink></div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading ">&nbsp;
                    </div>
                    <div className="dropdown-subheading hov">
                    <details>
                            <summary><NavLink to='/Dronetesting' className="dropdown-subheading hov">Drone Testing</NavLink></summary>
                            <ul type="none" className="dropdown-subpart">
                                <li class="dropdown-subpart hov"><Link to='/Dronetesting' className="dropdown-subheading hov">Battery Testing, ESC Testing</Link></li>
                                <li class="dropdown-subpart hov"><Link to='/Dronetesting' className="dropdown-subheading hov">Diagnostic Assessment</Link></li>
                                <li class="dropdown-subpart hov"><Link to='/Dronetesting' className="dropdown-subheading hov">Performance Testing</Link></li>
                            </ul>
                        </details>
                    </div>
                    <div className="dropdown-subheading hov">
                    <details>
                            <summary><NavLink to='/Dronerepairservicepage' className="dropdown-subheading hov">Drone Repair Service</NavLink></summary>
                            <ul type="none" className="dropdown-subpart">
                                <li class="dropdown-subpart hov"><Link to='/Dronerepairservicepage' className="dropdown-subheading hov">Component Replacement</Link></li>
                                <li class="dropdown-subpart hov"><Link to='/Dronerepairservicepage' className="dropdown-subheading hov">Software Update</Link></li>
                                <li class="dropdown-subpart hov"><Link to='/Dronerepairservicepage' className="dropdown-subheading hov">Structural Repair</Link></li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading">&nbsp;</div>
                    <div className="dropdown-subheading hov"><NavLink to='/droneassembly' className="dropdown-subheading hov">Drone Assembly</NavLink></div>
                    <div className="dropdown-subheading hov"><NavLink to='/Testingandcalibrationpage' className="dropdown-subheading hov">Testing and Calibration</NavLink></div>
                </div>
            </div>
        </>
    )
}

export default Services_dropdown;