import React from "react";
import "./contact.css";
import Blankspace from "../Basic components/Blankspace";
import Footer from "../Basic components/Footer";
import Form from "../Basic components/Form";
import Socialmedia from "../Basic components/Socialmedia";
import Contacthero from "../Basic components/Contacthero";
import Contactuscards from "../Basic components/Contactuscards";
import GoogleMap from "../Basic components/GoogleMap";
import ContactForm from "../Basic components/ContactForm";

const Contactus = () => {
  return (
    <>
      <Blankspace />
      {/* <Form/> */}
      {/* <Socialmedia/> */}
      <Contacthero />
      <Contactuscards />
      <div className="conatactus-maxwidth">
        <div className="conatactus-inner-container">
          <ContactForm />
          <GoogleMap />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
