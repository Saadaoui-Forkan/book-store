import React, { useContext } from 'react'
import './CartPage.css'
import CartContext from '../../context/CartContext'

function CartPage() {

  const {cartItems,cartItemsLength,removeFromCart,addToCart} = useContext(CartContext)
  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {
            cartItemsLength === 0
            ?
            <h3>Your Cart Is Empty</h3>
            :
            (
              cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={`/books/${item.image}`}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <div>
                    <div className="cart-item-book-title">
                      <b>Title: </b>
                      {item.title}
                    </div>
                    <div className="cart-item-author">
                      <b>Author: </b>
                      {item.author}
                    </div>
                  </div>
                  <div>
                    <div className="cart-item-quantity">
                      <button
                        className="bi bi-plus-lg"
                        onClick={() => addToCart({...item,quantity:item.quantity+1})}
                      ></button>
                      <b>{item.quantity}</b>
                      <button
                        disabled={item.quantity <= 1}
                        className="bi bi-dash-lg"
                        onClick={() => addToCart({...item,quantity:item.quantity-1})}
                      ></button>
                    </div>
                    <div className="cart-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <i 
                    className="bi bi-trash-fill"
                    onClick={() => removeFromCart(item.id)}
                    ></i>
                  </div>
                </div>
              </div>
              ))
            )
          }
        </div>
        <div className="cart-order-summary">
          <h5 className="order-summary-title">ORDER SUMMARY</h5>
          <div className="order-summary-item">
            <span>Subtotal</span>
            <span>
              $
              {cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className="order-summary-item">
            <span>Shipping Cost</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <strong>Total</strong>
            <span>
              $
              {cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage


