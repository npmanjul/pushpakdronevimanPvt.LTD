import React from "react";
import './dropdown.css';
import { NavLink,Link } from "react-router-dom";

const Product_dropdown = () => {
    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-col">
                    <div className="dropdown-heading ">Drone</div>
                    <div className="dropdown-subheading hov"><NavLink to='/agriculturepage' className="dropdown-subheading hov">Agriculture Drone</NavLink></div>
                    {/* <div className="dropdown-subheading hov"><NavLink to='/videographydronepage' className="dropdown-subheading hov">Serveillance Drone</NavLink></div> */}
                    <div className="dropdown-subheading hov"><NavLink to='/videographydronepage' className="dropdown-subheading hov">Videography Drone</NavLink></div>
                    <div className="dropdown-subheading hov"><NavLink to='/mappingdronepage' className="dropdown-subheading hov">Mapping Drone</NavLink></div>
                    <div className="dropdown-subheading hov"><NavLink to='/DroneKitspage' className="dropdown-subheading hov">Drone Components/Kit</NavLink></div>
                    
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading ">3D Printing
                    </div>
                    <div className="dropdown-subheading hov"><NavLink to='/customisedobjectpage' className="dropdown-subheading hov">Customised Objects</NavLink></div>
                    <div className="dropdown-subheading hov"><NavLink to='/lithographyprintingpage' className="dropdown-subheading hov">Lithographic 3D Printing</NavLink></div>
                    <div className="dropdown-subheading hov"><NavLink to='/PrintedObjectpage' className="dropdown-subheading hov">3D Printed Objects</NavLink></div>
                    <div className="dropdown-subheading hov"><NavLink to='/EductionalToolpage' className="dropdown-subheading hov">Educational Tool</NavLink></div>
                </div>
                <div className="dropdown-col">
                    <div className="dropdown-heading">Internet of Things (IoT)</div>
                    <div className="dropdown-subheading hov">
                        <details>
                            <summary><Link to='/comingsoonpage' className="dropdown-subheading hov">Microcontroller</Link></summary>
                            <ul type="none" className="dropdown-subpart">
                                <li class="dropdown-subpart hov"><Link to='/comingsoonpage' className="dropdown-subheading hov">Arduino UNO</Link></li>
                                <li class="dropdown-subpart hov"><Link to='/comingsoonpage' className="dropdown-subheading hov">Node MCU</Link></li>
                            </ul>
                        </details>
                    </div>
                    <div className="dropdown-subheading hov">
                    <details>
                            <summary><Link to='/comingsoonpage' className="dropdown-subheading hov">Microcomputer</Link></summary>
                            <ul type="none" className="dropdown-subpart">
                                <li class="dropdown-subpart hov"><Link to='/comingsoonpage' className="dropdown-subheading hov">Raspberry pi</Link></li>
                                <li class="dropdown-subpart hov"><Link to='/comingsoonpage' className="dropdown-subheading hov">Nvidia Jestson Nano</Link></li>
                            </ul>
                        </details>
                    </div>
                    <div className="dropdown-subheading hov"><Link to='/comingsoonpage' className="dropdown-subheading hov">Soldering Equent</Link></div>
                    <div className="dropdown-subheading hov"><Link to='/comingsoonpage' className="dropdown-subheading hov">All Type Sens</Link></div>
                    <div className="dropdown-subheading hov"><Link to='/comingsoonpage' className="dropdown-subheading hov">IoT Based Kit</Link></div>
                </div>
            </div>
        </>
    )
}

export default Product_dropdown;