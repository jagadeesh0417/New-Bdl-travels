"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { siteName, phoneNumber, emailAddress, address, businessHours, socialLinks } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: "#0F172A",
      color: "rgba(255,255,255,0.85)",
      padding: "60px 20px 0",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid-4" style={{ gap: "40px" }}>
          <div>
            <h3 style={{
              fontSize: "1.3rem",
              fontWeight: 800,
              color: "white",
              marginBottom: "16px",
            }}>
              {siteName}
            </h3>
            <p style={{
              fontSize: "0.85rem",
              lineHeight: 1.7,
              opacity: 0.75,
              marginBottom: "16px",
            }}>
              Creating memorable travel experiences with premium services, customized packages, and trusted support.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href={socialLinks.facebook} aria-label="Facebook" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                <FaFacebook />
              </a>
              <a href={socialLinks.instagram} aria-label="Instagram" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                <FaInstagram />
              </a>
              <a href={socialLinks.youtube} aria-label="YouTube" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                <FaYoutube />
              </a>
              <a href={socialLinks.whatsapp} aria-label="WhatsApp" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#25D366"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#D4A017", marginBottom: "16px" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Home", "About", "Trips", "Gallery", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "white"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#D4A017", marginBottom: "16px" }}>Services</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Holiday Packages", "Car Rentals", "Bus Rentals", "Corporate Tours", "Family Tours", "Honeymoon Packages"].map((item) => (
                <li key={item}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#D4A017", marginBottom: "16px" }}>Contact Info</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <FaPhone size={12} style={{ marginTop: 3, flexShrink: 0, color: "#D4A017" }} />
                <a href={`tel:${phoneNumber}`} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{phoneNumber}</a>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <FaEnvelope size={12} style={{ marginTop: 3, flexShrink: 0, color: "#D4A017" }} />
                <a href={`mailto:${emailAddress}`} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{emailAddress}</a>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <FaMapMarkerAlt size={12} style={{ marginTop: 3, flexShrink: 0, color: "#D4A017" }} />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{address}</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <FaClock size={12} style={{ marginTop: 3, flexShrink: 0, color: "#D4A017" }} />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          fontSize: "0.8rem",
          opacity: 0.6,
        }}>
          &copy; {year} {siteName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
