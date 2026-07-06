// src/Login.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./diks.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const logged = localStorage.getItem("loggedInUser");
    if (logged) navigate("/");
  }, [navigate]);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = (e) => {
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
    const user = users[email];

    if (!user) {
      setError("Account not found. Please sign up.");
    } else if (user.password !== password) {
      setError("Incorrect password.");
    } else {
      localStorage.setItem("loggedInUser", email);
      navigate("/profile");
    }
  };

  const goToSignup = () => {
    navigate("/signup", { state: { email } });
  };

  const goToReset = () => {
    navigate("/reset", { state: { email } });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      {location.state?.deleted && (
        <p className="info-msg">
          Account deleted successfully.{" "}
          <span className="link" onClick={goToSignup}>Create new account</span>
        </p>
      )}

      <form onSubmit={handleLogin}>
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
        <button type="submit">Submit</button>
        {error && (
          <p className="error">
            {error}
            {error.includes("sign up") && (
              <span className="link" onClick={goToSignup}> Sign up here</span>
            )}
          </p>
        )}
      </form>

      <p className="link" style={{ marginTop: "10px" }} onClick={goToReset}>
        Forgot Password?
      </p>
    </div>
  );
};

export default Login;
