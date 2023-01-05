import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Modal.css'
import Rating from '../book-slider/Rating'
import CartContext from '../../context/CartContext'

function Modal({setOpenModal,bookData,rating,reviews}) {

  // fetch data from the global context
  const {addToCart} = useContext(CartContext)

  const [qty,setQty] = useState(1)
  return (
    <div className="modal-container">
      <div className="modal-content">
        <i
          className="bi bi-x-circle-fill modal-icon"
          onClick={()=>setOpenModal(false)}
        ></i>
        <div className="modal-content-img">
          <img src={`/books/${bookData.image}`} alt="" />
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{bookData.title}</h5>
          <div className="modal-content-info-stock">
            <b>Status:</b> {bookData.inStock ? ' In Stock' : ' Not In Stock'}
          </div>
          <Rating rating = {bookData.rating} reviews = {bookData.reviews}/>
          <div className="modal-content-info-author">
            <b>Author: </b> {bookData.author}
          </div>
          <div className="modal-content-info-price">
            <b>Price: </b>${bookData.price}
          </div>
          <div className="modal-add-to-cart">
            <input
              className="modal-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={(e)=>setQty(e.target.value)}
            />
            <button className="modal-add-to-cart-btn" 
              onClick={()=>addToCart({...bookData,quantity:qty})}>
                
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link to={`/book/${bookData.id}`} className="modal-content-info-link">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Modal