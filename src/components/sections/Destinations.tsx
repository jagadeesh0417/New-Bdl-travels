"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";

const destinations = [
  { name: "Hyderabad", desc: "City of Pearls", image: "https://images.unsplash.com/photo-1599517040030-e9607e4b47a0?w=600&q=80", color: "#0A4DFF" },
  { name: "Bangalore", desc: "Garden City", image: "https://images.unsplash.com/photo-1596178060671-7a80dc0c9774?w=600&q=80", color: "#6366f1" },
  { name: "Goa", desc: "Beach Paradise", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80", color: "#10b981" },
  { name: "Ooty", desc: "Queen of Hills", image: "https://images.unsplash.com/photo-1630332116592-a0a229c0d1b2?w=600&q=80", color: "#D4A017" },
  { name: "Tirupati", desc: "Sacred Pilgrimage", image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=600&q=80", color: "#f59e0b" },
  { name: "Araku", desc: "Valley of Coffee", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", color: "#ef4444" },
];

export default function Destinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" ref={ref} className="relative py-24 px-4 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0A4DFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Popular Destinations
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Where We Take You
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore amazing destinations with our premium travel services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <HiLocationMarker className="text-[#D4A017]" size={18} />
                  <span className="text-white/80 text-sm">{dest.desc}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
