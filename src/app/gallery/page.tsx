"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { FaChevronLeft, FaChevronRight, FaTimes, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const categories = ["All", "Nature", "Mountains", "Beaches", "Hill Stations", "Waterfalls", "Adventure", "Hotels", "Road Trips", "Pilgrimage", "Family", "Honeymoon", "Rentals"];

const images = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", cat: "Mountains", title: "Mountain Majesty", dest: "Manali", desc: "Snow-capped peaks and pine forests create a breathtaking landscape in the Himalayas.", season: "October to March", location: "Himachal Pradesh", trip: "manali-escape" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", cat: "Beaches", title: "Tropical Paradise", dest: "Goa", desc: "Golden sands and crystal clear waters make for the perfect beach getaway.", season: "November to February", location: "Goa", trip: "goa-beach-tour" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", cat: "Nature", title: "Forest Trail", dest: "Coorg", desc: "Lush green forests and misty mornings offer a perfect escape into nature.", season: "September to March", location: "Karnataka", trip: "mysore-coorg" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", cat: "Hotels", title: "Luxury Resort Living", dest: "Kerala", desc: "World-class resorts with private pools, spa treatments, and backwater views.", season: "Throughout the year", location: "Kerala", trip: "kerala-backwaters" },
  { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80", cat: "Adventure", title: "Wanderlust Dreams", dest: "Global", desc: "Exploring the world one destination at a time with unforgettable experiences.", season: "Varies by destination", location: "International", trip: "bali-honeymoon" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", cat: "Nature", title: "Mountain Sunrise", dest: "Kashmir", desc: "Golden sunrises over the Himalayan range create magical moments for travelers.", season: "April to October", location: "Jammu & Kashmir", trip: "kashmir-paradise" },
  { src: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80", cat: "Beaches", title: "Goa Sunset", dest: "Goa", desc: "Vibrant sunsets at Goa's famous beaches with palm trees and golden sands.", season: "November to February", location: "Goa", trip: "goa-beach-tour" },
  { src: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=800&q=80", cat: "Mountains", title: "Kashmir Valley", dest: "Kashmir", desc: "The breathtaking Kashmir Valley with its lush meadows and snow-capped peaks.", season: "April to October", location: "Jammu & Kashmir", trip: "kashmir-paradise" },
  { src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80", cat: "Hill Stations", title: "Kerala Backwaters", dest: "Alleppey", desc: "Serene backwaters with traditional houseboats floating through palm-fringed canals.", season: "September to March", location: "Kerala", trip: "kerala-backwaters" },
  { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80", cat: "Adventure", title: "Ladakh Ride", dest: "Ladakh", desc: "Epic motorcycle journeys through the highest motorable passes in the world.", season: "May to September", location: "Ladakh", trip: "ladakh-adventure" },
  { src: "https://images.unsplash.com/photo-1582653291997-079a1c04e2a1?w=800&q=80", cat: "Hill Stations", title: "Ooty Hills", dest: "Ooty", desc: "The Queen of Hill Stations with its rolling green hills and tea plantations.", season: "March to June & October to December", location: "Tamil Nadu", trip: "ooty-coonoor" },
  { src: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80", cat: "Family", title: "Family Vacation Fun", dest: "Rishikesh", desc: "Perfect family getaways with activities for all ages in the lap of nature.", season: "September to June", location: "Uttarakhand", trip: "rishikesh-rafting" },
  { src: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800&q=80", cat: "Road Trips", title: "Highway Journey", dest: "Mumbai-Goa", desc: "Scenic coastal highways and open roads make for unforgettable road trips.", season: "October to March", location: "Maharashtra", trip: "" },
  { src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80", cat: "Pilgrimage", title: "Sacred Temple Visit", dest: "Tirupati", desc: "Experience divine spirituality at one of India's most revered temple destinations.", season: "Throughout the year", location: "Andhra Pradesh", trip: "tirupati-pilgrimage" },
  { src: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80", cat: "Hotels", title: "Resort Pool Paradise", dest: "Bali", desc: "Luxurious infinity pools overlooking tropical landscapes and pristine beaches.", season: "April to October", location: "Bali", trip: "bali-honeymoon" },
  { src: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80", cat: "Adventure", title: "Mountain Trek", dest: "Himachal", desc: "Challenging treks through scenic trails with panoramic mountain views.", season: "May to October", location: "Himachal Pradesh", trip: "manali-escape" },
  { src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80", cat: "Pilgrimage", title: "Spiritual Journey", dest: "Varanasi", desc: "Ancient temples, sacred ghats, and the eternal Ganges create a spiritual atmosphere.", season: "October to March", location: "Uttar Pradesh", trip: "varanasi-spiritual" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", cat: "Nature", title: "Sunset Serenity", dest: "Andaman", desc: "Spectacular sunsets over turquoise waters with silhouetted palm trees.", season: "October to May", location: "Andaman Islands", trip: "andaman-islands" },
  { src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", cat: "Honeymoon", title: "Bali Romance", dest: "Bali", desc: "Romantic getaways with private villas, sunset dinners, and couples spa treatments.", season: "April to October", location: "Bali", trip: "bali-honeymoon" },
  { src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80", cat: "Honeymoon", title: "Thailand Escapade", dest: "Thailand", desc: "Exotic beaches, vibrant culture, and luxury resorts perfect for couples.", season: "November to February", location: "Thailand", trip: "thailand-tour" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80", cat: "Hill Stations", title: "Coorg Coffee Country", dest: "Coorg", desc: "Rolling coffee plantations, misty hills, and serene landscapes in Karnataka.", season: "September to March", location: "Karnataka", trip: "mysore-coorg" },
  { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", cat: "Rentals", title: "Premium Car Rental", dest: "Bangalore", desc: "Well-maintained rental cars for self-drive or chauffeur-driven convenience.", season: "All year", location: "Bangalore", trip: "" },
  { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80", cat: "Rentals", title: "Tempo Traveller Rental", dest: "Bangalore", desc: "Spacious tempo travellers for group trips, corporate outings, and temple tours.", season: "All year", location: "Bangalore", trip: "" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", cat: "Adventure", title: "Dubai Skyline", dest: "Dubai", desc: "Modern architecture, desert safaris, and world-class shopping in Dubai.", season: "November to March", location: "Dubai", trip: "dubai-luxury" },
  { src: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80", cat: "Waterfalls", title: "Rishikesh Rapids", dest: "Rishikesh", desc: "White water rafting through the Ganges with stunning waterfall views.", season: "September to June", location: "Uttarakhand", trip: "rishikesh-rafting" },
  { src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80", cat: "Pilgrimage", title: "Varanasi Ghats", dest: "Varanasi", desc: "The spiritual heart of India with ancient ghats and the sacred Ganges River.", season: "October to March", location: "Uttar Pradesh", trip: "varanasi-spiritual" },
  { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80", cat: "Family", title: "Rajasthan Heritage", dest: "Rajasthan", desc: "Majestic forts, vibrant culture, and desert landscapes perfect for family adventures.", season: "October to March", location: "Rajasthan", trip: "rajasthan-heritage" },
];

interface LightboxData {
  index: number;
  items: typeof images;
}

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");
  const [lightbox, setLightbox] = useState<LightboxData | null>(null);

  const filtered = useMemo(
    () => activeCat === "All" ? images : images.filter((img) => img.cat === activeCat),
    [activeCat]
  );

  const openLightbox = useCallback((index: number) => {
    setLightbox({ index, items: filtered });
    document.body.style.overflow = "hidden";
  }, [filtered]);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const goTo = useCallback((dir: "prev" | "next") => {
    setLightbox((prev) => {
      if (!prev) return null;
      const total = prev.items.length;
      const newIndex = dir === "next"
        ? (prev.index + 1) % total
        : (prev.index - 1 + total) % total;
      return { ...prev, index: newIndex };
    });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goTo("prev");
      if (e.key === "ArrowRight") goTo("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, goTo]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? "next" : "prev");
  };

  return (
    <>
      <Navbar />
      <section className="page-banner">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" alt="Gallery" />
        <div className="page-banner-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Travel Gallery</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>Explore beautiful moments captured across destinations</motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button key={cat} className={`filter-tab ${activeCat === cat ? "active" : ""}`} onClick={() => setActiveCat(cat)}>{cat}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {filtered.map((img, i) => (
              <motion.div key={i} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                style={{ borderRadius: "16px", overflow: "hidden", cursor: "pointer", position: "relative", aspectRatio: "4/3", boxShadow: "0 4px 15px rgba(0,0,0,0.06)" }}
                onClick={() => openLightbox(i)}>
                <img src={img.src} alt={img.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px", background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
                  {img.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}
          onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
          style={{ cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <button onClick={closeLightbox} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.15)", border: "none", color: "white", width: 44, height: 44, borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <FaTimes />
          </button>

          <button onClick={(e) => { e.stopPropagation(); goTo("prev"); }} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", color: "white", width: 48, height: 48, borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <FaChevronLeft />
          </button>

          <div style={{ maxWidth: "800px", width: "100%", textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.items[lightbox.index].src} alt={lightbox.items[lightbox.index].title}
              style={{ width: "100%", maxHeight: "60vh", objectFit: "contain", borderRadius: "12px" }} />

            <div style={{ color: "white", marginTop: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, textAlign: "left" }}>{lightbox.items[lightbox.index].title}</h3>
                <span style={{ fontSize: "0.85rem", opacity: 0.6 }}>{lightbox.index + 1} of {lightbox.items.length}</span>
              </div>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", margin: "8px 0", fontSize: "0.85rem", opacity: 0.8 }}>
                <span><FaMapMarkerAlt /> {lightbox.items[lightbox.index].dest} — {lightbox.items[lightbox.index].location}</span>
                <span><FaCalendarAlt /> Best: {lightbox.items[lightbox.index].season}</span>
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>{lightbox.items[lightbox.index].desc}</p>
            </div>
          </div>

          <button onClick={(e) => { e.stopPropagation(); goTo("next"); }} style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", color: "white", width: 48, height: 48, borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <FaChevronRight />
          </button>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
