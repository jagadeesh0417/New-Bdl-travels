"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { allTrips, Trip } from "@/lib/trip-data";
import { siteName, whatsappNumber } from "@/lib/utils";
import { FaWhatsapp, FaArrowRight, FaCheck, FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaLightbulb, FaStar } from "react-icons/fa";

export default function TripDetail() {
  const params = useParams();
  const trip = useMemo<Trip | undefined>(() => allTrips.find((t) => t.slug === params.slug), [params.slug]);

  if (!trip) {
    return (
      <>
        <Navbar />
        <section className="section-padding" style={{ textAlign: "center", paddingTop: "150px" }}>
          <h2>Trip not found</h2>
          <Link href="/trips" className="btn-primary" style={{ marginTop: "20px", display: "inline-flex" }}>Browse Trips</Link>
        </section>
        <Footer /><WhatsAppFloat />
      </>
    );
  }

  const related = allTrips.filter((t) => t.slug !== trip.slug && (t.cat === trip.cat || t.dest === trip.dest)).slice(0, 3);

  return (
    <>
      <Navbar />

      <section className="page-banner" style={{ height: "60vh", minHeight: "400px" }}>
        <img src={trip.img} alt={trip.title} />
        <div className="page-banner-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>{trip.title}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <span><FaCalendarAlt /> {trip.duration}</span>
            <span><FaMapMarkerAlt /> {trip.dest}</span>
            <span><FaStar style={{ color: "#D4A017" }} /> {trip.price}</span>
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid-2" style={{ gap: "40px" }}>
            <div>
              <h2 className="section-title" style={{ fontSize: "1.6rem" }}>About the Trip</h2>
              <div className="gold-underline" style={{ margin: "0 0 20px" }} />
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "24px" }}>{trip.desc}</p>

              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "16px" }}>Day-wise Itinerary</h3>
              {trip.itinerary.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{
                  background: "#F8F9FC", borderRadius: "12px", padding: "16px 20px", marginBottom: "12px", borderLeft: "4px solid #0A4DFF"
                }}>
                  <h4 style={{ fontWeight: 700, color: "#0A4DFF", marginBottom: "4px" }}>{item.day}</h4>
                  <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.6 }}>{item.activities}</p>
                </motion.div>
              ))}
            </div>
            <div>
              <div style={{ background: "#F8F9FC", borderRadius: "20px", padding: "24px", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Places Covered</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {trip.places.map((p, i) => <span key={i} style={{ background: "white", padding: "6px 14px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 600, color: "#0A4DFF" }}>{p}</span>)}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                <div style={{ background: "#05966910", borderRadius: "16px", padding: "20px" }}>
                  <h4 style={{ color: "#059669", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}><FaCheck /> Included</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {trip.included.map((item, i) => <li key={i} style={{ fontSize: "0.85rem", color: "#374151", marginBottom: "4px", display: "flex", gap: "6px" }}><FaCheck size={10} style={{ color: "#059669", marginTop: 4 }} /> {item}</li>)}
                  </ul>
                </div>
                <div style={{ background: "#DC262610", borderRadius: "16px", padding: "20px" }}>
                  <h4 style={{ color: "#DC2626", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}><FaTimes /> Excluded</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {trip.excluded.map((item, i) => <li key={i} style={{ fontSize: "0.85rem", color: "#374151", marginBottom: "4px", display: "flex", gap: "6px" }}><FaTimes size={10} style={{ color: "#DC2626", marginTop: 4 }} /> {item}</li>)}
                  </ul>
                </div>
              </div>

              <div style={{ background: "#F8F9FC", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}>
                <h4 style={{ fontWeight: 700, marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}><FaLightbulb style={{ color: "#D4A017" }} /> Travel Tips</h4>
                <ul style={{ paddingLeft: "20px" }}>
                  {trip.tips.map((tip, i) => <li key={i} style={{ fontSize: "0.85rem", color: "#6B7280", marginBottom: "4px" }}>{tip}</li>)}
                </ul>
              </div>

              <div style={{ background: "linear-gradient(135deg, #0A4DFF10, #D4A01710)", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>Pickup & Drop</h4>
                <p style={{ fontSize: "0.85rem", color: "#6B7280" }}>Free pickup and drop from nearest airport, railway station, or bus stand. Additional charges apply for remote locations.</p>
                <h4 style={{ fontWeight: 700, marginTop: "12px", marginBottom: "4px" }}>Best Time to Visit</h4>
                <p style={{ fontSize: "0.85rem", color: "#0A4DFF", fontWeight: 600 }}>{trip.bestTime}</p>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${siteName}! I want to book ${trip.title} (${trip.duration}) at ${trip.price}.`)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <FaWhatsapp /> Book Now on WhatsApp
                </a>
                <Link href={`/booking?trip=${trip.slug}`} className="btn-primary">
                  Book Online <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {trip.gallery && trip.gallery.length > 0 && (
            <div style={{ marginTop: "50px" }}>
              <h2 className="section-title" style={{ fontSize: "1.4rem", textAlign: "center" }}>Photo Gallery</h2>
              <div className="gold-underline" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginTop: "20px" }}>
                {trip.gallery.map((img, i) => (
                  <img key={i} src={img} alt={`${trip.title} ${i + 1}`} loading="lazy" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "16px" }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding" style={{ background: "#F8F9FC" }}>
          <div className="section-container">
            <h2 className="section-title" style={{ textAlign: "center", fontSize: "1.4rem" }}>Related Trips</h2>
            <div className="gold-underline" />
            <div className="grid-3" style={{ marginTop: "30px" }}>
              {related.map((t, i) => (
                <Link key={t.slug} href={`/trips/${t.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <motion.div className="trip-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <img src={t.img} alt={t.title} className="trip-card-img" loading="lazy" />
                    <div className="trip-card-body">
                      <span className="duration">{t.duration}</span>
                      <h3>{t.title}</h3>
                      <p>{t.desc}</p>
                      <div className="trip-card-footer">
                        <span className="price">{t.price}</span>
                        <span style={{ color: "#0A4DFF", fontWeight: 600, fontSize: "0.85rem" }}>View Details →</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
