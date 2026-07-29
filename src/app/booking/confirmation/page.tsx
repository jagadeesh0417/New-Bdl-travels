"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteName, whatsappNumber } from "@/lib/utils";
import { FaCheckCircle, FaPrint, FaWhatsapp, FaHome } from "react-icons/fa";

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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Booking Details</h3>
            <span style={{ background: "#0A4DFF", color: "white", padding: "6px 14px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px" }}>{id}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ color: "#6B7280" }}>Customer</span><span style={{ fontWeight: 600 }}>{name}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ color: "#6B7280" }}>Vehicle / Trip</span><span style={{ fontWeight: 600 }}>{vehicle}</span>
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
            <FaPrint /> Print Confirmation
          </button>
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${siteName}! I have booking ID ${id}. Please share payment details.`)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "12px 24px" }}>
            <FaWhatsapp /> Contact Support
          </a>
          <Link href="/" className="btn-outline" style={{ borderColor: "#E5E7EB", color: "#374151", padding: "12px 24px" }}>
            <FaHome /> Back to Home
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
