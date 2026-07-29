"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteName, whatsappNumber } from "@/lib/utils";
import { FaWhatsapp, FaSearch } from "react-icons/fa";

const allTrips = [
  { title: "Goa Beach Tour", duration: "3 Days", desc: "Beaches, Water Sports & Nightlife", img: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=600&q=80", price: "₹8,499", cat: "Domestic", dest: "Goa" },
  { title: "Kashmir Paradise", duration: "5 Days", desc: "Snow, Mountains & Houseboats", img: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=600&q=80", price: "₹15,999", cat: "Domestic", dest: "Kashmir" },
  { title: "Kerala Backwaters", duration: "4 Days", desc: "Houseboat, Ayurveda & Nature", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80", price: "₹12,499", cat: "Domestic", dest: "Kerala" },
  { title: "Ladakh Adventure", duration: "6 Days", desc: "Bike Ride, Mountains & Monasteries", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80", price: "₹18,999", cat: "Adventure", dest: "Ladakh" },
  { title: "Manali Escape", duration: "4 Days", desc: "Adventure, Snow & Scenic Views", img: "https://images.unsplash.com/photo-1715686729965-e96dd71a8e61?w=600&q=80", price: "₹10,999", cat: "Domestic", dest: "Manali" },
  { title: "Ooty & Coonoor", duration: "3 Days", desc: "Hills, Nature & Tea Gardens", img: "https://images.unsplash.com/photo-1582653291997-079a1c04e2a1?w=600&q=80", price: "₹7,999", cat: "Weekend", dest: "Ooty" },
  { title: "Bali Honeymoon", duration: "6 Days", desc: "Beaches, Resorts & Culture", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", price: "₹45,999", cat: "International", dest: "Bali" },
  { title: "Thailand Tour", duration: "5 Days", desc: "Bangkok, Pattaya & Islands", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80", price: "₹35,999", cat: "International", dest: "Thailand" },
  { title: "Dubai Luxury", duration: "5 Days", desc: "Shopping, Desert Safari & Burj", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", price: "₹55,999", cat: "International", dest: "Dubai" },
  { title: "Rishikesh Rafting", duration: "3 Days", desc: "Rafting, Camping & Yoga", img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80", price: "₹6,999", cat: "Adventure", dest: "Rishikesh" },
  { title: "Andaman Islands", duration: "5 Days", desc: "Beaches, Snorkeling & Sunsets", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", price: "₹22,999", cat: "Honeymoon", dest: "Andaman" },
  { title: "Mysore & Coorg", duration: "3 Days", desc: "Palace, Coffee Plantations & Hills", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", price: "₹6,499", cat: "Weekend", dest: "Mysore" },
  { title: "Tirupati Pilgrimage", duration: "2 Days", desc: "Temple Visit & Spiritual Journey", img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80", price: "₹4,999", cat: "Pilgrimage", dest: "Tirupati" },
  { title: "Varanasi Spiritual", duration: "3 Days", desc: "Ganga Aarti, Temples & Culture", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80", price: "₹7,999", cat: "Pilgrimage", dest: "Varanasi" },
  { title: "Rajasthan Heritage", duration: "6 Days", desc: "Palaces, Forts & Desert Safari", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", price: "₹16,999", cat: "Family", dest: "Rajasthan" },
  { title: "Mumbai to Goa Road Trip", duration: "4 Days", desc: "Scenic Drive & Beach Stays", img: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=600&q=80", price: "₹9,999", cat: "Adventure", dest: "Goa" },
];

const categories = ["All", "Domestic", "International", "Adventure", "Family", "Honeymoon", "Pilgrimage", "Weekend"];
const destinations = ["All", "Goa", "Kashmir", "Kerala", "Ladakh", "Manali", "Ooty", "Bali", "Thailand", "Dubai", "Rishikesh", "Andaman", "Mysore", "Tirupati", "Varanasi", "Rajasthan"];
const durations = ["All", "2 Days", "3 Days", "4 Days", "5 Days", "6 Days"];

export default function Trips() {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("All");
  const [destFilter, setDestFilter] = useState("All");
  const [durFilter, setDurFilter] = useState("All");

  const filtered = useMemo(() => {
    return allTrips.filter((t) => {
      const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.dest.toLowerCase().includes(search.toLowerCase());
      const matchCat = catFilter === "All" || t.cat === catFilter;
      const matchDest = destFilter === "All" || t.dest === destFilter;
      const matchDur = durFilter === "All" || t.duration === durFilter;
      return matchSearch && matchCat && matchDest && matchDur;
    });
  }, [search, catFilter, destFilter, durFilter]);

  return (
    <>
      <Navbar />

      <section className="page-banner">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80" alt="Trips" />
        <div className="page-banner-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Travel Packages
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Find your perfect getaway
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="search-bar">
            <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
              <FaSearch style={{ position: "absolute", left: 14, top: 14, color: "#9CA3AF" }} />
              <input
                type="text"
                placeholder="Search trips..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ paddingLeft: "40px", width: "100%" }}
              />
            </div>
            <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)}>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={destFilter} onChange={(e) => setDestFilter(e.target.value)}>
              {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={durFilter} onChange={(e) => setDurFilter(e.target.value)}>
              {durations.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}>
            {filtered.map((trip, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="trip-card"
              >
                <img src={trip.img} alt={trip.title} className="trip-card-img" loading="lazy" />
                <div className="trip-card-body">
                  <span className="duration">{trip.duration}</span>
                  <h3>{trip.title}</h3>
                  <p>{trip.desc}</p>
                  <div style={{ fontSize: "0.8rem", color: "#D4A017", fontWeight: 600, marginBottom: "8px" }}>{trip.cat} • {trip.dest}</div>
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

          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "#6B7280", marginTop: "40px" }}>No trips found matching your criteria.</p>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
