import React,{useContext, useState}from 'react'
import {Link} from 'react-router-dom' 
import CartContext from '../../context/CartContext'
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
        toggle === 'toggle-button' 
        ? setToggle('toggle-button toggle-bars') 
        : setToggle('toggle-button')

        toggleLinks === 'navbar-links' 
        ? setToggleLinks('navbar-links active-navbar') 
        : setToggleLinks('navbar-links')
    }

    const {cartItemsLength} = useContext(CartContext)
  return (
    <div className='header'>
        <nav className="navbar">
            <Link to="/" className="brand-title">
                <img src={Logo} alt="" className="logo" />
            </Link>
            <ul className={toggleLinks}>
                <Link to="/" onClick={handleToggle} className='navLink'>Home</Link>
                <Link to="/authors" onClick={handleToggle} className='navLink'>Authors</Link>
                <Link to="/about" onClick={handleToggle} className='navLink'>About Us</Link>
                <Link to="/contact" onClick={handleToggle} className='navLink'>Contact Us</Link>
                <Link to="/register" onClick={handleToggle} className='navLink'>connection</Link>
            </ul>
        </nav>
        <div className="header-left">
            <form  className="search">
                <input type="text" className={activeInput} placeholder='Search in book store...'/>
                <button type='button' onClick={handleActiveInput}>
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <Link to="/cart" className="add-to-cart">
                {cartItemsLength > 0 && (
                    <b className="cart-notification">{cartItemsLength}</b>
                )}
                <i className = "bi bi-cart-fill"></i>
            </Link>
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