import React from 'react'
import './billing.css'
//import {Link} from 'react-router-dom'

const Billing = () => {
  return (
    <div className='billing-container'>
      <div className="billin-container-cta">
      <div className="billing-left">
          <div className='smoothscriber-detail'>SmoothScriber Details</div>
          <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='You Email' required/>
          </form>
          <div className='info'>
            <p>
              Please Note: SmoothScriber should see to carefully fill the above details correctly. All transactions are back logged.
            </p>
          </div>
          </div>
        <div className="billing-right">
        <div className='order'> Your Subscription</div>
          <div className='order-cta'>
          <h3>Product</h3>
          <h3>Amount</h3>
          <p>Basic/1.5Mbps</p>
          <p>N 16,000.00</p>
          <p>Plan Duration</p>
          <p>1 Month</p>
          <h3>Sub total</h3>
          <h3>N 16,000.00</h3>
          <p>VAT 7.5</p>
          <p>N 1,200.00</p>
          <h4>Total</h4>
          <h4>N 17,200.00</h4>
          </div>
         <div className='gateway-containter'>
         <form action="">
         <label for="duration">Select payment duration:</label>
        <select className='duration' id="Duration" name="duration">
            <option value="1">1 Month</option>
            <option value="2">2 Month</option>
            <option value="3">3 Month</option>
            <option value="6">6 Month</option>
            <option value="12">1 Year</option>
            <option value="24">2 Year</option>
</select>
         
          <button type='submit' className='btn btn-primary'>Make Payment</button>
          </form>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Billing
