import React from 'react'
import '../Style/Footer.scss'
import eshram from '../assets/eshram.png'
import eshram2 from '../assets/eshram2.png'
import FooterBottom from './FooterBottom'
const Footer = () => {
  return (
    <>
      <div className="portal">
        <button style={{"background":"#8b6fa7"}}>Employers Portal</button>
        <button style={{"background":"#07a1a7 "}}>Pradhan Mantri Rojgar Protsahan Yogana</button>
        <button style={{"background":"#668c66 "}}>mGovernance</button>
        <button style={{"background":"#a46971 "}}>EPFO's Press Relase</button>
        <button style={{"background":"#b69c40"}}>Photo Gallery</button>

      </div>


      <div className="e_shram">
        <div className="e_shram_portal">
          <img src={eshram} alt="" />
          <p>e-Shram Portal</p>
        </div>
        <div className="e_shram2">
          <img src={eshram2} alt="" />
        </div>
      </div>

      <FooterBottom />
    </>
  )
}

export default Footer