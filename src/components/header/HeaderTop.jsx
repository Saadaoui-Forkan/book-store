import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './Header.css'

function HeaderTop() {

    const {cartItemsLength} = useContext(CartContext)

    const [search,setSearch] = useState("search")
    const handleClick = () =>{
        search === "search" ? setSearch("search active-search") : setSearch("search")
    }

  return (
    <div className="header-top">
        <Link to="/" className="brand-title">
            <i className="fa-solid fa-book"></i>
            <b className='logo-title'>Bookly</b>
        </Link>

        <form  className={search}>
            <input type="text" className="inputSearch" placeholder='search here...'/>
            <button type='button' className='search-btn' >
                <i className="bi bi-search"></i>
            </button>
            </form>

        <Link to="/cart" className="add-to-cart">
            {cartItemsLength > 0 && (
                <b className="cart-notification">{cartItemsLength}</b>
            )}
            <i className = "bi bi-cart-fill"></i>
        </Link>
        <div onClick={handleClick} className="toggle-search">
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default HeaderTop
