import React from "react";
import "../Style/Hero.scss";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="services">
          <button className="dropbtn">Services</button>
          <div className="dropdown_content">
            <a href="">For Employers</a>
            <a href="">For Employees</a>
            <a href="">For International Workers</a>
            <a href="">For Pensioners - Locate Jeevan Pramaan Center</a>
            <a href="">Locate an EPFO office</a>
            <a href="">Who's Who</a>
          </div>
        </div>
        <div className="Exempted_Estt">
          <button>Exempted Estt</button>
          <div className="dropdown_content">
            <a href="">For Employers</a>
            <a href="">For Employees</a>
            <a href="">For International Workers</a>
            <a href="">For Pensioners - Locate Jeevan Pramaan Center</a>
            <a href="">Locate an EPFO office</a>
            <a href="">Who's Who</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
