import './Navbar.css'
import React from 'react'
import Togglecurrency from './Togglecurrency';

const Navbar = () => {


  return (
    <div className='Navbar'>
      <div className="appname">Appname</div>
      <Togglecurrency/>
      {/* login;signin54 */}
    </div>
  )
}

export default Navbar
