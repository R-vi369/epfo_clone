
import help from '../assets/help.png'
import faq from '../assets/faq.png'
import whatApp from '../assets/whatApp.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import phone from '../assets/phone.png'
import grievence from '../assets/grivence.png'
import digilocker from '../assets/digilocker.png'
import umang from '../assets/Umang.png'
import insta from '../assets/insta.png'
import bird from '../assets/bird.png'
import public1 from '../assets/public1.png'
import '../Style/Navbar.scss'
const SocialMedia = () => {
  return (
    <>
      <div className="nav">
        <div className="icons">
          <div className="help">
            <img src={help} alt="" />
          </div>
          <div className="faq">
            <img src={faq} alt="" />
          </div> 
          <div className="whatApp">
            <img src={whatApp} alt="" />
          </div>
          <div className="facebook">
            <img src={facebook} alt="" />
          </div>
          <div className="twitter">
            <img src={twitter} alt="" />
          </div>
          <div className="youtube">
            <img src={youtube} alt="" />
          </div>
          <div className="phone">
            <img src={phone} alt="" />
          </div>
          <div className="grievence">
            <img src={grievence} alt="" />
          </div>
          <div className="digi">
            <img src={digilocker} alt="" />
          </div>
          <div className="umang">
            <img src={umang} alt="" />
          </div>
          <div className="insta">
            <img src={insta} alt="" />
          </div>
          <div className="bird">
            <img src={bird} alt="" />
          </div>
          <div className="public">
            <img src={public1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
