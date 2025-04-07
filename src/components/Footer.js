import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showStory, setShowStory] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="/women">Women</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/new">New Arrivals</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="www.google.com">Contact Us</a></li>
            <li><a href="www.google.com">Returns</a></li>
            <li><a href="www.google.com">Track Order</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 onClick={() => setShowStory(!showStory)} className="clickable">Our Story</h3>
          {showStory && (
            <p className="about-text">
              Once Upon a Find is a passion project by four girls who love fashion, tech, and dreams.
              We built this platform to help you express your style in the most beautiful way possible.
            </p>
          )}
        </div>

         <div className="footer-section">
        <h3 onClick={() => setShowSocials(!showSocials)} className="clickable">Follow Us</h3>
        {showSocials && (
          <div className="social-icons">
            <p>📸 Instagram</p>
            <p>📘 Facebook</p>
            <p>🐦 Twitter</p>
          </div>
          
        )}
      </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Once Upon a Find. Built with love by 4 girls 💖</p>
      </div>
    </footer>
  );
};

export default Footer;
