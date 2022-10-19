import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/Smooth.png'
import './navbar.css'

const NavBar = () => {

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const [color, setColor] = useState(false)
const changeColor =() => {
  if(window.scrollY >= 100) {
    setColor(true)
  } else{
    setColor(false)
  }
}
window.addEventListener('scroll',changeColor)
  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className='Logo'>
        <Link to='/'><img src={Logo} className='avarta' alt="Smooth"/></Link>    
        <Link to='/'><h1>SmoothBroadband</h1></Link>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Pricing'>Pricing</Link>
            </li>
            <li>
            <a href='https://smoothbroadband.com/' >MainSite</a>
                {/*<Link to='/https://smoothbroadband.com/'>MainSite</Link>*/}
            </li>
        </ul>
      <div className='smoothies' onClick={handleClick}>
        {click ? (<FaTimes className='menu-icon'/>) : (<FaBars className='menu-icon'/>)}
      </div>
    </div>
  )
}

export default NavBar
