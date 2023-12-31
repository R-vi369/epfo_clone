import React from "react";
import "../Style/Hero.scss";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import Navbar from "./SocialMedia";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import SocialMedia from "./SocialMedia";
const Hero = () => {
  return (
    <>
      {/* <p>pliance of the direction contained in the para 44 (iii) & (iv) read with Para 44(v) of the judgement (for employees who were in service prior to 01.09.2014 and continued to be in service on or after 01.09.2014 but could not exercise joint option under erstwhile proviso to para 11(3) of EPS-1995), online facility for filing joint option is available at unified portal member interface</p> */}
      <div className="hero">
        <div className="blank">
          <a href="" style={{ color: " #27408b", height: "42px" }}>
            !
          </a>
        </div>
        <div className="blank">
          <a href="">
            <ArrowDropUpRoundedIcon />
          </a>
        </div>
        <div className="services">
          <a href="">
            Services
            <ArrowDropDownRoundedIcon />
          </a>
          <ul className="dropdown_menu">
            <li>
              <a href="#" className="dropdown_item">
                For Employers
              </a>
            </li>
            <li>
              <a href="#" className="dropdown_item">
                For Employess
              </a>
            </li>
            <li>
              <a href="#" className="dropdown_item">
                for International Workers
              </a>
            </li>

            <li>
              <a href="#" className="dropdown_item">
                for Pensioners - Locate Jeevan Pramaan Centre
              </a>
            </li>

            <li>
              <a href="#" className="dropdown_item">
                Locate an EPFO office
              </a>
            </li>

            <li>
              <a href="#" className="dropdown_item">
                Who's Who
              </a>
            </li>
          </ul>
        </div>
        <div className="exempted_Estt">
          <a href="">
            Exempted Estt
            <ArrowDropDownRoundedIcon />
          </a>
          <ul className="dropdown_menu">
            <li>
              <a href="#" className="">
                List of Exempted Establishment
              </a>
            </li>
            <li>
              <a href="#" className="">
                Perfor. Evaluation of Exempted Estt
              </a>
            </li>

            <li>
              <a href="#" className="">
                Cancellation/Grant Notification
              </a>
            </li>

            <li>
              <a href="#" className="">
                Exempted Return Manual
              </a>
            </li>
          </ul>
        </div>

        <div className="epfo_Corner">
          <a href="">
            EPFO Corner
            <ArrowDropDownRoundedIcon />
          </a>
          <ul className="dropdown_menu">
            <li>
              <a href="#" className="">
                Chief Executive Officer
              </a>
            </li>
            <li>
              <a href="#" className="">
                Central Govt. Industrial Tribunal
              </a>
            </li>

            <li>
              <a href="#" className="">
                EPF Traning Institues
              </a>
            </li>

            <li>
              <a href="#" className="">
                MIS
              </a>
            </li>
            <li>
              <a href="#" className="">
                nrakaas
              </a>
            </li>
            <li>
              <a href="#" className="">
                For Office Use
              </a>
            </li>
          </ul>
        </div>
        <div className="miscellaneous">
          <a href="">
            Miscellaneous
            <ArrowDropDownRoundedIcon />
          </a>
          <ul className="dropdown_menu">
            <li>
              <a href="#" className="">
                Ease of Doing Business
              </a>
            </li>
            <li>
              <a href="#" className="">
                Downloads              </a>
            </li>

            <li>
              <a href="#" className="">
              Recruitments              </a>
            </li>

            <li>
              <a href="#" className="">
                Tenders/Auction
              </a>
            </li>
            <li>
              <a href="#" className="">
                Citizen's Charter
              </a>
            </li>
            <li>
              <a href="#" className="">
                RTI Act
              </a>
            </li>
            
            <li>
              <a href="#" className="">
                Integrity Pledge - Central Vigilance Commission
              </a>
            </li>
            
            <li>
              <a href="#" className="">
                Whistle Blower Policy - CVC
              </a>
            </li>
          </ul>
        </div>

        <div className="Directory">
          <a href="">Directory</a>
        </div>
        <div className="abry">
          <a href="">ABRY</a>
        </div>
        <div className="Dashboards">
          <a href="">Dashboards</a>
        </div>
        <div className="Covid-19">
          <a href="">Covid-19</a>
        </div>
        <div className="Downloads">
          <a href="">
            Downloads
            <ArrowDropDownRoundedIcon />
          </a>
          <ul className="dropdown_menu">
            <li>
              <a href="#" className="">
               videos
              </a>
            </li>
            <li>
              <a href="#" className="">
                 Creatives
              </a>
            </li>

            <li>
              <a href="#" className="">
                Acts & Manuals
              </a>
            </li>

            <li>
              <a href="#" className="">
                Annual Report
              </a>
            </li>
            <li>
              <a href="#" className="">
                Study Report
              </a>
            </li>
            <li>
              <a href="#" className="">
                Annual Accounts Reports              </a>
            </li>
          </ul>



        </div>
        <div className="blank">
          <a href="" style={{ color: " #27408b", height: "42px" }}>
            !
          </a>
        </div>
      </div>

      <div className="stay_box">
        <div className="stay_alert">
          <img src="https://www.epfindia.gov.in/images/Fraud_Alert_en.jpeg" alt="" />
           
        </div>

        <div className="box_8">
          <div className="box_1">
            <button>Establishment</button>
            <button> KYC Updation Member</button>
          </div>
          <div className="box_2">
            <button>UMANG</button>
            <button>ECR/Retu?Paymenrnst</button>
          </div>
          <div className="box_3">
            <button>
              {" "}
              Online Claims <br /> Member Account Transfer
            </button>
            <button> e-Passbook</button>
          </div>

          <div className="box_4">
            <button>Performance of Establishements</button>
            <button>
              {" "}
              Shram Suvidha <br />
              Common ECR EPFO/ESIC
            </button>
          </div>
        </div>
      </div>

      <SocialMedia />
    </>
  );
};

export default Hero;
