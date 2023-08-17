import React from "react";
import "../Style/About.scss";
import earth from "../assets/earth.png";
import newspaper from '../assets/newspaper.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const About = () => {
  return (
    <>
      <div className="another">
        <div className="another-text">
          PREVENT FRAUD!! Never share your UAN/Password/PAN/Aadhaar/Bank Account details/OTP or any other personal or financial details with anyone. Beware of such fake calls/messages and report to Local Police/Cyber Crime branch. EPFO or its staff never asks for these details over Messages, Calls, WhatsApp, Social Media. STAY ALERT, STAY VIGILANT.
        </div>
      </div>

      <div className="about">
        <div className="about_left">
          <div className="about_left_1">
            <div className="about_left_1_nav">
              <h2>
                <img src={earth} alt="" />
              </h2>
              <h2>Online Services</h2>
            </div>
            <div className="about_left_1_text">
              <div className="wrap">
                <NavigateNextIcon />
                <p>Principal Employers-CAIU Portal</p>
              </div>
              <div className="wrap">
                <NavigateNextIcon />
                <p>
                  Pensioners' Portal<sup style={{ 'color': 'blue' }}>New</sup>
                </p>
              </div>
              <div className="wrap">

                <NavigateNextIcon />

                <p>
                  EDLI & Pension Calculator <sup style={{ 'color': 'blue' }}>New</sup>
                </p>
              </div>
              <div className="wrap">
                <NavigateNextIcon />
                <p>Jeevan Pramaan Through Mobile App </p>
              </div>
              <div className="wrap">
                <NavigateNextIcon />
                <p>TRRN Query Search</p>
              </div>
              <div className="wrap">
                <NavigateNextIcon />
                <p>International Workers Portal</p>
              </div>
            </div>
          </div>
          <div className="about_lefttt">

            <div className="whats">

              <img src={newspaper} alt="" />
              <p>What's new</p>
            </div>

            <div className="about_left_2">
              <div className="wrap">
                <NavigateNextIcon />
                <p>Notice inviting application for empanelment of Advocates - Zonal Office, Jaipur.... <span>Read</span></p>
              </div>
              <div className="wrap">
                <NavigateNextIcon />
                <p>
                  Notice Inviting Applications for Empanelment of Advocates - Regional Office, Bhopal.... <span>Read</span>
                </p>
              </div>
              <div className="wrap">

                <NavigateNextIcon />

                <p>
                  List of selected Advocates in Panel of EPFO, UP Zone for the block year 2021-23.... <span>Read</span>
                </p>
              </div>
              <div className="wrap">
                <NavigateNextIcon />
                <p>Corrigendum - Notice inviting application for empanelment of Advocates - Zonal Office, Kolkata.... <span>Read</span> </p>
              </div>
              <div className="wrap">
                <NavigateNextIcon />
                <p>Notice Inviting Applications for Empanelment of CA Firms - Regional Office, Tambaram.... <span>Read</span></p>
              </div>
              <div className="wrap">
                <NavigateNextIcon />
                <p>Notice inviting application for empanelment of Advocates - Zonal Office, Vijayawada.... <span>Read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_right">
          <div className="about_us">
            <p>About Us</p>
          </div>

          <div className="wrapper">
            <FiberManualRecordIcon  style={{'fontSize': '0.5rem'}}/>
            <p>
              EPFO is one of the World's largest Social Security Organisations in terms of clientele and the volume of financial transactions undertaken. At present it maintains 27.74 crore accounts (Annual Report 2021-22) pertaining to its members.
            </p>
          </div>
          <div className="wrapper">
          <FiberManualRecordIcon  style={{'fontSize': '0.5rem'}}/>
            <p>
              The Employees' Provident Fund came into existence with the promulgation of the <span>Employees' Provident Funds Ordinance</span> on the 15th November, 1951. It was replaced by the Employees' Provident Funds Act, 1952. <span>The Employees' Provident Funds Bill</span> was introduced in the Parliament as Bill Number 15 of the year 1952 as a Bill to provide for the institution of provident funds for employees in factories and other establishments. The Act is now referred as the <span>Employees' Provident Funds & Miscellaneous Provisions Act, 1952</span> which extends to the whole of India. The Act and Schemes framed there under are administered by a tri-partite Board known as the Central Board of Trustees, Employees' Provident Fund,consisting of representatives of Government (Both Central and State), Employers, and Employees.
            </p>
          </div>

          <div className="wrapper">
          <FiberManualRecordIcon  style={{'fontSize': '0.5rem'}}/>
            <p>
              <span>The Central Board of Trustees</span> administers a contributory provident fund, pension scheme and an insurance scheme for the workforce engaged in the organized sector in India. The Board is assisted by the Employees’ PF Organization (EPFO), consisting of offices at 138 locations across the country. The Organization has a well equipped training set up where officers and employees of the Organization as well as Representatives of the Employers and Employees attend sessions for trainings and seminars.The EPFO is under the administrative control of Ministry of Labour and Employment, Government of India <span>(click here 14-07-2015)
              EPFO Organisation Structure</span> (Annual Report 2021-22)
            </p>
          </div>
          <div className="wrapper">
          <FiberManualRecordIcon  style={{'fontSize': '0.5rem'}}/>
            <p>
            The Board operates three schemes - EPF Scheme 1952, Pension Scheme 1995 (EPS) and Insurance Scheme 1976 (EDLI).
            </p>
          </div>
  

        </div>
      </div>
    </>
  );
};

export default About;
