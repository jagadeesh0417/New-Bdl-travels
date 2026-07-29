"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { allTrips } from "@/lib/trip-data";
import { FaSearch, FaArrowRight } from "react-icons/fa";

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
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Travel Packages</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>Find your perfect getaway</motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="search-bar">
            <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
              <FaSearch style={{ position: "absolute", left: 14, top: 14, color: "#9CA3AF" }} />
              <input type="text" placeholder="Search trips..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ paddingLeft: "40px", width: "100%" }} />
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {filtered.map((trip, i) => (
              <motion.div key={trip.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="trip-card">
                <Link href={`/trips/${trip.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={trip.img} alt={trip.title} className="trip-card-img" loading="lazy" />
                  <div className="trip-card-body">
                    <span className="duration">{trip.duration}</span>
                    <h3>{trip.title}</h3>
                    <p>{trip.desc}</p>
                    <div style={{ fontSize: "0.8rem", color: "#D4A017", fontWeight: 600, marginBottom: "8px" }}>{trip.cat} • {trip.dest}</div>
                    <div className="trip-card-footer">
                      <span className="price">{trip.price}</span>
                      <span className="btn-primary" style={{ padding: "8px 18px", fontSize: "13px" }}>
                        View Details <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && <p style={{ textAlign: "center", color: "#6B7280", marginTop: "40px" }}>No trips found matching your criteria.</p>}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
