"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteName, whatsappNumber } from "@/lib/utils";
import { FaCheckCircle, FaPrint, FaDownload, FaWhatsapp, FaHome } from "react-icons/fa";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "N/A";
  const name = searchParams.get("name") || "Guest";
  const vehicle = searchParams.get("vehicle") || "N/A";
  const total = searchParams.get("total") || "0";
  const payment = searchParams.get("payment") || "upi";

  const paymentLabels: Record<string, string> = {
    upi: "UPI Payment", card: "Credit/Debit Card", netbanking: "Net Banking", wallet: "Wallet", cod: "Cash on Pickup",
  };

  useEffect(() => {
    fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, vehicle, total, payment, status: "confirmed" }),
    }).catch(() => {});
  }, [id, name, vehicle, total, payment]);

  const handleDownload = () => {
    const html = `<!DOCTYPE html><html><head><title>Booking Confirmation - ${id}</title><style>
      body{font-family:Arial,sans-serif;padding:40px;max-width:600px;margin:0 auto;color:#333}
      h1{color:#059669;text-align:center}.header{text-align:center;margin-bottom:30px}
      .badge{background:#0F2B46;color:white;padding:8px 16px;border-radius:8px;font-size:14px;letter-spacing:1px;display:inline-block}
      .details{border-top:2px solid #eee;padding-top:20px}.row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f5f5f5}
      .label{color:#888}.value{font-weight:600}.total{font-size:20px;color:#059669;font-weight:800;text-align:right;margin-top:15px}
      .footer{text-align:center;margin-top:40px;color:#999;font-size:13px}
    </style></head><body>
    <div class="header"><h1>✅ Booking Confirmed</h1><p>${siteName}</p></div>
    <div style="text-align:center;margin-bottom:20px"><span class="badge">${id}</span></div>
    <div class="details">
      <div class="row"><span class="label">Customer</span><span class="value">${name}</span></div>
      <div class="row"><span class="label">Vehicle / Trip</span><span class="value">${vehicle}</span></div>
      <div class="row"><span class="label">Payment Method</span><span class="value">${paymentLabels[payment] || payment}</span></div>
      <div class="row"><span class="label">Status</span><span class="value" style="color:#059669">Confirmed</span></div>
    </div>
    <div class="total">Total: ₹${total}</div>
    <div class="footer"><p>Thank you for booking with ${siteName}</p><p>© ${new Date().getFullYear()} ${siteName}</p></div>
    </body></html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `booking-${id}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="section-padding" style={{ paddingTop: "120px", minHeight: "80vh" }}>
      <div className="section-container" style={{ maxWidth: 600 }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} style={{ textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#05966910", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <FaCheckCircle size={40} style={{ color: "#059669" }} />
          </div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#059669", marginBottom: "8px" }}>Booking Confirmed!</h1>
          <p style={{ color: "#6B7280", marginBottom: "30px" }}>Thank you for booking with {siteName}. Your booking details are below.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} id="booking-confirmation"
          style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Booking Details</h3>
            <span style={{ background: "#0F2B46", color: "white", padding: "6px 14px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px" }}>{id}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ color: "#6B7280" }}>Customer</span><span style={{ fontWeight: 600 }}>{name}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ color: "#6B7280" }}>Vehicle / Trip</span><span style={{ fontWeight: 600 }}>{vehicle}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ color: "#6B7280" }}>Status</span><span style={{ fontWeight: 600, color: "#059669" }}>Confirmed</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ color: "#6B7280" }}>Total Amount</span><span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#059669" }}>₹{total}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
              <span style={{ color: "#6B7280" }}>Payment Method</span><span style={{ fontWeight: 600 }}>{paymentLabels[payment] || payment}</span>
            </div>
          </div>
          <div style={{ background: "#FFF8E7", borderRadius: "12px", padding: "14px", marginTop: "16px", fontSize: "0.85rem", color: "#92400E" }}>
            <strong>Note:</strong> Please complete the payment to confirm your booking. Our team will contact you shortly to proceed.
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={() => window.print()} className="btn-primary" style={{ padding: "12px 24px" }}>
            <FaPrint /> Print
          </button>
          <button onClick={handleDownload} className="btn-primary" style={{ padding: "12px 24px", background: "#0F2B46" }}>
            <FaDownload /> Download
          </button>
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${siteName}! I have booking ID ${id}. Please share payment details.`)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "12px 24px" }}>
            <FaWhatsapp /> Support
          </a>
          <Link href="/" className="btn-outline" style={{ borderColor: "#E5E7EB", color: "#374151", padding: "12px 24px" }}>
            <FaHome /> Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Confirmation() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="section-padding" style={{ textAlign: "center", paddingTop: "150px" }}>Loading confirmation...</div>}>
        <ConfirmationContent />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
