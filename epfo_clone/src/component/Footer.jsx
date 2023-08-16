import React from 'react'
import '../Style/Footer.scss'
import eshram from '../assets/eshram.png'
import eshram2 from '../assets/eshram2.png'
import FooterBottom from './FooterBottom'
const Footer = () => {
  return (
    <>
     <div className="portal">
       <button>Employers Portal</button>
       <button>Pradhan Mantri Rojgar Protsahan Yogana</button>
       <button>mGovernance</button>
       <button>EPFO's Press Relase</button>
       <button>Photo Gallery</button>

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
    
    <FooterBottom/>
    </>
  )
}

export default Footer