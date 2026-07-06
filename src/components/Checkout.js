import React from "react";
import { jsPDF } from "jspdf";

const Checkout = ({ cartItems, userEmail, total }) => {
  const handleCheckout = () => {
    console.log("Checkout triggered ✅");

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

    // Mock success path: always pretend the order was created successfully.
    const mockResponse = {
      status: "success",
      order_id: orderId,
      message: "Mock checkout complete. Order placed successfully.",
    };

    console.log("Mock checkout response:", mockResponse);
    console.log("Mock order data:", orderData);

    // Original backend attempt kept below as dormant reference.
    // This block never runs because the mock path above always completes.
    if (false) {
      const apiBaseUrl = process.env.REACT_APP_API_URL || "https://kirabackend.xo.je";
      const endpoint = `${apiBaseUrl}/backend/save_order.php`;
      const formBody = new URLSearchParams();

      Object.entries(orderData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formBody.append(key, JSON.stringify(value));
        } else {
          formBody.append(key, String(value));
        }
      });

      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Accept: "application/json",
        },
        body: formBody.toString(),
        mode: "cors",
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
    }

    console.log("Order placed successfully (mock mode)");
    doc.save(`Order_#${orderId}.pdf`);
    alert("Order placed successfully! Receipt downloaded.");
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
