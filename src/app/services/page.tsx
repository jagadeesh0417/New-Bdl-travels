"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteName, whatsappNumber, phoneNumber } from "@/lib/utils";
import { FaWhatsapp, FaPhone, FaPlane, FaTrain, FaBus, FaShuttleVan, FaHotel, FaBriefcase, FaGraduationCap, FaPray, FaPassport, FaFileContract, FaShieldAlt, FaCog, FaHeadset } from "react-icons/fa";
import { MdOutlineDirectionsCar } from "react-icons/md";

const services = [
  { icon: <FaPlane size={24} />, title: "Holiday Packages", desc: "Curated domestic and international tour packages for every budget and season.", benefits: ["Customized itineraries", "Best price guarantee", "Hotel + transport included"] },
  { icon: <FaHotel size={24} />, title: "Hotel Booking", desc: "Book premium hotels, resorts, and homestays across India and abroad.", benefits: ["500+ hotel partners", "Exclusive discounts", "Free cancellation"] },
  { icon: <FaPlane size={24} />, title: "Flight Booking", desc: "Domestic and international flight tickets at the best available rates.", benefits: ["All airlines", "Instant confirmation", "24/7 support"] },
  { icon: <FaTrain size={24} />, title: "Train Booking", desc: "IRCTC train ticket booking with hassle-free cancellation and support.", benefits: ["Instant booking", "Refund assistance", "Waiting list tracking"] },
  { icon: <FaBus size={24} />, title: "Bus Booking", desc: "AC and non-AC bus tickets for intercity and interstate travel.", benefits: ["Multiple operators", "Seat selection", "Affordable rates"] },
  { icon: <MdOutlineDirectionsCar size={24} />, title: "Car Rentals", desc: "Self-drive or chauffeur-driven cars for local and outstation trips.", benefits: ["Sedans, SUVs & MUVs", "Flexible rentals", "Full insurance"] },
  { icon: <FaShuttleVan size={24} />, title: "Tempo Traveller", desc: "12 to 16 seater tempo travellers for group trips, tours & events.", benefits: ["Push-back seats", "AC & music system", "Experienced drivers"] },
  { icon: <FaBriefcase size={24} />, title: "Corporate Tours", desc: "End-to-end corporate travel management for offsites, meetings & events.", benefits: ["Bulk booking", "Invoice billing", "Dedicated manager"] },
  { icon: <FaGraduationCap size={24} />, title: "Educational Tours", desc: "School and college trip packages with educational and fun activities.", benefits: ["Safe transport", "Teacher-friendly", "Budget options"] },
  { icon: <FaPray size={24} />, title: "Pilgrimage Tours", desc: "Spiritual journeys to temples, shrines, and holy sites across India.", benefits: ["Guided tours", "All transport", "Accommodation included"] },
  { icon: <FaPassport size={24} />, title: "Passport Assistance", desc: "End-to-end guidance for passport application and documentation.", benefits: ["Document check", "Appointment booking", "Fast processing"] },
  { icon: <FaFileContract size={24} />, title: "Visa Assistance", desc: "Visa application support for tourist, business, and student visas.", benefits: ["Expert guidance", "Document verification", "Track status"] },
  { icon: <FaShieldAlt size={24} />, title: "Travel Insurance", desc: "Comprehensive travel insurance for domestic and international trips.", benefits: ["Medical coverage", "Trip cancellation", "Baggage protection"] },
  { icon: <FaCog size={24} />, title: "Customized Tour Planning", desc: "Tailor-made itineraries designed around your interests and budget.", benefits: ["Personalized plan", "Expert advice", "No extra cost"] },
  { icon: <FaHeadset size={24} />, title: "24×7 Customer Support", desc: "Round-the-clock assistance for bookings, inquiries, and emergencies.", benefits: ["Instant response", "Multi-language", "Dedicated team"] },
];

export default function Services() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80" alt="Services" />
        <div className="page-banner-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Comprehensive travel solutions under one roof
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#0A4DFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
                }}
              >
                <div style={{
                  width: 56, height: 56,
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #0A4DFF10, #0A4DFF05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0A4DFF",
                  marginBottom: "16px",
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.6, marginBottom: "12px" }}>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {s.benefits.map((b, j) => (
                    <li key={j} style={{ fontSize: "0.8rem", color: "#059669", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>✓</span> {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${siteName}! I'm interested in ${s.title}. Please share more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: "10px 20px", fontSize: "13px", width: "100%", justifyContent: "center" }}
                >
                  <FaWhatsapp /> Enquire Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Need a Custom Service?</h2>
        <p>We offer tailored travel solutions. Get in touch with our team for personalized assistance.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
          <a href={`tel:${phoneNumber}`} className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
            <FaPhone /> Call Us
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
