import React from "react";
import "./Cart.css";
import { useCart } from './CartContext';
import Checkout from "./Checkout"; 

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const loggedInUser = localStorage.getItem("loggedInUser");
  const users = JSON.parse(localStorage.getItem("users")) || {};
  const userData = users[loggedInUser];

  const total = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace("₹", ""));
    return acc + price;
  }, 0);

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">CART</h1>
        <a href="/" className="home-link">Go to Home</a>
      </header>

      <section className="user-details">
        {userData ? (
          <>
            <div><strong>Email:</strong> {loggedInUser}</div>
          </>
        ) : (
          <div><strong>User not logged in</strong></div>
        )}
      </section>

      <section className="cart">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart-msg">
            Your cart is emptier than my motivation on a Monday morning 😩🛒
          </p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-image" />
                <div className="cart-info">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {cartItems.length > 0 && (
  <section className="checkout-section">
    <div className="total">Total: ₹{total}</div>
    <Checkout cartItems={cartItems} userEmail={loggedInUser} total={total} /> 
    <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
  </section>
)}
    </div>
  );
};

export default Cart;