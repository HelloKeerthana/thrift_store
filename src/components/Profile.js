import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./diks.css";

const Profile = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("loggedInUser");

  const [profileData, setProfileData] = useState({
    fullName: "",
    phone: "",
    location: "",
    altPhone: "",
    email: email || "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/login");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email]?.details) {
      setProfileData(users[email].details);
    }
  }, [email, navigate]);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    users[email].details = profileData;
    localStorage.setItem("users", JSON.stringify(users));
    setEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="profile-wrapper">
      <div className="sidebar">
        <button onClick={() => navigate("/profile")}>Overview</button>
        <button onClick={() => navigate("/orders")}>Orders</button>
        <button onClick={() => navigate("/delete")}>Delete Account</button>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="profile-content">
        <div className="profile-header">
          <h2>Profile Details</h2>
          <span
            className="edit-icon"
            onClick={() => setEditMode(true)}
            title="Edit"
          >
            ✏️
          </span>
        </div>

        <div className="profile-fields">
          {["fullName", "phone", "email", "location", "altPhone"].map((field) => (
            <div key={field} className="field-group">
              <label>
                {field === "fullName"
                  ? "Full Name"
                  : field === "phone"
                  ? "Phone Number"
                  : field === "email"
                  ? "Email ID"
                  : field === "location"
                  ? "Location"
                  : "Alternate Mobile"}
              </label>
              <input
                type="text"
                name={field}
                value={profileData[field]}
                onChange={handleChange}
                disabled={!editMode || field === "email"}
              />
            </div>
          ))}
        </div>

        {editMode && (
          <div className="action-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditMode(false)}>Confirm</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;