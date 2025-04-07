import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./diks.css";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const handleDelete = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const currentUser = users[loggedInUser];

    if (!currentUser) {
      setError("User not found.");
      return;
    }

    if (emailInput !== loggedInUser || passwordInput !== currentUser.password) {
      setError("Email or password is incorrect.");
      return;
    }

    delete users[loggedInUser];
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("loggedInUser");

    alert("Account deleted successfully.");
    navigate("/");
  };

  return (
    <div className="delete-account-page">
      <h2>Delete Account</h2>
      <p>Please confirm your email and password to delete your account:</p>

      <div className="field-group">
        <label>Email</label>
        <input
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>

      <div className="field-group">
        <label>Password</label>
        <input
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default DeleteAccount;