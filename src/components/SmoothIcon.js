import React from 'react'
import './smoothicon.css'
//import{Link} from 'react-router-dom'
import Logo from '../assets/Smooth.png'

function SmoothIcon() {
  return (
    <div className='hero'>
      <div className="container_smoothies">
        <img src={Logo} className='avarta' alt="Smooth"/>
      </div>


      <div className="container_front">
        <h1>WELCOME SMOOTHSCRIBERS</h1>
        <p>CLICK ON PAYMENT BELOW TO PROCCED</p>
      </div>  
      <div className="btn_item-cta">
            <a href='/Pricing' className='btn'>Payment</a>
            <a href='https://smoothbroadband.com/' className='btn btn-primary'>Back to MainSite </a>
            </div>
          
    </div>
  )
}

export default SmoothIcon
