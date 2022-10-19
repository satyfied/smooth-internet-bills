import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PricingCards from '../components/Pricing'
import PricingImage from '../components/PricingImage'

const Pricing = () => {
  return (
    <div> 
      <NavBar />
      <PricingImage heading='PRICING.' text='Choose your Tarif' />
      <PricingCards />
      <Footer />
    </div>
  )
}

export default Pricing
