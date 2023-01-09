import React, { useState } from 'react'
import CartContext from './CartContext'


function CartProvider({children}) {

    const [cartItems,setCartItems] = useState ([])
    const [searchBooks,setSearchBooks] = useState("")

    const [openModal,setOpenModal] = useState(false)
    const [bookData,setBookData] = useState(null)

    // Add To Cart
    const addToCart = (item) =>{
        const isExist = cartItems.find((cartItem) => cartItem.id === item.id)
        if (isExist) {
            setCartItems(
                cartItems.map((cartItem) => cartItem.id === item.id ? item : cartItem)
            )
        } else {
            setCartItems(prev => [...prev,item])
        }
    }

    // Remove From Cart
    const removeFromCart = (id) => {
        const cart = cartItems.filter (c => c.id !== id)
        setCartItems(cart)
    }

    // Search Book
    const searchTitleBook = (data) => {
        const searched = data.filter(book => book.title.toLowerCase().includes(searchBooks))
        return searched
    }

    // Handle Change Books
    const handleChange = (event) =>{
        setSearchBooks(event.target.value)
    }

    // Handle Modal
    const HandleModal = (book) => {
        setOpenModal(true)
        setBookData(book)
    }

  return (
    <CartContext.Provider
     value
     =
        {
            {
                cartItems,
                addToCart,
                removeFromCart,
                cartItemsLength : cartItems.length,
                handleChange,
                searchTitleBook,
                searchBooks,
                HandleModal,
                openModal,
                setOpenModal,
                bookData,
            }
        }
    >

      {children}

    </CartContext.Provider>
  )
}

export default CartProvider
