import React,{useState} from 'react'
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
        e.preventDefault()
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
                <li onClick={handleToggle}><a href="/">Home</a></li>
                <li onClick={handleToggle}><a href="/">Authors</a></li>
                <li onClick={handleToggle}><a href="/">About Us</a></li>
                <li onClick={handleToggle}><a href="/">Contact Us</a></li>
                <li onClick={handleToggle}><a href="/">Register</a></li>
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
        <a href="/" className={toggle} onClick={handleToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </a>    
    </div>
  )
}

export default Header