import React from "react";
import './dropdown.css';

const Services_dropdown = () => {
    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Drone Services</div>
                    <div className="dropdown-subheading hov">
                        <details>
                            <summary>Agriculture Drone Application</summary>
                            <ul type="none" className="dropdown-subpart">
                                <li class="dropdown-subpart hov">Crop Spraying</li>
                                <li class="dropdown-subpart hov">Seeds</li>
                                <li class="dropdown-subpart hov">Fertilizers</li>
                            </ul>
                        </details>
                    </div>

                    <div className="dropdown-subheading hov">Mapping & Serveillance</div>
                    <div className="dropdown-subheading hov">Aerial Photography & Videography</div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading ">&nbsp;
                    </div>
                    <div className="dropdown-subheading hov">
                    <details>
                            <summary>Drone Testing</summary>
                            <ul type="none" className="dropdown-subpart">
                                <li class="dropdown-subpart hov">Battery Testing, ESC Testing</li>
                                <li class="dropdown-subpart hov">Diagnostic Assessment</li>
                                <li class="dropdown-subpart hov">Performance Testing</li>
                            </ul>
                        </details>
                    </div>
                    <div className="dropdown-subheading hov">
                    <details>
                            <summary>Drone Repair Service</summary>
                            <ul type="none" className="dropdown-subpart">
                                <li class="dropdown-subpart hov">Component Replacement</li>
                                <li class="dropdown-subpart hov">Software Update</li>
                                <li class="dropdown-subpart hov">Structural Repair</li>
                            </ul>
                        </details>
                    </div>
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