import React from "react";
import { Link } from "react-router-dom";
import "./diks.css";

const TrackOrder = () => {
  return (
    <div className="track-page">
      <h2>Track Your Order</h2>
      <p>Your order is on its way! 🚚</p>
      <Link to="/orders">← Back to Orders</Link>
    </div>
  );
};

export default TrackOrder;