"use client";

import { useCallback } from "react";
import { whatsappNumber } from "@/lib/utils";
import { FaLock } from "react-icons/fa";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

interface Props {
  vehicle: string;
  price: string;
  category: string;
}

export default function RazorpayButton({ vehicle, price, category }: Props) {
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ""), 10);

  const handlePayment = useCallback(async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: numericPrice * 50, vehicle }),
    });
    const data = await res.json();
    if (!data.orderId) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_XXXXXXXXXXXXXXXX",
        amount: data.amount,
        currency: "INR",
        name: "BDL Travels",
        description: `${vehicle} - ${category}`,
        order_id: data.orderId,
        handler: () => {
          const msg = `Hi BDL Travels! I've paid for ${vehicle} (${category}) at ₹${price}. Please confirm my booking.`;
          window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
        },
        prefill: { contact: "", name: "" },
        theme: { color: "#0A4DFF" },
      };
      new window.Razorpay(options).open();
    };
    document.body.appendChild(script);
  }, [vehicle, price, category, numericPrice]);

  return (
    <button
      type="button"
      onClick={handlePayment}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "#0A4DFF",
        color: "white",
        padding: "8px 16px",
        borderRadius: "30px",
        fontSize: "13px",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
      }}
    >
      <FaLock size={12} />
      Pay Now
    </button>
  );
}
