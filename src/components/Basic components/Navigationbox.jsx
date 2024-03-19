import React from "react";
import './navigationbox.css';
import Navibox from "./Navibox";
import trainingImage from './img/training_image.jpg';
import servicesImage from './img/service_image.png';
import productImage from './img/product_image.jpg';

const Navigationbox=()=>{
    return(
        <>
            <div className="nav-container">
            <Navibox image={trainingImage} title={"Training"}/>
            <Navibox image={servicesImage} title={"Services"}/>
            <Navibox image={productImage} title={"Product"}/>
            </div>
        </>
    )
}

export default Navigationbox;