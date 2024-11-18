import React from 'react'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={<FontAwesomeIcon icon = {faEnvelope}/>} alt=" " className='logo'/>
      <ul>
        <li><a href=''>Home</a></li>
        <li><a href=''>Course</a></li>
        <li><a href=''>Contact</a></li>
        <li><a href=''>About</a></li>
      </ul>


      <div className='search-box'>
          <input type="text" placeholder='search'/>
          {/* <img src={<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />} alt=" " /> */}
          <p><i className="fa-solid fa-magnifying-glass" style={{color:"white"}}></i></p>

      </div>

      <img src=" " alt=" " className='toggle-icon'/>

      <div className='login-btn'>
        <a href=''>Login</a>
      </div>
      
    </div>
  )
}

export default Navbar
