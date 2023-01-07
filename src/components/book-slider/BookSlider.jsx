import React,{useContext, useState} from 'react'
import './BookSlider.css'
import '../../App.css'
import Rating from './Rating'
import Modal from '../Modal/Modal'
import CartContext from '../../context/CartContext'

function BookSlider({data}) {
    const [slideIndex,setSlideIndex] = useState(0)
    const [openModal,setOpenModal] = useState(false)
    const [bookData,setBookData] = useState(null)

    // Create the slider
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex - 1)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    // Handle Modal
    const HandleModal = (book) => {
        setOpenModal(true)
        setBookData(book)
    }

    // fetch data from CartContext
    const {addToCart} = useContext(CartContext)

  return (
    <div className='book-slider-container'>
        {
            slideIndex !== 0 
            &&
            <i onClick={()=>handleClick('left')} 
            className="bi bi-chevron-left book-slider-arrow-left">
            </i>
        }
        <div className="book-slider-wrapper">
            {
                data.map(item => (
                    <div style={{transform : `translateX(${slideIndex * -300}px)`}} key={item.id} className="book-slide-item">
                        <img src={`/books/${item.image}`} alt={item.title} className="book-slide-item-img" />
                        <h3 className="book-slide-item-title">{item.title}</h3>
                        <Rating rating={item.rating} reviews={item.reviews} />
                        <div className="book-slider-item-price">${item.price}</div>
                        <div className="book-slider-icons-wrapper">
                            <i className="bi bi-eye-fill" onClick={()=> HandleModal(item)}></i>
                            <i 
                            className="bi bi-cart-plus"
                            onClick={()=>addToCart({...item,quantity:1})}
                            ></i>
                        </div>
                    </div>
                ))
            }
        </div>
        {
            slideIndex !== data.length 
            &&
            <i onClick={()=>handleClick('right')} 
            className="bi bi-chevron-right book-slider-arrow-right">
            </i>
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

export default BookSlider