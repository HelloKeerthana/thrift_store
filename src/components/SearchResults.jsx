import React from "react";
import { useLocation } from "react-router-dom";
import "./SearchResults.css";
import { useCart } from "./CartContext";
import allItems from "./itemsData";

const SearchResults = () => {
  const location = useLocation();
  const { cartItems, addToCart, removeFromCart } = useCart();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q")?.toLowerCase() || "";

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  const isInCart = (item) => {
    return cartItems.some((i) => i.name === item.name);
  };

  return (
    <div className="search-results-container">
      <h2>Search Results for "{query}"</h2>
      {filteredItems.length === 0 ? (
        <p>No items match your search.</p>
      ) : (
        <div className="results-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="search-item-card">
              <img src={item.img} alt={item.name} />
              <div className="search-item-details">
                <p className="search-item-name">{item.name}</p>
                <p className="search-item-price">{item.price}</p>
                <button
                  onClick={() =>
                    isInCart(item) ? removeFromCart(item) : addToCart(item)
                  }
                >
                  {isInCart(item) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
