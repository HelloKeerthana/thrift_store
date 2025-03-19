import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import SaleMarquee from "./components/SaleMarquee";
import Navbar from "./components/Navbar";
import PopularItems from "./components/PopularItems";
import ShopNow from "./components/ShopNow";
import ClothingTypes from "./components/ClothingTypes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Logo />
      <SaleMarquee />
      <Navbar />
      <PopularItems />
      <ShopNow />
      <ClothingTypes />
      <Footer />
    </div>
  );
}

export default App;
