import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div
          className="logo-container"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <Logo />
          <span className="brand-name">Once Upon a Find</span>
        </div>

        <button className="nav-button" onClick={() => navigate("/women")}>
          Women
        </button>
        <button className="nav-button" onClick={() => navigate("/men")}>
          Men
        </button>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <div className="navbar-right">
        <div className="cart-icon-wrapper" onClick={() => navigate("/cart")}>
          <FaShoppingCart className="icon cart-icon" style={{ cursor: "pointer" }} />
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png"
          alt="User"
          className="profile-image"
          onClick={() => navigate("/account")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
