"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EnquiryPopup from "@/components/EnquiryPopup";
import { siteName, whatsappNumber } from "@/lib/utils";
import { FaWhatsapp, FaArrowRight, FaCar, FaBus, FaShuttleVan, FaPlane, FaPhone } from "react-icons/fa";
import { MdOutlineDirectionsCar } from "react-icons/md";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const trips = [
  { title: "Goa Beach Tour", duration: "3 Days", desc: "Beaches • Water Sports", img: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=600&q=80", price: "₹8,499" },
  { title: "Kashmir Paradise", duration: "5 Days", desc: "Snow • Mountains", img: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=600&q=80", price: "₹15,999" },
  { title: "Kerala Backwaters", duration: "4 Days", desc: "Houseboat Experience", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80", price: "₹12,499" },
  { title: "Ladakh Adventure", duration: "6 Days", desc: "Bike Ride • Mountains", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80", price: "₹18,999" },
  { title: "Manali Escape", duration: "4 Days", desc: "Adventure & Snow", img: "https://images.unsplash.com/photo-1715686729965-e96dd71a8e61?w=600&q=80", price: "₹10,999" },
  { title: "Ooty & Coonoor", duration: "3 Days", desc: "Hills • Nature", img: "https://images.unsplash.com/photo-1582653291997-079a1c04e2a1?w=600&q=80", price: "₹7,999" },
];

const testimonials = [
  { name: "Ravi Kumar", role: "Family Traveler", quote: "The best travel experience we've ever had. Everything was perfectly planned.", rating: 5, img: "https://i.pravatar.cc/100?img=11" },
  { name: "Priya Sharma", role: "Corporate Client", quote: "Excellent customer support and amazing trip packages. Highly recommended!", rating: 5, img: "https://i.pravatar.cc/100?img=5" },
  { name: "Amit Patel", role: "Solo Traveler", quote: "Professional team, great vehicles, and seamless booking process. Will use again!", rating: 5, img: "https://i.pravatar.cc/100?img=12" },
];

export default function Home() {
  const [galleryImgs] = useState([
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  ]);

  return (
    <>
      <EnquiryPopup />
      <Navbar />

      {/* HERO */}
      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80"
          alt="Luxury Travel"
          className="hero-bg"
        />
        <div className="hero-content">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Explore the World with {siteName}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Luxury Tours • Holiday Packages • Rentals • Adventure Trips • Trusted Travel Partner
          </motion.p>
          <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Link href="/trips" className="btn-gold">
              Explore Trips <FaArrowRight />
            </Link>
            <Link href="/contact" className="btn-outline">
              <FaPhone /> Contact Us
            </Link>
          </motion.div>
          <motion.div className="stats-bar" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
            <div className="stat-item"><h3>5000+</h3><p>Happy Travelers</p></div>
            <div className="stat-item"><h3>250+</h3><p>Trips Completed</p></div>
            <div className="stat-item"><h3>50+</h3><p>Destinations</p></div>
            <div className="stat-item"><h3>24/7</h3><p>Customer Support</p></div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding" style={{ background: "#F8F9FC" }}>
        <div className="section-container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <motion.div {...fadeUp}>
              <h2 className="section-title">Why Choose {siteName}?</h2>
              <div className="gold-underline" style={{ margin: "0 0 20px" }} />
              <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "20px" }}>
                {siteName} is your trusted travel companion offering unforgettable domestic and international travel experiences. From family vacations and honeymoon packages to adventure tours, rentals, pilgrimage trips, and customized holiday planning, we make every journey comfortable and memorable.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&q=80"
                alt="Travel Planning"
                style={{ width: "100%", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title">Travel Memories</h2>
            <div className="gold-underline" />
          </motion.div>
          <div className="gallery-grid">
            {galleryImgs.map((img, i) => (
              <motion.div key={i} className="gallery-item" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <img src={img} alt={`Travel ${i + 1}`} loading="lazy" />
                <div className="overlay"><FaArrowRight /></div>
              </motion.div>
            ))}
          </div>
          <motion.div style={{ textAlign: "center", marginTop: "30px" }} {...fadeUp}>
            <Link href="/gallery" className="btn-primary">
              View Full Gallery <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* POPULAR TRIPS */}
      <section className="section-padding" style={{ background: "#F8F9FC" }}>
        <div className="section-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title">Popular Trips</h2>
            <div className="gold-underline" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Explore our most loved destinations</p>
          </motion.div>
          <div className="grid-3">
            {trips.map((trip, i) => (
              <motion.div key={i} className="trip-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <img src={trip.img} alt={trip.title} className="trip-card-img" loading="lazy" />
                <div className="trip-card-body">
                  <span className="duration">{trip.duration}</span>
                  <h3>{trip.title}</h3>
                  <p>{trip.desc}</p>
                  <div className="trip-card-footer">
                    <span className="price">{trip.price}</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${siteName}! I want to book ${trip.title} (${trip.duration}) at ${trip.price}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      style={{ padding: "8px 18px", fontSize: "13px" }}
                    >
                      <FaWhatsapp /> Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RENTALS */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title">Travel Rental Services</h2>
            <div className="gold-underline" />
          </motion.div>
          <div className="grid-3">
            {[
              { icon: <MdOutlineDirectionsCar size={28} />, title: "Luxury Cars", desc: "Premium sedans and SUVs for executive travel" },
              { icon: <FaCar size={28} />, title: "Self Drive Cars", desc: "Rent a car and drive yourself at your own pace" },
              { icon: <FaShuttleVan size={28} />, title: "Tempo Traveller", desc: "Spacious 12-16 seater for group trips" },
              { icon: <FaBus size={28} />, title: "Mini Bus", desc: "Perfect for weddings, events & corporate groups" },
              { icon: <FaBus size={28} />, title: "Luxury Bus", desc: "Premium sleeper coaches for long-distance tours" },
              { icon: <FaPlane size={28} />, title: "Airport Pickup", desc: "Hassle-free airport transfers round the clock" },
            ].map((service, i) => (
              <motion.div key={i} className="service-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${siteName}! I'm interested in ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0A4DFF", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}
                >
                  Enquire Now →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0A4DFF08, #D4A01708)" }}>
        <div className="section-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="gold-underline" />
          </motion.div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testimonial-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="stars">{"★".repeat(t.rating)}</div>
                <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
