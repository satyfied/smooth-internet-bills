import React from 'react'
import './pricing.css'
import {Link} from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="pricing">
    <div className='card-container'>
        <div className="card">
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='amount'>N 16,000</p>
            <p>- 30 Days -</p>
            <p>- 1.5Mbps -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='/Billing' className='btn btn-primary' >PURCHASE</Link>
        </div>

        <div className="card">
            <h3>- Suite -</h3>
            <span className='bar'></span>
            <p className='amount'>N 23,000</p>
            <p>- 30 Days -</p>
            <p>- 2Mbps -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='/Billing' className='btn btn-primary'>PURCHASE</Link>
        </div>
        <div className="card">
            <h3>- Emerald -</h3>
            <span className='bar'></span>
            <p className='amount'>N 39,000</p>
            <p>- 30 Days -</p>
            <p>- 3Mbps -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='/Billing' className='btn btn-primary'>PURCHASE</Link>
        </div>
        <div className="card">
            <h3>- Urel -</h3>
            <span className='bar'></span>
            <p className='amount'>N 59,000</p>
            <p>- 30 Days -</p>
            <p>- 5Mbps -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='/Billing' className='btn btn-primary'>PURCHASE</Link>
        </div>
        <div className="card">
            <h3>- Prime -</h3>
            <span className='bar'></span>
            <p className='amount'>N 78,000</p>
            <p>- 30 Days -</p>
            <p>- 7Mbps -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='/Billing' className='btn btn-primary'>PURCHASE</Link>
        </div>
        <div className="card">
            <h3>- Executive -</h3>
            <span className='bar'></span>
            <p className='amount'>N 110,000</p>
            <p>- 30 Days -</p>
            <p>- 10Mbps -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='/Billing' className='btn btn-primary'>PURCHASE</Link>
        </div>
    </div>
    </div>
  )
}

export default Pricing
