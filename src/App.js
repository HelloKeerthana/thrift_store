// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Auth from "./components/Aut"; 
import { getUser } from "./components/auth";
import SaleMarquee from "./components/SaleMarquee";
import Navbar from "./components/Navbar";
import PopularItems from "./components/PopularItems";
import ShopNow from "./components/ShopNow";
import ClothingTypes from "./components/ClothingTypes";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults"; 
import Cart from "./components/Cart";
import Signupform from './components/Signupform';
import Orders from './components/Orders';
import TrackOrder from './components/TrackOrder';
import DeleteAccount from './components/DeleteAccount';
import Profile from './components/Profile';
import Account from './components/Account';
import Login from "./components/Login"; 
import ResetPassword from "./components/ResetPassword";
import allItems from "./components/itemsData";
import CheckOut from "./components/Checkout";


const userEmail = localStorage.getItem("loggedInUser");



function App() {
  const [user, setUser] = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        const email = userData.email;
        const users = JSON.parse(localStorage.getItem("users")) || {};
        
        // If new user, mark profile as incomplete
        if (!users[email] || !users[email].details) {
          setProfileComplete(false);
        } else {
          localStorage.setItem("loggedInUser", email);
          setProfileComplete(true);
        }

        setUser(userData);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <Auth />;
  if (!profileComplete) return <Signupform email={user.email} setProfileComplete={setProfileComplete} />;

  return (
    <>
      <SaleMarquee />
      <Navbar />
      <Routes>
        <Route path="/" element={<><PopularItems /><ShopNow /><Footer /></>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/delete" element={<DeleteAccount />} />
        <Route path="/search" element={<SearchResults allItems={allItems} />} />
        <Route path="/new" element={<ShopNow />} />
        <Route path="/women" element={<ClothingTypes category="women" />} />
        <Route path="/men" element={<ClothingTypes category="men" />} />
        <Route path="/cart" element={<Cart /> } />
        <Route path="/checkout" element={<CheckOut /> } />
        <Route path="/signup" element={<Signupform email={userEmail} setProfileComplete={setProfileComplete} />}
/>
      </Routes>
    </>
  );
}

export default App;
