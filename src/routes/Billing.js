import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import BillingForm from '../components/Billing'
import BillingImage from '../components/BillingImage'

const Billing = () => {
  return (
    <div>
      <NavBar />
      <BillingImage heading='PAYMET PLATFORM' text='Please fill in your payment details' />
      <BillingForm />
      <Footer />
    </div>
  )
}

export default Billing
