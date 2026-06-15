"use client";

import { phoneNumber, emailAddress } from "@/lib/utils";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" style={{
      background: "#F8F9FC",
      padding: "60px 20px",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#0A4DFF",
            margin: "0 0 8px",
          }}>
            Contact Us
          </h2>
          <p style={{ color: "#6B7280", fontSize: "15px", margin: 0 }}>
            Get in touch with BDL Travels
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}>
          <div style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 20px", color: "#111827" }}>
              Visit Our Office
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <FaMapMarkerAlt size={18} color="#0A4DFF" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: "14px" }}>Address</p>
                  <p style={{ margin: "2px 0 0", color: "#6B7280", fontSize: "14px" }}>
                    Shop no:4, Ground floor, Ananda Nilayam Plaza,<br />
                    Complex, Nandyala, Andhra Pradesh 518501
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <FaPhone size={18} color="#0A4DFF" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: "14px" }}>Phone</p>
                  <p style={{ margin: "2px 0 0", color: "#6B7280", fontSize: "14px" }}>{phoneNumber}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <FaEnvelope size={18} color="#0A4DFF" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: "14px" }}>Email</p>
                  <p style={{ margin: "2px 0 0", color: "#6B7280", fontSize: "14px" }}>{emailAddress}</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${"918985651501"}?text=Hi%20BDL%20Travels!`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#25D366",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  marginTop: "8px",
                }}
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d78.483!3d15.478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI4JzQwLjgiTiA3OMKwMjknMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BDL Travels Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
