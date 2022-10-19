import React from 'react'
import './footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaSearchLocation className='footer-cta' />
                 <div>
                    <p>USA: 2105 Dublin Court Mckinney |  Dodondawa Plaza Off Chivita Venue Ajao Estate </p>
                    <h4>Texas 75071 USA| Lagos Nigeria</h4>
                </div>
                </div>
                <div className="phone">
                <h4><FaPhone className='footer-cta' />+(234) 810 393 6256 , +(234) 811 970 5103, +1(972) 896 8441, +1 (816) 209 5023</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk className='footer-cta'/>customercare@smoothbroadband.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>SMOOTH MULTI-SERVICES PLATFORM  is a complete IT solution provider. We focus on Internet Solution(ISP), Networking, Surveillance and Security, Cyber Security, Aerial and Underground Cable drop and maintenance, VoIP Solutions, IPTV and Software development and Customization.</p>
            <div className="social">
                <FaFacebook className='Social-icon'/>
                <FaTwitter className='Social-icon'/>
                <FaLinkedin className='Social-icon'/>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
