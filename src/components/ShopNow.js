import React, { useRef } from 'react';
import './ShopNow.css';
import { useCart } from './CartContext';

const items = [
  {
    img: "https://i.ibb.co/DDzkvKdS/d2.jpg",
    name: "Strapless Asymmetrical Dress",
    price: "₹799",
  },
  {
    img: "https://i.ibb.co/s9Tm5zjL/t5.jpg",
    name: "Green Gingham Babydoll",
    price: "₹499",
  },
  {
    img: "https://i.ibb.co/jPxgSxjV/b2.jpg",
    name: "Black Pinstripe Skirt",
    price: "₹899",
  },
  {
    img: "https://i.ibb.co/d4hw28MD/a1.jpg",
    name: "Statement Necklace",
    price: "₹299",
  },
  {
    img: "https://i.ibb.co/4gR66Ywr/f4.jpg",
    name: "Red Ballet Flats",
    price: "₹999",
  },
  {
    img: "https://i.ibb.co/HLv48TmM/a3.jpg",
    name: "Amethyst Drop Earrings",
    price: "₹249",
  },
  {
    img: "https://i.ibb.co/Yz9gSjH/d5.jpg",
    name: "Black Tube Dress",
    price: "₹749",
  },
  {
    img: "https://i.ibb.co/spGmzrWV/t3.jpg",
    name: "Red Halter Neck Top",
    price: "₹549",
  },
  {
    img: "https://i.ibb.co/bg1sGQS4/a5.jpg",
    name: "Vintage Denim Hat",
    price: "₹199",
  },
  {
    img: "https://i.ibb.co/Xfx8QLqY/f1.jpg",
    name: "Cherry Red Heels",
    price: "₹849",
  }
];

const ShopNow = () => { 
  const scrollRef = useRef(null);
  const { cartItems, addToCart, removeFromCart } = useCart();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const isInCart = (item) => cartItems.some((i) => i.name === item.name);

  return (
    <div className="shop-now-container"> 
      <h2 className="shop-title">💖 shop the look 💖</h2>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>‹</button>
        <div className="carousel" ref={scrollRef}>
          {items.map((item, index) => {
            const inCart = isInCart(item);
            return (
              <div className="shop-card" key={index}>
                <img src={item.img} alt={item.name} />
                <div className="info">
                  <p className="name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <button
                    className={`cart-btn ${inCart ? 'remove' : 'add'}`}
                    onClick={() => inCart ? removeFromCart(item) : addToCart(item)}
                  >
                    {inCart ? 'Remove' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="arrow right" onClick={() => scroll('right')}>›</button>
      </div>
    </div>
  );
};

export default ShopNow;
