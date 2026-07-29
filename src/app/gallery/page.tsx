"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const categories = ["All", "Nature", "Mountains", "Beaches", "Hotels", "Road Trips", "Pilgrimage", "Adventure", "Family"];

const images = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", cat: "Nature", title: "Mountain Sunrise" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", cat: "Beaches", title: "Tropical Beach" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", cat: "Nature", title: "Forest Trail" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", cat: "Hotels", title: "Luxury Resort" },
  { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80", cat: "Adventure", title: "Global Travel" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", cat: "Nature", title: "Waterfall View" },
  { src: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80", cat: "Beaches", title: "Goa Sunset" },
  { src: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=800&q=80", cat: "Mountains", title: "Kashmir Valley" },
  { src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80", cat: "Road Trips", title: "Kerala Backwaters" },
  { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80", cat: "Adventure", title: "Ladakh Ride" },
  { src: "https://images.unsplash.com/photo-1582653291997-079a1c04e2a1?w=800&q=80", cat: "Mountains", title: "Ooty Hills" },
  { src: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80", cat: "Family", title: "Family Vacation" },
  { src: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800&q=80", cat: "Road Trips", title: "Highway Journey" },
  { src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80", cat: "Pilgrimage", title: "Temple Visit" },
  { src: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80", cat: "Hotels", title: "Resort Pool" },
  { src: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80", cat: "Adventure", title: "Mountain Trek" },
  { src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80", cat: "Pilgrimage", title: "Spiritual Journey" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", cat: "Nature", title: "Sunset View" },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () => activeCat === "All" ? images : images.filter((img) => img.cat === activeCat),
    [activeCat]
  );

  return (
    <>
      <Navbar />

      <section className="page-banner">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" alt="Gallery" />
        <div className="page-banner-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Travel Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Explore beautiful moments captured across destinations
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCat === cat ? "active" : ""}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}>
            {filtered.map((img, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  aspectRatio: "4/3",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                }}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "12px 16px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}>
                  {img.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Enlarged" />
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
