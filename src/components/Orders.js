import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./diks.css";

const Orders = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("loggedInUser");

  const sampleOrders = [
    {
      id: "ORD001",
      item: "Vintage Denim Jacket",
      date: "2025-04-03",
      status: "Shipped",
    },
    {
      id: "ORD002",
      item: "Retro Graphic Tee",
      date: "2025-04-01",
      status: "Out for Delivery",
    },
  ];
 
  if (!email) {
    navigate("/login");
    return null;
  }

  return (
    <div className="orders-page">
      <div className="sidebar">
        <button onClick={() => navigate("/profile")}>Overview</button>
        <button onClick={() => navigate("/orders")}>Orders</button>
        <button onClick={() => navigate("/delete")}>Delete Account</button>
        <button onClick={() => {
          localStorage.removeItem("loggedInUser");
          navigate("/");
        }}>Logout</button>
      </div>

      <div className="orders-content">
        <h2>Order History</h2>
        <div className="order-list">
          {sampleOrders.map((order) => (
            <div className="order-item" key={order.id}>
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Item:</strong> {order.item}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <Link to="/track" className="track-link">Track Order</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;