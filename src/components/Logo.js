import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Logo.css';
const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <div className='moto'>The only app you need</div>
    </div>
  )
}

export default Logo
