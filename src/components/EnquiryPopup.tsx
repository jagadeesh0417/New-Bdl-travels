"use client";

import { useState, useCallback, useEffect } from "react";
import { whatsappNumber, siteName } from "@/lib/utils";

export default function EnquiryPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", destination: "", message: "" });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi ${siteName}! I'm ${form.name}. Interested in ${form.destination}. ${form.message}. Contact: ${form.phone}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  }, [form]);

  if (submitted || !show) return null;

  return (
    <div className="enquiry-overlay">
      <div className="enquiry-modal">
        <button
          type="button"
          onClick={() => setShow(false)}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "#F3F4F6",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6B7280",
            lineHeight: 1,
          }}
          aria-label="Skip"
        >
          ✕
        </button>
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div style={{
              width: 64, height: 64,
              background: "linear-gradient(135deg, #0A4DFF10, #D4A01710)",
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
              Tell us your travel plans — or skip and browse freely
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input
              type="text" placeholder="Your Name" required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #E5E7EB", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
            />
            <input
              type="tel" placeholder="Contact Number" required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #E5E7EB", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
            />
            <input
              type="text" placeholder="Destination (e.g., Goa, Kerala)"
              value={form.destination}
              onChange={(e) => setForm({ ...form, destination: e.target.value })}
              style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #E5E7EB", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
            />
            <textarea
              rows={3} placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #E5E7EB", fontSize: "14px", outline: "none", resize: "none", boxSizing: "border-box" }}
            />
            <button type="submit" className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
              Submit Enquiry
            </button>
            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                onClick={() => setShow(false)}
                style={{ background: "none", border: "none", color: "#9CA3AF", fontSize: "13px", cursor: "pointer", textDecoration: "underline", padding: 0 }}
              >
                Skip and browse the site
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
