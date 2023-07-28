import React from "react";
import "../Style/Header.scss";
import Hero  from "./Hero"
import EmailIcon from "@mui/icons-material/Email";
import CallEndIcon from "@mui/icons-material/CallEnd";
import epfo from "../assets/epfo.jpg";
import G20 from "../assets/G20_0.jpg";
import ind from "../assets/75.jpg";
import satyam from "../assets/sataym.jpg";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_top">
          <div className="header_left">
            <div className="email">
              <EmailIcon />
            </div>
            Help Desk/TollFree Number &#40;1800118005 &#41;
            <div className="telephone">
              <CallEndIcon />
            </div>
          </div>

          <div className="header_right">
            <div className="header_right_text">
              <p>Screen Reader Access</p>
              <p>Skip to main content</p>
            </div>
            <div className="header_right_other_lang">
              <p>
                A<sup>+</sup>
              </p>
              <p className="header_right_other_active">A</p>
              <p>
                A<sup>-</sup>
              </p>
              <button className="lang">english</button>
            </div>
          </div>
        </div>
      </div>

      {/* another section  */}
       <div className="epfo_container">

      <div className="epfo">
        <div className="epfo_logo">
          <img src={epfo} alt="epfo_logo" />
        </div>
        <div className="epfo_text">
          <h1>Employess' Provident Fund Organisation, India</h1>
          <p>Ministry of Labour & Employment, Government of India</p>
        </div>

      </div>
      <div className="another_img">
        
        <img className="another_img_2" src={G20} alt="" />
        <img className="another_img_2" src={ind} alt="" />
        <img src={satyam} alt="" />
      </div>
       </div>
       <Hero/>
    </>
  );
};

export default Header;
