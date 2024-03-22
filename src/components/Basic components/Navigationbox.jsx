import React from "react";
import './navigationbox.css';
import { NavLink } from 'react-router-dom';
import Navibox from "./Navibox";
import trainingImage from './img/training_image.jpg';
import servicesImage from './img/service_image.png';
import productImage from './img/product_image.jpg';

const Navigationbox=()=>{
    return(
        <>
            <div className="nav-container">
            <NavLink to='/training' className="link"><Navibox image={trainingImage} title={"Training"}/></NavLink>
            <NavLink to='/services' className="link"><Navibox image={servicesImage} title={"Services"}/></NavLink>
            <NavLink to='/product' className="link"><Navibox image={productImage} title={"Product"}/></NavLink>
            
            
            </div>
        </>
    )
}

export default Navigationbox;