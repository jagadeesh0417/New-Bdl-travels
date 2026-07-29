"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteName, phoneNumber } from "@/lib/utils";
import { FaPhone, FaStar, FaShieldAlt, FaUsers, FaHeadset } from "react-icons/fa";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const values = [
  { icon: <FaStar />, title: "Quality Service", desc: "We deliver premium travel experiences with attention to every detail." },
  { icon: <FaShieldAlt />, title: "Safety First", desc: "All vehicles are regularly maintained and drivers are professionally trained." },
  { icon: <FaUsers />, title: "Customer Focus", desc: "Your satisfaction is our priority. We customize every trip to your needs." },
  { icon: <FaHeadset />, title: "24/7 Support", desc: "Round-the-clock assistance for all your travel needs and emergencies." },
];

const timeline = [
  { year: "2015", title: "Our Beginning", desc: "Started with a single vehicle and a vision to transform travel." },
  { year: "2018", title: "Fleet Expansion", desc: "Grew to 20+ vehicles including luxury cars and tempo travellers." },
  { year: "2021", title: "Pan-India Services", desc: "Expanded operations across Karnataka, Andhra, and beyond." },
  { year: "2024", title: "Premium Travel Partner", desc: "Recognized as a leading travel agency with 5000+ happy customers." },
];

const team = [
  { name: "Ramesh Reddy", role: "Founder & CEO", img: "https://i.pravatar.cc/150?img=68" },
  { name: "Sneha Patel", role: "Operations Head", img: "https://i.pravatar.cc/150?img=47" },
  { name: "Vikram Singh", role: "Fleet Manager", img: "https://i.pravatar.cc/150?img=33" },
  { name: "Anita Sharma", role: "Customer Support", img: "https://i.pravatar.cc/150?img=23" },
];

export default function About() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80" alt="About" />
        <div className="page-banner-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            About {siteName}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Your Trusted Travel Partner Since 2015
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <motion.div {...fadeUp}>
              <h2 className="section-title">Our Story</h2>
              <div className="gold-underline" style={{ margin: "0 0 20px" }} />
              <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "16px" }}>
                Founded in 2015, {siteName} began with a simple mission — to make travel comfortable, affordable, and memorable. What started as a small fleet has grown into a trusted travel brand serving thousands of happy travelers every year.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem" }}>
                Today we offer a comprehensive range of services including luxury car rentals, tempo travellers, bus rentals, holiday packages, corporate tours, and customized travel planning across India.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="Team" style={{ width: "100%", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "#F8F9FC" }}>
        <div className="section-container">
          <div className="grid-2" style={{ alignItems: "center", gap: "50px" }}>
            <motion.div {...fadeUp}>
              <h3 style={{ color: "#D4A017", fontWeight: 700, fontSize: "1rem", marginBottom: "8px" }}>OUR MISSION</h3>
              <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem" }}>
                To provide exceptional travel experiences with reliability, safety, and personalized service that exceeds expectations.
              </p>
              <h3 style={{ color: "#D4A017", fontWeight: 700, fontSize: "1rem", margin: "24px 0 8px" }}>OUR VISION</h3>
              <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem" }}>
                To become India&apos;s most trusted travel brand, known for quality, innovation, and customer-centric approach.
              </p>
            </motion.div>
            <motion.div className="grid-2" style={{ gap: "20px" }} {...fadeUp}>
              {values.map((v, i) => (
                <div key={i} className="value-item" style={{ background: "white", borderRadius: "16px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                  <div className="icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title">Our Journey</h2>
            <div className="gold-underline" />
          </motion.div>
          <div className="timeline" style={{ maxWidth: 600, margin: "0 auto" }}>
            {timeline.map((item, i) => (
              <motion.div key={i} className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.15 }}>
                <span style={{ color: "#D4A017", fontWeight: 700, fontSize: "0.85rem" }}>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "#F8F9FC" }}>
        <div className="section-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title">Meet Our Team</h2>
            <div className="gold-underline" />
          </motion.div>
          <div className="grid-4">
            {team.map((m, i) => (
              <motion.div key={i} className="team-member" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <img src={m.img} alt={m.name} />
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Plan Your Next Trip?</h2>
        <p>Get in touch with us today and let us create the perfect travel experience for you.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-gold">
            <FaPhone /> Contact Us
          </Link>
          <a href={`tel:${phoneNumber}`} className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
            <FaPhone /> Call Now
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
