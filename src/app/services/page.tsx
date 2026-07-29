"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { rentals } from "@/lib/rental-data";
import { siteName, whatsappNumber, phoneNumber } from "@/lib/utils";
import { FaWhatsapp, FaPhone, FaArrowRight, FaUsers, FaCog, FaSnowflake, FaGasPump } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="page-banner">
        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80" alt="Rentals" />
        <div className="page-banner-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Vehicle Rentals</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>Choose from our complete range of rental vehicles</motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {rentals.map((rental, i) => (
              <motion.div key={rental.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ background: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)"; }}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img src={rental.image} alt={rental.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{rental.name}</h3>
                    <span style={{ background: "#0A4DFF10", color: "#0A4DFF", fontSize: "0.75rem", fontWeight: 600, padding: "4px 10px", borderRadius: "20px" }}>{rental.category}</span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "12px" }}>
                    <div style={{ textAlign: "center", background: "#F8F9FC", borderRadius: "10px", padding: "8px" }}>
                      <FaUsers size={14} style={{ color: "#0A4DFF", marginBottom: 2 }} />
                      <div style={{ fontSize: "0.7rem", color: "#6B7280" }}>{rental.seating}</div>
                    </div>
                    <div style={{ textAlign: "center", background: "#F8F9FC", borderRadius: "10px", padding: "8px" }}>
                      <FaCog size={14} style={{ color: "#0A4DFF", marginBottom: 2 }} />
                      <div style={{ fontSize: "0.7rem", color: "#6B7280" }}>{rental.transmission.split("/")[0]}</div>
                    </div>
                    <div style={{ textAlign: "center", background: "#F8F9FC", borderRadius: "10px", padding: "8px" }}>
                      <FaGasPump size={14} style={{ color: "#0A4DFF", marginBottom: 2 }} />
                      <div style={{ fontSize: "0.7rem", color: "#6B7280" }}>{rental.fuel.split("/")[0]}</div>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.6, marginBottom: "12px" }}>{rental.desc}</p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#059669" }}>{rental.dailyPrice}</div>
                      <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>{rental.perKmPrice}</div>
                    </div>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", color: "#059669", fontWeight: 600 }}>
                      <FaSnowflake size={12} /> {rental.ac}
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <Link href={`/services/${rental.slug}`} className="btn-primary" style={{ flex: 1, justifyContent: "center", padding: "10px 16px", fontSize: "13px" }}>
                      View Details <FaArrowRight />
                    </Link>
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${siteName}! I'm interested in renting ${rental.name}.`)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "10px 16px", fontSize: "13px" }}>
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Need a Custom Rental?</h2>
        <p>Contact us for special requirements, long-term rentals, or corporate fleet bookings.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-gold"><FaWhatsapp /> Chat on WhatsApp</a>
          <a href={`tel:${phoneNumber}`} className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}><FaPhone /> Call Us</a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
