import React from "react";
import "../Style/About.scss";
import earth from "../assets/earth.png";
const About = () => {
  return (
    <>
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
              <p>Principal Employers-CAIU Portal</p>
              <p>
                Pensioners' Portal<sup>New</sup>
              </p>
              <p>
                EDLI & Pension Calculator <sup>New</sup>
              </p>
              <p>Jeevan Pramaan Through Mobile App </p>
              <p>TRRN Query Search</p>
              <p>International Workers Portal</p>
            </div>
          </div>
          <div className="about_left_2">
            <p>
              Notice Inviting Applications for Empanelment of CA Firms -
              Regional Office, Surat.... Read
            </p>
            <p>
              Notice Inviting Applications for Empanelment of CA Firms -
              Regional Office, Faridabad.... Read
            </p>
            <p>
              Notice inviting application for empanelment of Advocates - Zonal
              Office, North East Region.... Read
            </p>
            <p>
              Notice Inviting Applications for Empanelment of Advocates for the
              State of Maharashtra (Excluding Mumbai) - Regional Office,
              Kolhapur.... Read
            </p>

            <p>
              Notice inviting application for empanelment of Advocates - Zonal
              Office, Orissa.... Read
            </p>

            <p>
              Notice inviting application for empanelment of Advocates - Zonal
              Office, Maharashtra (Excluding Mumbai), Pune.... Read
            </p>
          </div>
        </div>
        <div className="about_right">
          <p>
            EPFO is one of the World's largest Social Security Organisations in
            terms of clientele and the volume of financial transactions
            undertaken. At present it maintains 27.74 crore accounts (Annual
            Report 2021-22) pertaining to its members. The Employees' Provident
            Fund came into existence with the promulgation of the Employees'
            Provident Funds Ordinance on the 15th November, 1951. It was
            replaced by the Employees' Provident Funds Act, 1952. The Employees'
            Provident Funds Bill was introduced in the Parliament as Bill Number
            15 of the year 1952 as a Bill to provide for the institution of
            provident funds for employees in factories and other establishments.
            The Act is now referred as the Employees' Provident Funds &
            Miscellaneous Provisions Act, 1952 which extends to the whole of
            India. The Act and Schemes framed there under are administered by a
            tri-partite Board known as the Central Board of Trustees, Employees'
            Provident Fund,consisting of representatives of Government (Both
            Central and State), Employers, and Employees. The Central Board of
            Trustees administers a contributory provident fund, pension scheme
            and an insurance scheme for the workforce engaged in the organized
            sector in India. The Board is assisted by the Employees’ PF
            Organization (EPFO), consisting of offices at 138 locations across
            the country. The Organization has a well equipped training set up
            where officers and employees of the Organization as well as
            Representatives of the Employers and Employees attend sessions for
            trainings and seminars.The EPFO is under the administrative control
            of Ministry of Labour and Employment, Government of India (click
            here) EPFO Organisation Structure (Annual Report 2021-22) The Board
            operates three schemes - EPF Scheme 1952, Pension Scheme 1995 (EPS)
            and Insurance Scheme 1976 (EDLI).
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
