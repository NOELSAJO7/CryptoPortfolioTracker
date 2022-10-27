import './Navbar.css'
import React from 'react'
import Togglecurrency from './Togglecurrency';
import Logo from './Logo';
import Loginsignup from './Loginsignup';
const Navbar = () => {


  return (
    <div className='Navbar'>
      <Logo/>
      <div className='Nadiv2'>
      <Togglecurrency/>
      {/* <Loginsignup/> */}
      </div>
      
      {/* login;signin54 */}
    </div>
  )
}

export default Navbar
