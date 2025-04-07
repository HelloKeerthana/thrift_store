// ClothingTypes.js
import React from "react";
import { useCart } from './CartContext';
import './ClothingTypes.css';
import { useLocation } from 'react-router-dom';


const ClothingTypes = () => {
  const location = useLocation();
  const isWomen = location.pathname.includes('women');
  const { cartItems, addToCart, removeFromCart } = useCart();

  const isInCart = (itemName) => cartItems.some(item => item.name === itemName);

  const toggleCart = (item) => {
    isInCart(item.name) ? removeFromCart(item) : addToCart(item);
  };


  return (
        <div className={`clothing-types ${isWomen ? 'women' : 'men'}`}>
        <div className="hero">
        <h1>{isWomen ? "Women's Collection" : "Men's Collection"}</h1>
        <div className="offer-banner">Up to 20% OFF!</div>
        <div className="category-grid">
          {isWomen ? (
            <>
              <a href="#dresses" className="category-card">
                <img src="https://i.ibb.co/DDzkvKdS/d2.jpg" alt="Dresses" />
                <h2>Dresses</h2>
              </a>
              <a href="#tops" className="category-card">
                <img src="https://i.ibb.co/spGmzrWV/t3.jpg" alt="Tops" />
                <h2>Tops</h2>
              </a>
              <a href="#bottomware" className="category-card">
                <img src="https://i.ibb.co/r2wjbgk1/b1.jpg" alt="Bottomware" />
                <h2>Bottomware</h2>
              </a>
              <a href="#accessories" className="category-card">
                <img src="https://i.ibb.co/d4hw28MD/a1.jpg" alt="Accessories" />
                <h2>Accessories</h2>
              </a>
              <a href="#footwear" className="category-card">
                <img src="https://i.ibb.co/4gR66Ywr/f4.jpg" alt="Footwear" />
                <h2>Footwear</h2>
              </a>
            </>
          ) : (
            <>
            <a href="#shirts" class="category-card">
              <img src="https://i.ibb.co/hxpbddqp/Whats-App-Image-2025-04-06-at-3-04-09-PM-3.jpg" alt="shirt"/>
              <h2>Shirts</h2>
            </a>
            <a href="#tshirts" class="category-card">
              <img src="https://i.ibb.co/237zKb86/Whats-App-Image-2025-04-06-at-3-04-09-PM-1.jpg" alt="tshirt"/>
              <h2>T-Shirts</h2>
            </a>
            <a href="#pants" class="category-card">
              <img src="https://i.ibb.co/Qjm0K74b/Whats-App-Image-2025-04-06-at-3-04-12-PM.jpg"alt="pants"/>
              <h2>Pants</h2>
            </a>
            <a href="#accessories" class="category-card">
              <img src="https://i.ibb.co/RG2vLv3g/Whats-App-Image-2025-04-06-at-3-04-06-PM-1.jpg" alt="accessories"/>
              <h2>Accessories</h2>
            </a>
            <a href="#footwear" class="category-card">
              <img src="https://i.ibb.co/xqt2BwkB/Whats-App-Image-2025-04-06-at-3-04-08-PM.jpg" alt="footwear"/>
              <h2>Footwear</h2>
            </a>
            </>
          )}
        </div>
      </div>

      {isWomen ? (
        <>
      <section id="dresses">
        <h1>Dresses</h1>
        <div className="item-grid">

        <div className="item">
            <img src="https://i.ibb.co/DDzkvKdS/d2.jpg" alt="" />
            <div className="item-info">
              <h3>Strapless assemetrical dress with white accent</h3>
              <p>₹799</p>
            </div>
            <button
              className="cart-btn" onClick={() =>
                toggleCart({
                  name: "Strapless assemetrical dress with white accent",
                  price: "₹799",
                  img: "https://i.ibb.co/DDzkvKdS/d2.jpg"
                })
              }
            >
              {isInCart("Strapless assemetrical dress with white accent")
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
        </div>
        <div className="item">
            <img src="https://i.ibb.co/DDzkvKdS/d2.jpg" alt="" />
            <div className="item-info">
              <h3>Floral halterneck blue dress</h3>
              <p>₹799</p>
            </div>
            <button
              className="cart-btn" onClick={() =>
                toggleCart({
                  name: "Floral halterneck blue dress",
                  price: "₹799",
                  img: "https://i.ibb.co/DDzkvKdS/d2.jpg"
                })
              }
            >
              {isInCart("Floral halterneck blue dress")
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
        </div>
        <div className="item">
            <img src="https://i.ibb.co/dsWJgCr9/d1.jpg" alt="" />
            <div className="item-info">
              <h3>Floral halterneck blue dress</h3>
              <p>₹799</p>
            </div>
            <button
              className="cart-btn" onClick={() =>
                toggleCart({
                  name: "Halterneck mini dress",
                  price: "₹799",
                  img: "https://i.ibb.co/dsWJgCr9/d1.jpg"
                })
              }
            >
              {isInCart("Halterneck mini dress")
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
        </div>
        <div className="item">
            <img src="https://i.ibb.co/CpyXpCbV/8c24e9d0-be33-4677-975c-a05f78264b38.png" alt="" />
            <div className="item-info">
              <h3>Denim Skater Dress</h3>
              <p>₹799</p>
            </div>
            <button
              className="cart-btn" onClick={() =>
                toggleCart({
                  name: "Denim Skater Dress",
                  price: "₹799",
                  img: "https://i.ibb.co/CpyXpCbV/8c24e9d0-be33-4677-975c-a05f78264b38.png"
                })
              }
            >
              {isInCart("Denim Skater Dress")
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
        </div>
        <div className="item">
            <img src="https://i.ibb.co/Yz9gSjH/d5.jpg" alt="" />
            <div className="item-info">
              <h3>Black tube dress with white lace accent</h3>
              <p>₹799</p>
            </div>
            <button
              className="cart-btn" onClick={() =>
                toggleCart({
                  name: "Black tube dress with white lace accent",
                  price: "₹799",
                  img: "https://i.ibb.co/Yz9gSjH/d5.jpg"
                })
              }
            >
              {isInCart("Black tube dress with white lace accent")
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
        </div>
        </div>
      </section>

      <section id="tops">
        <h1>Tops</h1>
        <div className="item-grid">
        <div className="item">
        <img src="https://i.ibb.co/s9Tm5zjL/t5.jpg" alt="" />
        <div className="item-info">
          <h3>Green Gingham Babydoll</h3>
          <p>₹499</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Green Gingham Babydoll",
              price: "₹499",
              img: "https://i.ibb.co/s9Tm5zjL/t5.jpg",
            })
          }
        >
          {isInCart("Green Gingham Babydoll") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/dJgk1z7x/t1.jpg" alt="" />
        <div className="item-info">
          <h3>Black Lacy Top</h3>
          <p>₹399</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Black Lacy Top",
              price: "₹399",
              img: "https://i.ibb.co/dJgk1z7x/t1.jpg",
            })
          }
        >
          {isInCart("Black Lacy Top") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/spGmzrWV/t3.jpg" alt="" />
        <div className="item-info">
          <h3>Red Halter Neck Top</h3>
          <p>₹549</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Red Halter Neck Top",
              price: "₹549",
              img: "https://i.ibb.co/spGmzrWV/t3.jpg",
            })
          }
        >
          {isInCart("Red Halter Neck Top") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/rVrXB1k/t2.jpg" alt="" />
        <div className="item-info">
          <h3>White Cat Tee</h3>
          <p>₹599</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "White Cat Tee",
              price: "₹599",
              img: "https://i.ibb.co/rVrXB1k/t2.jpg",
            })
          }
        >
          {isInCart("White Cat Tee") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/cXQcgL99/t4.jpg" alt="" />
        <div className="item-info">
          <h3>Black Vest with Bows</h3>
          <p>₹349</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Black Vest with Bows",
              price: "₹349",
              img: "https://i.ibb.co/cXQcgL99/t4.jpg",
            })
          }
        >
          {isInCart("Black Vest with Bows") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
        
        </div>
      </section> 

      <section id="bottomware">
        <h1>Bottomware</h1>
        <div className="item-grid">
        <div className="item">
        <img src="https://i.ibb.co/r2wjbgk1/b1.jpg" alt="" />
        <div className="item-info">
          <h3>High Waist Jeans</h3>
          <p>₹999</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "High Waist Jeans",
              price: "₹999",
              img: "https://i.ibb.co/r2wjbgk1/b1.jpg",
            })
          }
        >
          {isInCart("High Waist Jeans") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/jPxgSxjV/b2.jpg" alt="" />
        <div className="item-info">
          <h3>Black pinstripe mini skirt</h3>
          <p>₹899</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Black pinstripe mini skirt - ₹899",
              price: "₹899",
              img: "https://i.ibb.co/jPxgSxjV/b2.jpg",
            })
          }
        >
          {isInCart("Black pinstripe mini skirt - ₹899") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/jPxgSxjV/b2.jpg" alt="" />
        <div className="item-info">
          <h3>Black pinstripe mini skirt</h3>
          <p>₹799</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Black pinstripe mini skirt - ₹799",
              price: "₹799",
              img: "https://i.ibb.co/jPxgSxjV/b2.jpg",
            })
          }
        >
          {isInCart("Black pinstripe mini skirt - ₹799") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/VpcvS7fv/b7.jpg" alt="" />
        <div className="item-info">
          <h3>Highrise lightwash jeans with bows</h3>
          <p>₹599</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Highrise lightwash jeans with bows",
              price: "₹599",
              img: "https://i.ibb.co/VpcvS7fv/b7.jpg",
            })
          }
        >
          {isInCart("Highrise lightwash jeans with bows") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/xt5GP7s5/b4.jpg" alt="" />
        <div className="item-info">
          <h3>Wideleg high rise darkwash jeans</h3>
          <p>₹649</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Wideleg high rise darkwash jeans",
              price: "₹649",
              img: "https://i.ibb.co/xt5GP7s5/b4.jpg",
            })
          }
        >
          {isInCart("Wideleg high rise darkwash jeans") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
  
        </div>
      </section>

      <section id="accessories">
        <h1>Accessories</h1>
        <div className="item-grid">
        <div className="item">
        <img src="https://i.ibb.co/d4hw28MD/a1.jpg" alt="" />
        <div className="item-info">
          <h3>Statement Necklace</h3>
          <p>₹299</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Statement Necklace",
              price: "₹299",
              img: "https://i.ibb.co/d4hw28MD/a1.jpg",
            })
          }
        >
          {isInCart("Statement Necklace") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/zT7tjnkX/a2.jpg" alt="" />
        <div className="item-info">
          <h3>Antique silver boho waist belt</h3>
          <p>₹399</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Antique silver boho waist belt",
              price: "₹399",
              img: "https://i.ibb.co/zT7tjnkX/a2.jpg",
            })
          }
        >
          {isInCart("Antique silver boho waist belt") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/HLv48TmM/a3.jpg" alt="" />
        <div className="item-info">
          <h3>Amethyst drop earrings</h3>
          <p>₹249</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Amethyst drop earrings",
              price: "₹249",
              img: "https://i.ibb.co/HLv48TmM/a3.jpg",
            })
          }
        >
          {isInCart("Amethyst drop earrings") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/ychbQCHW/a4.jpg" alt="" />
        <div className="item-info">
          <h3>Antique silver bracelet</h3>
          <p>₹149</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Antique silver bracelet",
              price: "₹149",
              img: "https://i.ibb.co/ychbQCHW/a4.jpg",
            })
          }
        >
          {isInCart("Antique silver bracelet") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/bg1sGQS4/a5.jpg" alt="" />
        <div className="item-info">
          <h3>Vintage denim hat</h3>
          <p>₹199</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Vintage denim hat",
              price: "₹199",
              img: "https://i.ibb.co/bg1sGQS4/a5.jpg",
            })
          }
        >
          {isInCart("Vintage denim hat") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
  
        </div>
      </section>

      <section id="footwear">
        <h1>Footwear</h1>
        <div className="item-grid">
        <div className="item">
        <img src="https://i.ibb.co/4gR66Ywr/f4.jpg" alt="" />
        <div className="item-info">
          <h3>Red Ballet Flats</h3>
          <p>₹999</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Red Ballet Flats",
              price: "₹999",
              img: "https://i.ibb.co/4gR66Ywr/f4.jpg",
            })
          }
        >
          {isInCart("Red Ballet Flats") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/PzfyNRX9/f5.jpg" alt="" />
        <div className="item-info">
          <h3>Adidas Cream Shoes</h3>
          <p>₹899</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Adidas Cream Shoes",
              price: "₹899",
              img: "https://i.ibb.co/PzfyNRX9/f5.jpg",
            })
          }
        >
          {isInCart("Adidas Cream Shoes") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/twJX7jd0/f3.jpg" alt="" />
        <div className="item-info">
          <h3>High-Top Converse</h3>
          <p>₹799</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "High-Top Converse",
              price: "₹799",
              img: "https://i.ibb.co/twJX7jd0/f3.jpg",
            })
          }
        >
          {isInCart("High-Top Converse") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/4ZSh7VTN/f2.jpg" alt="" />
        <div className="item-info">
          <h3>Brown wedged heels</h3>
          <p>₹699</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Brown wedged heels",
              price: "₹699",
              img: "https://i.ibb.co/4ZSh7VTN/f2.jpg",
            })
          }
        >
          {isInCart("Brown wedged heels") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="item">
        <img src="https://i.ibb.co/Xfx8QLqY/f1.jpg" alt="" />
        <div className="item-info">
          <h3>Cherry Red Heels</h3>
          <p>₹849</p>
        </div>
        <button
          className="cart-btn"
          onClick={() =>
            toggleCart({
              name: "Cherry Red Heels",
              price: "₹849",
              img: "https://i.ibb.co/Xfx8QLqY/f1.jpg",
            })
          }
        >
          {isInCart("Cherry Red Heels") ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
  
        </div>
      </section>
        </>
      ) : (
        <>
      <section id="shirts">
        <h1>Shirts</h1>
        <div class="item-grid">
        <div className="item">
  <img src="https://i.ibb.co/hxpbddqp/Whats-App-Image-2025-04-06-at-3-04-09-PM-3.jpg" alt="shirt" />
  <div className="item-info">
    <h3>Supreme metallic plaid short sleeved shirt</h3>
    <p>₹499</p>
  </div>
  <button
    className="cart-btn"
    onClick={() =>
      toggleCart({
        name: "Supreme metallic plaid short sleeved shirt",
        price: "₹499",
        img: "https://i.ibb.co/hxpbddqp/Whats-App-Image-2025-04-06-at-3-04-09-PM-3.jpg",
      })
    }
  >
    {isInCart("Supreme metallic plaid short sleeved shirt") ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

<div className="item">
  <img src="https://i.ibb.co/tp4N6Hm2/Whats-App-Image-2025-04-06-at-3-04-09-PM-2.jpg" alt="tshirt" />
  <div className="item-info">
    <h3>Striped beige short sleeve button down shirt</h3>
    <p>₹449</p>
  </div>
  <button
    className="cart-btn"
    onClick={() =>
      toggleCart({
        name: "Striped beige short sleeve button down shirt",
        price: "₹449",
        img: "https://i.ibb.co/tp4N6Hm2/Whats-App-Image-2025-04-06-at-3-04-09-PM-2.jpg",
      })
    }
  >
    {isInCart("Striped beige short sleeve button down shirt") ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

<div className="item">
  <img src="https://i.ibb.co/mVQcW87k/Whats-App-Image-2025-04-06-at-3-04-10-PM.jpg" alt="pant" />
  <div className="item-info">
    <h3>Brown short sleeved linen shirt</h3>
    <p>₹599</p>
  </div>
  <button
    className="cart-btn"
    onClick={() =>
      toggleCart({
        name: "Brown short sleeved linen shirt",
        price: "₹599",
        img: "https://i.ibb.co/mVQcW87k/Whats-App-Image-2025-04-06-at-3-04-10-PM.jpg",
      })
    }
  >
    {isInCart("Brown short sleeved linen shirt") ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

<div className="item">
  <img src="https://i.ibb.co/PvzKhcyV/shopping.png" alt="acc" />
  <div className="item-info">
    <h3>Green high sleeved shirt</h3>
    <p>₹529</p>
  </div>
  <button
    className="cart-btn"
    onClick={() =>
      toggleCart({
        name: "Green high sleeved shirt",
        price: "₹529",
        img: "https://i.ibb.co/PvzKhcyV/shopping.png",
      })
    }
  >
    {isInCart("Green high sleeved shirt") ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

        </div>  
        </section>

      <section id="tshirts">
        <h1>T-Shirts</h1>
        <div class="item-grid">
        <div className="item">
  <img src="https://i.ibb.co/237zKb86/Whats-App-Image-2025-04-06-at-3-04-09-PM-1.jpg" alt="Vintage autoboy tee" />
  <div className="item-info">
    <h3>Vintage autoboy tee</h3>
    <p>₹699</p>
  </div>
  <button
    className="cart-btn"
    onClick={() =>
      toggleCart({
        name: "Vintage autoboy tee",
        price: "₹699",
        img: "https://i.ibb.co/237zKb86/Whats-App-Image-2025-04-06-at-3-04-09-PM-1.jpg",
      })
    }
  >
    {isInCart("Vintage autoboy tee") ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

<div className="item">
  <img src="https://i.ibb.co/Y7WStW5v/Whats-App-Image-2025-04-06-at-3-04-08-PM-2.jpg" alt="Men graphic tee vintage racing" />
  <div className="item-info">
    <h3>Men graphic tee vintage racing</h3>
    <p>₹569</p>
  </div>
  <button
    className="cart-btn"
    onClick={() =>
      toggleCart({
        name: "Men graphic tee vintage racing",
        price: "₹569",
        img: "https://i.ibb.co/Y7WStW5v/Whats-App-Image-2025-04-06-at-3-04-08-PM-2.jpg",
      })
    }
  >
    {isInCart("Men graphic tee vintage racing") ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

<div className="item">
  <img src="https://i.ibb.co/Cp0vh1L8/Whats-App-Image-2025-04-06-at-3-04-09-PM.jpg" alt="Oversized men graphic tee" />
  <div className="item-info">
    <h3>Oversized men graphic tee</h3>
    <p>₹945</p>
  </div>
  <button
    className="cart-btn"
    onClick={() =>
      toggleCart({
        name: "Oversized men graphic tee",
        price: "₹945",
        img: "https://i.ibb.co/Cp0vh1L8/Whats-App-Image-2025-04-06-at-3-04-09-PM.jpg",
      })
    }
  >
    {isInCart("Oversized men graphic tee") ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

<div className="item">
  <img src="https://i.ibb.co/p6kXXJZZ/Whats-App-Image-2025-04-06-at-3-04-08-PM-1.jpg" alt="White and navy blue tshirt for men" />
  <div className="item-info">
    <h3>White and navy blue tshirt for men</h3>
    <p>₹769</p>
  </div>
  <button
    className="cart-btn"
    onClick={() =>
      toggleCart({
        name: "White and navy blue tshirt for men",
        price: "₹769",
        img: "https://i.ibb.co/p6kXXJZZ/Whats-App-Image-2025-04-06-at-3-04-08-PM-1.jpg",
      })
    }
  >
    {isInCart("White and navy blue tshirt for men") ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

        </div>
      </section>

      <section id="pants">
  <h1>Pants</h1>
  <div className="item-grid">
    <div className="item">
      <img src="https://i.ibb.co/Qjm0K74b/Whats-App-Image-2025-04-06-at-3-04-12-PM.jpg" alt="Retro loose wide legged jorts" />
      <div className="item-info">
        <h3>Retro loose wide legged jorts</h3>
        <p>₹569</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Retro loose wide legged jorts",
            price: "₹569",
            img: "https://i.ibb.co/Qjm0K74b/Whats-App-Image-2025-04-06-at-3-04-12-PM.jpg",
          })
        }
      >
        {isInCart("Retro loose wide legged jorts") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/HLSZDR9R/Whats-App-Image-2025-04-06-at-3-04-11-PM-1.jpg" alt="Baggy jinco dragon cargo shorts" />
      <div className="item-info">
        <h3>Baggy jinco dragon cargo shorts</h3>
        <p>₹479</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Baggy jinco dragon cargo shorts",
            price: "₹479",
            img: "https://i.ibb.co/HLSZDR9R/Whats-App-Image-2025-04-06-at-3-04-11-PM-1.jpg",
          })
        }
      >
        {isInCart("Baggy jinco dragon cargo shorts") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/TBVRyrkx/Whats-App-Image-2025-04-06-at-3-04-11-PM-2.jpg" alt="Light washed wide legged demin jeans" />
      <div className="item-info">
        <h3>Light washed wide legged demin jeans</h3>
        <p>₹529</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Light washed wide legged demin jeans",
            price: "₹529",
            img: "https://i.ibb.co/TBVRyrkx/Whats-App-Image-2025-04-06-at-3-04-11-PM-2.jpg",
          })
        }
      >
        {isInCart("Light washed wide legged demin jeans") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/HT7LBxXy/Whats-App-Image-2025-04-06-at-3-04-10-PM-2.jpg" alt="Wide legged ripped black jeans" />
      <div className="item-info">
        <h3>Wide legged ripped black jeans</h3>
        <p>₹799</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Wide legged ripped black jeans",
            price: "₹799",
            img: "https://i.ibb.co/HT7LBxXy/Whats-App-Image-2025-04-06-at-3-04-10-PM-2.jpg",
          })
        }
      >
        {isInCart("Wide legged ripped black jeans") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/sJDDjpFv/Whats-App-Image-2025-04-06-at-3-04-11-PM.jpg" alt="Nike navy track pants" />
      <div className="item-info">
        <h3>Nike navy track pants</h3>
        <p>₹999</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Nike navy track pants",
            price: "₹999",
            img: "https://i.ibb.co/sJDDjpFv/Whats-App-Image-2025-04-06-at-3-04-11-PM.jpg",
          })
        }
      >
        {isInCart("Nike navy track pants") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  </div>
</section>

<section id="accessories">
  <h1>Accessories</h1>
  <div className="item-grid">
    <div className="item">
      <img src="https://i.ibb.co/RG2vLv3g/Whats-App-Image-2025-04-06-at-3-04-06-PM-1.jpg" alt="G shock casio vintage watch" />
      <div className="item-info">
        <h3>G shock casio vintage watch</h3>
        <p>₹249</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "G shock casio vintage watch",
            price: "₹249",
            img: "https://i.ibb.co/RG2vLv3g/Whats-App-Image-2025-04-06-at-3-04-06-PM-1.jpg",
          })
        }
      >
        {isInCart("G shock casio vintage watch") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/Gfb1mY8Q/Whats-App-Image-2025-04-06-at-3-04-06-PM.jpg" alt="Collection of 4 vintage men's rings" />
      <div className="item-info">
        <h3>Collection of 4 vintage men's rings</h3>
        <p>₹359</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Collection of 4 vintage men's rings",
            price: "₹359",
            img: "https://i.ibb.co/Gfb1mY8Q/Whats-App-Image-2025-04-06-at-3-04-06-PM.jpg",
          })
        }
      >
        {isInCart("Collection of 4 vintage men's rings") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/gF7QTPxj/Whats-App-Image-2025-04-06-at-3-04-05-PM-5.jpg" alt="Wabi Sabi sunglasses" />
      <div className="item-info">
        <h3>Wabi Sabi sunglasses</h3>
        <p>₹199</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Wabi Sabi sunglasses",
            price: "₹199",
            img: "https://i.ibb.co/gF7QTPxj/Whats-App-Image-2025-04-06-at-3-04-05-PM-5.jpg",
          })
        }
      >
        {isInCart("Wabi Sabi sunglasses") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/qYwcj2SY/Whats-App-Image-2025-04-06-at-3-04-04-PM.jpg" alt="Men Casual brown belt" />
      <div className="item-info">
        <h3>Men Casual brown belt</h3>
        <p>₹229</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Men Casual brown belt",
            price: "₹229",
            img: "https://i.ibb.co/qYwcj2SY/Whats-App-Image-2025-04-06-at-3-04-04-PM.jpg",
          })
        }
      >
        {isInCart("Men Casual brown belt") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/LhJ4Jb1x/Whats-App-Image-2025-04-06-at-3-04-04-PM-1.jpg" alt="Vintage distressed grey denim hat" />
      <div className="item-info">
        <h3>Vintage distressed grey denim hat</h3>
        <p>₹179</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Vintage distressed grey denim hat",
            price: "₹179",
            img: "https://i.ibb.co/LhJ4Jb1x/Whats-App-Image-2025-04-06-at-3-04-04-PM-1.jpg",
          })
        }
      >
        {isInCart("Vintage distressed grey denim hat") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  </div>
</section>

<section id="footwear">
  <h1>Footwear</h1>
  <div className="item-grid">
    <div className="item">
      <img src="https://i.ibb.co/xqt2BwkB/Whats-App-Image-2025-04-06-at-3-04-08-PM.jpg" alt="Jacques brown loafers for men" />
      <div className="item-info">
        <h3>Jacques brown loafers for men</h3>
        <p>₹689</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Jacques brown loafers for men",
            price: "₹689",
            img: "https://i.ibb.co/xqt2BwkB/Whats-App-Image-2025-04-06-at-3-04-08-PM.jpg",
          })
        }
      >
        {isInCart("Jacques brown loafers for men") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/GvLhBcKy/Whats-App-Image-2025-04-06-at-3-04-07-PM-2.jpg" alt="Puma speedcat- men" />
      <div className="item-info">
        <h3>Puma speedcat- men</h3>
        <p>₹999</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Puma speedcat- men",
            price: "₹999",
            img: "https://i.ibb.co/GvLhBcKy/Whats-App-Image-2025-04-06-at-3-04-07-PM-2.jpg",
          })
        }
      >
        {isInCart("Puma speedcat- men") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/Gfhrw36C/Whats-App-Image-2025-04-06-at-3-04-07-PM-1.jpg" alt="Ray Tracer Tr 2- men" />
      <div className="item-info">
        <h3>Ray Tracer Tr 2- men</h3>
        <p>₹699</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Ray Tracer Tr 2- men",
            price: "₹699",
            img: "https://i.ibb.co/Gfhrw36C/Whats-App-Image-2025-04-06-at-3-04-07-PM-1.jpg",
          })
        }
      >
        {isInCart("Ray Tracer Tr 2- men") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/x8Ls3shg/Whats-App-Image-2025-04-06-at-3-04-07-PM.jpg" alt="New balance 2002R in phantom" />
      <div className="item-info">
        <h3>New balance 2002R in phantom</h3>
        <p>₹799</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "New balance 2002R in phantom",
            price: "₹799",
            img: "https://i.ibb.co/x8Ls3shg/Whats-App-Image-2025-04-06-at-3-04-07-PM.jpg",
          })
        }
      >
        {isInCart("New balance 2002R in phantom") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>

    <div className="item">
      <img src="https://i.ibb.co/4ZFw3bfv/Whats-App-Image-2025-04-06-at-3-04-06-PM-3.jpg" alt="Arvi hakiki penny loafers" />
      <div className="item-info">
        <h3>Arvi hakiki penny loafers</h3>
        <p>₹769</p>
      </div>
      <button
        className="cart-btn"
        onClick={() =>
          toggleCart({
            name: "Arvi hakiki penny loafers",
            price: "₹769",
            img: "https://i.ibb.co/4ZFw3bfv/Whats-App-Image-2025-04-06-at-3-04-06-PM-3.jpg",
          })
        }
      >
        {isInCart("Arvi hakiki penny loafers") ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  </div>
</section>


    
      </>
     )}
  </div>
      );
};

export default ClothingTypes;
