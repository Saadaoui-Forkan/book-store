import React from 'react'
import './Modal.css'
import Rating from '../book-slider/Rating'

function Modal({setOpenModal,bookData,rating,reviews}) {
console.log(bookData);
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
            />
            <button className="modal-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <div className="modal-content-info-link">
            See More Details
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal