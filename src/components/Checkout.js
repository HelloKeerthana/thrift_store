import React from "react";
import { jsPDF } from "jspdf";

const Checkout = ({ cartItems, userEmail, total }) => {
  const handleCheckout = () => {
    console.log("Checkout triggered ✅");

    // Create a new jsPDF instance to generate PDF
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();
    const orderId = Math.floor(Math.random() * 1000000); // Random order ID for now

    // Add content to the PDF
    doc.setFontSize(18);
    doc.text("Order Receipt", 20, 20);  // Title of the receipt

    doc.setFontSize(12);
    doc.text(`Order ID: #${orderId}`, 20, 30);
    doc.text(`Date: ${date}`, 20, 37);
    doc.text(`Email: ${userEmail}`, 20, 44);

    // Add items to the PDF
    let yOffset = 60;
    doc.setFont("helvetica", "bold");
    doc.text("Items:", 20, yOffset);
    doc.setFont("helvetica", "normal");

    // Iterate over the cart items and display them in the PDF
    cartItems.forEach((item, index) => {
      yOffset += 10;
      doc.text(`${index + 1}. ${item.name} - ₹${item.price}`, 20, yOffset);
    });

    yOffset += 15;
    doc.setFont("helvetica", "bold");
    doc.text(`Total: ₹${total}`, 20, yOffset);

    // Prepare the order data for sending to backend
    const orderData = {
      userEmail,
      total,
      orderId,
      date,
      items: cartItems,
    };

    console.log("Sending to backend:", orderData);

    // Send order data to the backend PHP file for saving to DB
    fetch("http://localhost/store/backend/save_order.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => null);
        if (!data) {
          throw new Error("Failed to parse JSON. Check PHP output.");
        }
        if (data.status === "success") {
          console.log("Order saved:", data);
          doc.save(`Order_#${orderId}.pdf`);
        } else {
          console.error("Order failed:", data.message || data);
          alert("Order submission failed: " + (data.message || "Unknown error"));
        }
      })
      .catch((err) => {
        console.error("Fetch or parse failed:", err);
        alert("Order submission failed. See console for details.");
      });
  };

  return (
    <button className="checkout-btn" onClick={handleCheckout}>
      Checkout
    </button>
  );
};

export default Checkout;
