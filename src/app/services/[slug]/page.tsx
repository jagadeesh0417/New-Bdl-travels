"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { rentals } from "@/lib/rental-data";
import { siteName, whatsappNumber } from "@/lib/utils";
import { FaWhatsapp, FaArrowRight, FaUsers, FaCog, FaSnowflake, FaGasPump, FaCheck, FaShieldAlt, FaCar, FaPlus } from "react-icons/fa";

export default function RentalDetail() {
  const params = useParams();
  const rental = useMemo(() => rentals.find((r) => r.slug === params.slug), [params.slug]);
  const [mainImg, setMainImg] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!rental) {
    return (
      <>
        <Navbar />
        <section className="section-padding" style={{ textAlign: "center", paddingTop: "150px" }}>
          <h2>Rental vehicle not found</h2>
          <Link href="/services" className="btn-primary" style={{ marginTop: "20px", display: "inline-flex" }}>Browse Rentals</Link>
        </section>
        <Footer /><WhatsAppFloat />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="section-padding" style={{ paddingTop: "120px" }}>
        <div className="section-container">
          <div className="grid-2" style={{ gap: "40px" }}>
            <div>
              <div style={{ borderRadius: "20px", overflow: "hidden", marginBottom: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
                <img src={rental.images[mainImg]} alt={rental.name} style={{ width: "100%", height: "350px", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {rental.images.map((img, i) => (
                  <div key={i} onClick={() => setMainImg(i)} style={{
                    width: "80px", height: "60px", borderRadius: "10px", overflow: "hidden", cursor: "pointer",
                    border: mainImg === i ? "3px solid #0A4DFF" : "3px solid transparent", opacity: mainImg === i ? 1 : 0.6,
                    transition: "all 0.3s",
                  }}>
                    <img src={img} alt={`${rental.name} ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                <h1 style={{ fontSize: "1.6rem", fontWeight: 800 }}>{rental.name}</h1>
                <span style={{ background: "#0A4DFF10", color: "#0A4DFF", fontSize: "0.8rem", fontWeight: 600, padding: "4px 12px", borderRadius: "20px" }}>{rental.category}</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "20px" }}>
                {[
                  { icon: <FaUsers />, label: rental.seating },
                  { icon: <FaCog />, label: rental.transmission },
                  { icon: <FaSnowflake />, label: rental.ac },
                  { icon: <FaGasPump />, label: rental.fuel },
                ].map((item, i) => (
                  <div key={i} style={{ textAlign: "center", background: "#F8F9FC", borderRadius: "12px", padding: "12px 8px" }}>
                    <div style={{ color: "#0A4DFF", fontSize: "1.1rem", marginBottom: "4px" }}>{item.icon}</div>
                    <div style={{ fontSize: "0.7rem", color: "#6B7280", fontWeight: 500 }}>{item.label}</div>
                  </div>
                ))}
              </div>

              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "20px", fontSize: "0.95rem" }}>{rental.desc}</p>

              <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280", fontWeight: 600 }}>Daily Rental</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#059669" }}>{rental.dailyPrice}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280", fontWeight: 600 }}>Per Km</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#6B7280" }}>{rental.perKmPrice}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280", fontWeight: 600 }}>Security Deposit</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#374151" }}>{rental.securityDeposit}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href={`/booking?rental=${rental.slug}`} className="btn-primary">
                  <FaCar /> Book Now <FaArrowRight />
                </Link>
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${siteName}! I want to rent ${rental.name}.`)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <FaWhatsapp /> Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="grid-2" style={{ gap: "30px", marginTop: "50px" }}>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "16px" }}>Features</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {rental.features.map((f, i) => (
                  <span key={i} style={{ background: "#F8F9FC", padding: "10px 16px", borderRadius: "10px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
                    <FaCheck size={12} style={{ color: "#059669" }} /> {f}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "24px 0 12px" }}>Available Add-ons</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {rental.addons.map((a, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", background: "#F8F9FC", padding: "10px 16px", borderRadius: "10px", fontSize: "0.9rem" }}>
                    <span><FaPlus size={10} style={{ color: "#0A4DFF", marginRight: 8 }} />{a.name}</span>
                    <span style={{ fontWeight: 600, color: "#059669" }}>{a.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "16px" }}>Terms & Conditions</h3>
              <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {rental.terms.map((t, i) => (
                  <li key={i} style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.5 }}>{t}</li>
                ))}
              </ul>

              <div style={{ background: "#F8F9FC", borderRadius: "12px", padding: "16px", marginTop: "20px" }}>
                <h4 style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 700, marginBottom: "4px" }}>
                  <FaShieldAlt style={{ color: "#0A4DFF" }} /> Driver Availability
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#6B7280" }}>
                  {rental.driverAvailable ? "Chauffeur-driven option available. Professional, licensed drivers with verified backgrounds." : "Self-drive only. No chauffeur option available."}
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "16px" }}>Customer Reviews</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
              {rental.reviews.map((r, i) => (
                <div key={i} style={{ background: "#F8F9FC", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ color: "#D4A017", fontSize: "0.9rem", marginBottom: "8px" }}>{"★".repeat(r.rating)}</div>
                  <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.6, fontStyle: "italic", marginBottom: "10px" }}>&ldquo;{r.comment}&rdquo;</p>
                  <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>— {r.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "16px" }}>FAQs</h3>
            <div style={{ maxWidth: 700 }}>
              {rental.faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>▼</span>
                  </div>
                  {openFaq === i && <div className="faq-answer" style={{ color: "#6B7280" }}>{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
