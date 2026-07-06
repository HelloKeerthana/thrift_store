// components/Signupform.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./diks.css";

const Signupform = ({ email: propEmail, setProfileComplete }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromState = location.state?.email;
  const email = emailFromState || propEmail || localStorage.getItem("loggedInUser") || "";

  const [profileData, setProfileData] = useState({
    fullName: "",
    phone: "",
    location: "",
    altPhone: "",
    email,
  });

  useEffect(() => {
    // keep email synced if navigate provided it later
    setProfileData((p) => ({ ...p, email }));
  }, [email]);

  const handleChange = (e) => { 
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email]) {
      users[email].details = profileData; // ✅ keep password, add details
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", email);
      setProfileComplete(true);
      navigate("/");
    }
  };

  return (
    <div className="signup-form">
      <h2>Complete your profile</h2>
      {["fullName", "phone", "location", "altPhone"].map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input
            type="text"
            name={field}
            value={profileData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <p>Email: {email}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Signupform;
