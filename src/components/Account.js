// src/pages/Account.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("loggedInUser");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const userDetails = users[email]?.details;

    if (userDetails) {
      setUserData(userDetails);
    } else {
      navigate("/login");
    }
  }, [email, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      const users = JSON.parse(localStorage.getItem("users")) || {};
      delete users[email];
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.removeItem("loggedInUser");
      navigate("/login", { state: { deleted: true } });

    }
  };
  

  return (
    <div className="account-container">
      <div className="account-card">
        <h2>Welcome to Your Account</h2>
        {userData ? (
          <div className="account-info">
            <p><strong>Full Name:</strong> {userData.fullName}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Alt Phone:</strong> {userData.altPhone}</p>
            <p><strong>Location:</strong> {userData.location}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}

        <div className="account-actions">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/cart")}>Cart</button>
          <button onClick={() => navigate("/men")}>Men</button>
          <button onClick={() => navigate("/women")}>Women</button>
        </div>

        <div className="auth-actions">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
          <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
