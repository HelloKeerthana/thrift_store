// src/Auth.js
import React, { useState, useEffect } from 'react';
import { loginWithGoogle, logoutUser, getUser } from "./auth";
import Signupform from './Signupform';
import { useNavigate } from 'react-router-dom';

const Aut = () => {
  const [user, setUser] = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await getUser();
        if (userData) {
          setUser(userData);
          localStorage.setItem("loggedInUser", userData.email); // ✅ Store email
          const users = JSON.parse(localStorage.getItem("users")) || {};
          if (users[userData.email] && users[userData.email].details) {
            setProfileComplete(true);
          }
        }
      } catch {
        setUser(null);
        setProfileComplete(false);
      }
    };

    checkUser();
  }, []);

  if (!user) {
    return <button onClick={loginWithGoogle}>Login with Google</button>;
  }

  if (!profileComplete) {
    return (
      <Signupform
        email={user.email}
        setProfileComplete={setProfileComplete}
      />
    );
  }

  return (
    <div>
      <p>Welcome, {user.name || user.email}!</p>
      <button onClick={logoutUser}>Logout</button>
      <button onClick={() => navigate("/profile")}>Go to Profile</button>
    </div>
  );
};

export default Aut;
