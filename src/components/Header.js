import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = (props) => {
  let accountState = 'Account'
  return (
 <div className="header">
    <div className="left">
  <img src={logo} alt="" />
    </div>
    <div className="right">
<Link to="/home">Home</Link>
<Link to="/menu">Menu</Link>
<Link to="/contacts">Contacts</Link>
<Link to="/signin"> {accountState}</Link>

    </div>
 </div>
  )
}

export default Header