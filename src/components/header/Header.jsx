import React,{useState}from 'react'
import {Link} from 'react-router-dom' 
import Logo from '../../images/Logo.png'
import './Header.css'

function Header() {
    const [activeInput,setActiveInput] = useState('inputSearch')
    const handleActiveInput = (e) =>{
        e.preventDefault()
        activeInput === 'inputSearch' ? setActiveInput('inputSearch active-input-search') : setActiveInput('inputSearch')
    }

    const [toggle,setToggle] = useState('toggle-button')
    const [toggleLinks,setToggleLinks] = useState('navbar-links')
    const handleToggle = (e) =>{
        // e.preventDefault()
        toggle === 'toggle-button' 
        ? setToggle('toggle-button toggle-bars') 
        : setToggle('toggle-button')

        toggleLinks === 'navbar-links' 
        ? setToggleLinks('navbar-links active-navbar') 
        : setToggleLinks('navbar-links')
    }
  return (
    <div className='header'>
        <nav className="navbar">
            <div className="brand-title">
                <img src={Logo} alt="" className="logo" />
            </div>
            <ul className={toggleLinks}>
                <Link to="/" onClick={handleToggle} className='navLink'>Home</Link>
                <Link to="/authors" onClick={handleToggle} className='navLink'>Authors</Link>
                <Link to="/about" onClick={handleToggle} className='navLink'>About Us</Link>
                <Link to="/contact" onClick={handleToggle} className='navLink'>Contact Us</Link>
                <Link to="/register" onClick={handleToggle} className='navLink'>Register</Link>
            </ul>
        </nav>
        <div className="header-left">
            <form  className="search">
                <input type="text" className={activeInput} placeholder='Search in book store...'/>
                <button type='button' onClick={handleActiveInput}>
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <div className="add-to-cart">
                <i className = "bi bi-cart-fill"></i>
            </div>
        </div>
        <div className={toggle} onClick={handleToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>    
    </div>
  )
}

export default Header