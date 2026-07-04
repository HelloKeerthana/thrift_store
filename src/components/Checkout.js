import React from "react";
import { jsPDF } from "jspdf";

const Checkout = ({ cartItems, userEmail, total }) => {
  const handleCheckout = () => {
    console.log("Checkout triggered ");

    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();
    const orderId = Math.floor(Math.random() * 1000000);

    // PDF header
    doc.setFontSize(18);
    doc.text("Order Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: #${orderId}`, 20, 30);
    doc.text(`Date: ${date}`, 20, 37);
    doc.text(`Email: ${userEmail}`, 20, 44);

    // Items
    let yOffset = 60;
    doc.setFont("helvetica", "bold");
    doc.text("Items:", 20, yOffset);
    doc.setFont("helvetica", "normal");

    cartItems.forEach((item, index) => {
      yOffset += 10;
      doc.text(`${index + 1}. ${item.name} - ₹${item.price}`, 20, yOffset);
    });

    yOffset += 15;
    doc.setFont("helvetica", "bold");
    doc.text(`Total: ₹${total}`, 20, yOffset);

    // Order data
    const orderData = {
      userEmail,
      total,
      orderId,
      date,
      items: cartItems,
    };

    // Use environment variable or fallback
    // const apiBaseUrl = process.env.REACT_APP_API_URL || "http://localhost/store";
    const apiBaseUrl = "https://kirabackend.xo.je";


    console.log("Sending to backend:", orderData);

    fetch(`${apiBaseUrl}/backend/save_order.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => null);
        if (!data) {
          throw new Error("Failed to parse JSON. Check PHP output.");
        }

        const isSuccess =
          data.status === "success" || data.status === "Order Placed";
        if (isSuccess) {
          console.log("Order saved:", data);
          doc.save(`Order_#${orderId}.pdf`);
        } else {
          console.error("Order failed:", data.message || data);
          alert("Order failed (demo mode)");
        }
      })
      .catch((err) => {
        console.error("Fetch or parse failed:", err);
        alert("Order submission failed. See console for details.");
      });
  };

  return (
    <div>
      <p style={{ marginBottom: "8px", fontSize: "0.9rem", color: "#666" }}>
        Demo mode: no database connected. Receipt generation still works.
      </p>
      <button className="checkout-btn" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
