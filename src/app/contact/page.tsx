"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteName, phoneNumber, emailAddress, address, businessHours, whatsappNumber } from "@/lib/utils";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

const faqs = [
  { q: "How do I book a trip?", a: "You can book directly through our website by selecting your preferred trip and clicking 'Book Now', which will connect you with our team via WhatsApp. You can also call us or visit our office." },
  { q: "What payment methods do you accept?", a: "We accept UPI, bank transfer, and Razorpay online payments. For bookings made via WhatsApp, we share payment details directly." },
  { q: "Can I customize a package?", a: "Absolutely! We specialize in customized tour planning. Contact us with your preferences and budget, and we'll create a personalized itinerary for you." },
  { q: "Is there a cancellation policy?", a: "Yes, our cancellation policy depends on the package and how far in advance you cancel. Please check with our team at the time of booking." },
  { q: "Do you offer corporate travel services?", a: "Yes, we provide comprehensive corporate travel management including bulk bookings, invoice billing, and dedicated account managers." },
  { q: "What are your business hours?", a: `Our office hours are ${businessHours}. However, our customer support is available 24/7 for emergencies.` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", destination: "", date: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi ${siteName}! New enquiry from ${form.name} (${form.phone}, ${form.email}). Destination: ${form.destination}, Date: ${form.date}. Message: ${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }, [form]);

  return (
    <>
      <Navbar />

      <section className="page-banner">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80" alt="Contact" />
        <div className="page-banner-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Get in touch with our travel experts
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid-2" style={{ gap: "40px" }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>Send Us a Message</h2>
              <div className="gold-underline" style={{ margin: "0 0 24px" }} />
              {sent ? (
                <div style={{
                  background: "#05966910",
                  border: "1px solid #059669",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                }}>
                  <p style={{ color: "#059669", fontWeight: 600, fontSize: "1.1rem" }}>{"✓ Thank you! We'll get back to you shortly."}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="grid-2" style={{ gap: "16px" }}>
                    <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <div className="grid-2" style={{ gap: "16px" }}>
                    <input type="text" placeholder="Destination" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} />
                    <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                  </div>
                  <textarea rows={4} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  <button type="submit" className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
                    <FaWhatsapp /> Send via WhatsApp
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{
                background: "white",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "24px", color: "#0A4DFF" }}>Office Details</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {[
                    { icon: <FaMapMarkerAlt />, label: "Address", value: address },
                    { icon: <FaPhone />, label: "Phone", value: phoneNumber, href: `tel:${phoneNumber}` },
                    { icon: <FaEnvelope />, label: "Email", value: emailAddress, href: `mailto:${emailAddress}` },
                    { icon: <FaClock />, label: "Business Hours", value: businessHours },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <div style={{ color: "#0A4DFF", fontSize: "1.1rem", marginTop: 2 }}>{item.icon}</div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600, fontSize: "0.85rem", color: "#111827" }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} style={{ color: "#6B7280", fontSize: "0.9rem", textDecoration: "none" }}>{item.value}</a>
                        ) : (
                          <p style={{ margin: "2px 0 0", color: "#6B7280", fontSize: "0.9rem" }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
                  <a href={`tel:${phoneNumber}`} className="btn-primary">
                    <FaPhone /> Call Us
                  </a>
                  <a href={`mailto:${emailAddress}`} style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#F3F4F6",
                    color: "#111827",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}>
                    <FaEnvelope /> Email
                  </a>
                </div>
              </div>

              <div style={{
                borderRadius: "24px",
                overflow: "hidden",
                marginTop: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d77.5963!3d13.1007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAyLjUiTiA3N8KwMzUnNDYuNyJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "24px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${siteName} Location`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "#F8F9FC" }}>
        <div className="section-container">
          <motion.div {...{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }} style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="gold-underline" />
          </motion.div>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} className="faq-item" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>▼</span>
                </div>
                {openFaq === i && <div className="faq-answer">{faq.a}</div>}
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
