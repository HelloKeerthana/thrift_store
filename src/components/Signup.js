// components/Signup.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./diks.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) { 
      setError("Invalid email format.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
      setError("Account already exists. Please log in.");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      users[email] = { password, details: null }; // ✅ always include details
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", email);
      navigate("/signupform"); // go to profile completion
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 8 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Confirm</button>
        {error && <p className="error">{error}</p>}
      </form>

      <div className="terms-links">
        <Link to="/terms" target="_blank">Terms of Use</Link> |
        <Link to="/privacy" target="_blank">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Signup;
