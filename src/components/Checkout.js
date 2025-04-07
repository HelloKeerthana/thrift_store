import React from "react";
import { jsPDF } from "jspdf";

const Checkout = ({ cartItems, userEmail, total }) => {
  const handleCheckout = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();
    const orderId = Math.floor(Math.random() * 1000000);

    doc.setFontSize(18);
    doc.text("Order Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: #${orderId}`, 20, 30);
    doc.text(`Date: ${date}`, 20, 37);
    doc.text(`Email: ${userEmail}`, 20, 44);

    let yOffset = 60;
    doc.setFont("helvetica", "bold");
    doc.text("Items:", 20, yOffset);
    doc.setFont("helvetica", "normal");

    cartItems.forEach((item, index) => {
      yOffset += 10;
      doc.text(`${index + 1}. ${item.name} - ${item.price}`, 20, yOffset);
    });

    yOffset += 15;
    doc.setFont("helvetica", "bold");
    doc.text(`Total: ₹${total}`, 20, yOffset);

    doc.save(`Order_#${orderId}.pdf`);
  };

  return (
    <button className="checkout-btn" onClick={handleCheckout}>
      Checkout
    </button>
  );
};

export default Checkout;
