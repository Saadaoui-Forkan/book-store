import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function HeaderBottom() {

  return (
    <div className='header-bottom'>
        <ul className="navbar-links">
            <Link to="/"  className='navLink'>
              <i className="fa-solid fa-house nav-icon"></i>
              <b>Home</b>
            </Link>
            <Link to="/authors"  className='navLink'>
              <i className="fa-solid fa-pen-nib nav-icon"></i>
              <b>Authors</b>
            </Link>
            <Link to="/about"  className='navLink'>
              <i className="fa-solid fa-tags nav-icon"></i>
              <b>About Us</b>
            </Link>
            <Link to="/contact"  className='navLink'>
              <i className="fa-solid fa-comment nav-icon"></i>
              <b>Contact Us</b>
            </Link>
            <Link to="/register"  className='navLink'>
              <i className="fa-solid fa-address-card nav-icon"></i>
              <b>connect</b>
            </Link>
        </ul>
    </div>
  )
}

export default HeaderBottom
