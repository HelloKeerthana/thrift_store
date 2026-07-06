// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 

import SaleMarquee from "./components/SaleMarquee";
import Navbar from "./components/Navbar";
import PopularItems from "./components/PopularItems";
import ShopNow from "./components/ShopNow";
import ClothingTypes from "./components/ClothingTypes";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults"; 
import Cart from "./components/Cart";
import Signupform from './components/Signupform';
import Signup from './components/Signup';
import Orders from './components/Orders';
import TrackOrder from './components/TrackOrder';
import DeleteAccount from './components/DeleteAccount';
import Profile from './components/Profile';
import Account from './components/Account';
import Login from "./components/Login"; 
import ResetPassword from "./components/ResetPassword";
import allItems from "./components/itemsData";
import CheckOut from "./components/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";

const userEmail = localStorage.getItem("loggedInUser");

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update auth state when location changes or on first load
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const email = localStorage.getItem("loggedInUser");

    if (email && users[email]) {
      setUser({ email });
      setProfileComplete(!!users[email].details);
    } else {
      setUser(null);
      setProfileComplete(false);
    }

    setLoading(false);
  }, [location]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <SaleMarquee />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            !user ? (
              <Login />
            ) : !profileComplete ? (
              <Signupform email={user.email} setProfileComplete={setProfileComplete} />
            ) : (
              <>
                <PopularItems />
                <ShopNow />
                <Footer />
              </>
            )
          }
        />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/delete" element={<DeleteAccount />} />
        <Route path="/search" element={<SearchResults allItems={allItems} />} />
        <Route path="/new" element={<ShopNow />} />
        <Route path="/women" element={<ClothingTypes category="women" />} />
        <Route path="/men" element={<ClothingTypes category="men" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<ProtectedRoute><CheckOut /></ProtectedRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupform" element={<Signupform email={userEmail} setProfileComplete={setProfileComplete} />} />
      </Routes>
    </>
  );
}

export default App;
