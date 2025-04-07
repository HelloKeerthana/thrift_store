// src/ResetPassword.js
import React, { useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./diks.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
   if (location.state?.email) {
     setEmail(location.state.email);
   }
  }, [location]);

  const handleReset = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const user = users[email];

    if (!email || !newPassword || !confirmPassword) {
      setMessage("All fields are required.");
      return;
    }

    if (!user) {
      setMessage("Email not found.");
      return;
    }

    if (newPassword.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    users[email].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Password reset successful!");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleReset}>Reset Password</button>
      {message && <p style={{ marginTop: "10px", color: "crimson" }}>{message}</p>}
    </div>
  );
};

export default ResetPassword;
