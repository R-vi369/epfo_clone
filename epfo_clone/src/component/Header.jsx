import React from "react";
import '../Style/Header.scss'
import EmailIcon from "@mui/icons-material/Email";
import CallEndIcon from '@mui/icons-material/CallEnd';
import {epfo} from '../assets/epfo.jpg'
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_top">
          <div className="header_left">
            <div className="email">

            <  EmailIcon />
            </div>
            Help Desk/TollFree Number &#40;1800118005 &#41;
            <div className="telephone">
                < CallEndIcon/>
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

     <div className="epfo">
       <div className="epfo_logo">
        <img src={epfo} alt="" />
       </div>


     </div>





    </>
  );
};

export default Header;
