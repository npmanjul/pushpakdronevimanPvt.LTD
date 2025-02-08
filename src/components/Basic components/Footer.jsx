import React from "react";
import "./footer.css";
import footerlogoImage from "./img/footer logo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedIn from "../Basic components/icon/linkedin-fill.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <>
      {/* <div className='sep-line'></div> */}
      <div className="footer-container">
        <div className="footer-top-box">
          <div className="footer-logo">
            <div className="footer-logo-img">
              <img src={footerlogoImage} alt="logo" />
            </div>
            <div className="logo-title">Pushpak Drone Viman</div>
          </div>

          <div className="footer-col-group">
            <div className="footer-col-subgroup">
              <div className="footer-col footer-col-1">
                <div className="footer-heading">Workshops</div>
                <div className="footer-text">
                  <Link to="/training" className="dropdown-subheading hov">
                    Workshop on Drone
                  </Link>
                </div>
                <div className="footer-text">
                  <Link to="/training" className="dropdown-subheading hov">
                    Workshop on Design
                  </Link>
                </div>
                <div className="footer-text">
                  <Link
                    to="/comingsoonpage"
                    className="dropdown-subheading hov"
                  >
                    Workshop on IoT
                  </Link>
                </div>
              </div>

              <div className="footer-col footer-col-2">
                <div className="footer-heading">Services</div>
                <div className="footer-text">
                  <Link
                    to="/AgricultureDroneAppliction"
                    className="dropdown-subheading hov"
                  >
                    Agriculture Drone
                  </Link>
                </div>
                <div className="footer-text">
                  <Link to="/Dronetesting" className="dropdown-subheading hov">
                    Drone Testing
                  </Link>
                </div>
                <div className="footer-text">
                  <Link
                    to="/Dronerepairservicepage"
                    className="dropdown-subheading hov"
                  >
                    Drone Repair Services
                  </Link>
                </div>
                <div className="footer-text">
                  <Link
                    to="/Testingandcalibrationpage"
                    className="dropdown-subheading hov"
                  >
                    Testing & Calibration
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-col-subgroup">
              <div className="footer-col footer-col-3">
                <div className="footer-heading">
                  <a href="https://shop.pushpakdroneviman.in/shipping-policy">
                    Policy
                  </a>
                </div>
                <div className="footer-heading">
                  <a href="https://shop.pushpakdroneviman.in/terms-conditions">
                    Terms of Use
                  </a>
                </div>
                <div className="footer-heading">
                  <a href="https://shop.pushpakdroneviman.in/privacy-policy">
                    Privacy Policy
                  </a>
                </div>
                {/* <div className="footer-text">
                  <Link
                    to="/agriculturepage"
                    className="dropdown-subheading hov"
                  >
                    Agriculture Drone
                  </Link>
                </div>
                <div className="footer-text">
                  <Link
                    to="/mappingdronepage"
                    className="dropdown-subheading hov"
                  >
                    Mapping Drone
                  </Link>
                </div>
                <div className="footer-text">
                  <Link
                    to="/PrintedObjectpage"
                    className="dropdown-subheading hov"
                  >
                    3D Printed Objects
                  </Link>
                </div>
                <div className="footer-text">
                  <Link
                    to="/comingsoonpage"
                    className="dropdown-subheading hov"
                  >
                    Iot based Kits
                  </Link>
                </div> */}
                {/* <div className='footer-text'>Microcontroller</div> */}
              </div>

              <div className="footer-col footer-col-4">
                <div className="footer-heading">
                  <Link to="/aboutus" className="footer-link">
                    About Us
                  </Link>
                </div>
                <div className="footer-heading">
                  <Link to="/contactus" className="footer-link">
                    Contact Us
                  </Link>
                </div>
                <div className="footer-heading">
                  <Link to="/rd" className="footer-link">
                    Media
                  </Link>
                </div>
                <div className="footer-Email">
                  <a href="mailto:pushpakdrone12@gmail.com">
                    pushpakdrone12@gmail.com
                  </a>
                </div>
                <div className="footer-phoneno">
                  <a href="tel:9369595897">9369595897</a> ||{" "}
                  <a href="tel:7607800166">7607800166</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle-box"></div>
        <div className="footer-buttom-box">
          <div className="socialmedialogos">
            <div className="circle">
              <YouTubeIcon />
            </div>
            <div className="circle">
              <FacebookSharpIcon />
            </div>
            <a href="https://www.linkedin.com/company/pushpak-drone-viman/">
              <div className="circle">
                <img src={LinkedIn} />
              </div>
            </a>
            <a href="https://www.instagram.com/pushpakdronevimanpvtltd12/?utm_source=ig_web_button_share_sheet">
              <div className="circle">
                <InstagramIcon />
              </div>
            </a>
            <div className="circle">
              <XIcon />
            </div>
          </div>
          <div className="copyright-text">
            © {date.getFullYear()} Pushpak Drone Viman Pvt. LTD, All Right
            Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
