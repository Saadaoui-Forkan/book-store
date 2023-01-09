import React,{useContext} from 'react'
import '../../App.css'
import './Search.css'
import '../../components/book-slider/BookSlider.css'
import Rating from '../../components/book-slider/Rating'
import Modal from '../../components/Modal/Modal'
import CartContext from '../../context/CartContext'
import { books } from '../../data/books'

function Search() {

    window.scroll(0,0)
    const {searchTitleBook,addToCart,HandleModal,openModal,setOpenModal,bookData} = useContext(CartContext)
  return (
    <div className='search-page'>
      {
        searchTitleBook(books).map((item,index) => (
          <div  key={index} className="book-slide-item">
              <img src={`/books/${item.image}`} alt={item.title} className="book-slide-item-img" />
              <h3 className="book-slide-item-title">{item.title}</h3>
              <Rating rating={item.rating} reviews={item.reviews} />
              <div className="book-slider-item-price">${item.price}</div>
              <div className="book-slider-icons-wrapper">
                  <i className="bi bi-eye-fill" 
                  onClick={()=> HandleModal(item)}
                  ></i>
                  <i 
                  className="bi bi-cart-plus"
                  onClick={()=>addToCart({...item,quantity:1})}
                  ></i>
              </div>
          </div>
      ))
      }

      {
            openModal 
            && 
            <Modal
                setOpenModal = {setOpenModal}
                bookData = {bookData}
            />
        }

    </div>
  )
}

export default Search
