"use client";

import { useState, useEffect } from "react";
import { whatsappNumber } from "@/lib/utils";

export default function EnquiryPopup() {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", message: "" });

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi BDL Travels! I'm ${form.name}. I'm interested in ${form.vehicle}. ${form.message}. Contact: ${form.phone}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    document.body.style.overflow = "";
  };

  if (!mounted || submitted) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
    }}>
      <div style={{
        background: "white",
        borderRadius: "16px",
        padding: "32px",
        width: "100%",
        maxWidth: "440px",
        boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div style={{
              width: 64, height: 64,
              background: "#0A4DFF10",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A4DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: 0 }}>
              Quick Enquiry
            </h3>
            <p style={{ color: "#6B7280", fontSize: "14px", marginTop: "4px" }}>
              Fill this form to continue browsing
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{
                width: "100%", padding: "14px", borderRadius: "12px",
                border: "1px solid #E5E7EB", fontSize: "14px", outline: "none",
                boxSizing: "border-box",
              }}
            />
            <input
              type="tel"
              placeholder="Contact Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={{
                width: "100%", padding: "14px", borderRadius: "12px",
                border: "1px solid #E5E7EB", fontSize: "14px", outline: "none",
                boxSizing: "border-box",
              }}
            />
            <input
              type="text"
              placeholder="Vehicle Type (e.g., Car, Bus)"
              required
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
              style={{
                width: "100%", padding: "14px", borderRadius: "12px",
                border: "1px solid #E5E7EB", fontSize: "14px", outline: "none",
                boxSizing: "border-box",
              }}
            />
            <textarea
              rows={3}
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{
                width: "100%", padding: "14px", borderRadius: "12px",
                border: "1px solid #E5E7EB", fontSize: "14px", outline: "none",
                resize: "none", boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%", padding: "14px", background: "#0A4DFF",
                color: "white", fontSize: "15px", fontWeight: 600,
                border: "none", borderRadius: "12px", cursor: "pointer",
              }}
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
