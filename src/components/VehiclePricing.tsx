"use client";

import { FaWhatsapp, FaRupeeSign } from "react-icons/fa";
import { whatsappNumber } from "@/lib/utils";

const vehicles = [
  {
    name: "Toyota Etios",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
    price: "12/km",
    desc: "Reliable AC sedan, fuel-efficient & comfortable for city and short trips.",
  },
  {
    name: "Toyota Dzire",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
    price: "13/km",
    desc: "Spacious sedan with premium interiors, great for airport transfers & business travel.",
  },
  {
    name: "Honda Amaze",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
    price: "13/km",
    desc: "Smooth & stylish sedan with excellent mileage, ideal for executive travel.",
  },
  {
    name: "Hyundai Verna",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
    price: "14/km",
    desc: "Premium sedan with sporty design and feature-rich cabin for a luxurious ride.",
  },
  {
    name: "Maruti Ertiga",
    category: "MPV",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
    price: "14/km",
    desc: "7-seater family MPV with ample legroom, perfect for family outings & temple trips.",
  },
  {
    name: "Toyota Innova Crysta",
    category: "MUV",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
    price: "20/km",
    desc: "Premium 7-seater with legendary comfort, ideal for long-distance family tours.",
  },
  {
    name: "Mahindra Scorpio",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
    price: "16/km",
    desc: "Rugged & powerful SUV, great for rough roads and group travel in style.",
  },
  {
    name: "Mahindra XUV700",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
    price: "19/km",
    desc: "Modern flagship SUV with advanced features, luxury interiors & powerful engine.",
  },
  {
    name: "Force Traveller 12-Seater",
    category: "Tempo Traveller",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80",
    price: "22/km",
    desc: "Push-back seats, AC, music system – ideal for group trips & temple tours.",
  },
  {
    name: "Force Traveller 16-Seater",
    category: "Tempo Traveller",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80",
    price: "24/km",
    desc: "Larger traveller with extra seats for bigger groups, comfortable for long rides.",
  },
  {
    name: "Tata Winger 12-Seater",
    category: "Tempo Traveller",
    image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=400&q=80",
    price: "18/km",
    desc: "Economical & reliable traveller for day trips, school outings & events.",
  },
  {
    name: "Volvo A/C Multi-Axle",
    category: "Luxury Bus",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80",
    price: "45/km",
    desc: "Ultra-luxury push-back sleeper coach with washroom, ideal for long-distance tours.",
  },
  {
    name: "Non-AC Sleeper Bus",
    category: "Bus",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80",
    price: "28/km",
    desc: "Budget-friendly sleeper bus for large groups, pilgrimages & corporate off-sites.",
  },
  {
    name: "Mini Bus 26-Seater",
    category: "Bus",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
    price: "35/km",
    desc: "Perfect for wedding guests, college fests & medium-sized group events.",
  },
];

export default function VehiclePricing() {
  return (
    <section style={{
      padding: "60px 20px",
      background: "#F8F9FC",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#0A4DFF",
            margin: "0 0 8px",
          }}>
            Our Fleet & Pricing
          </h2>
          <p style={{ color: "#6B7280", fontSize: "15px", margin: 0 }}>
            Select a vehicle and book instantly on WhatsApp
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: "20px",
        }}>
          {vehicles.map((v) => (
            <div
              key={v.name}
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.06)";
              }}
            >
              <div style={{
                height: "180px",
                overflow: "hidden",
              }}>
                <img
                  src={v.image}
                  alt={v.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: "16px 18px 20px" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "6px",
                }}>
                  <h3 style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#111827",
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    {v.name}
                  </h3>
                  <span style={{
                    background: "#0A4DFF10",
                    color: "#0A4DFF",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                    marginLeft: "8px",
                  }}>
                    {v.category}
                  </span>
                </div>

                <p style={{
                  fontSize: "13px",
                  color: "#6B7280",
                  margin: "0 0 10px",
                  lineHeight: 1.4,
                }}>
                  {v.desc}
                </p>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "2px",
                  }}>
                    <FaRupeeSign size={12} color="#059669" />
                    <span style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#059669",
                    }}>
                      {v.price}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi BDL Travels! I am interested in booking ${v.name} (${v.category}) at ${v.price}. Please share availability and payment details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#25D366",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "30px",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FaWhatsapp size={16} />
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
