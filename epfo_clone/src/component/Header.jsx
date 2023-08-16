import React from "react";
import "../Style/Header.scss";
import Hero from "./Hero"
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

      
        <div className="sliding-container">
          <div className="sliding-text">
            Supreme Court Judgement dated 04.11.2022 in the matter Special Leave Petition (c) Nos. 8658-8659 of 2019 "In compliance of the direction contained in the para 44 (iii) & (iv) read with Para 44(v) of the judgement (for employees who were in service prior to 01.09.2014 and continued to be in service on or after 01.09.2014 but could not exercise joint option under erstwhile proviso to para 11(3) of EPS-1995), online facility for filing joint option is available at unified portal member interface.
          </div>
      </div>
      <Hero />
    </>
  );
};

export default Header;
