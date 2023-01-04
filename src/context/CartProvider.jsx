import React, { useState } from 'react'
import CartContext from './CartContext'


function CartProvider({children}) {

    const [cartItems,setCartItems] = useState ([])

    // Add To Cart
    const addToCart = (item) =>{
        setCartItems(prev => [...prev,item])
    }

    // Remove From Cart
    const removeFromCart = (id) => {
        const cart = cartItems.filter (c => c.id !== id)
        setCartItems(cart)
    }

  return (
    <CartContext.Provider
     value
     =
        {
            {
                cartItems,
                addToCart,
                removeFromCart
            }
        }
    >

      {children}

    </CartContext.Provider>
  )
}

export default CartProvider
