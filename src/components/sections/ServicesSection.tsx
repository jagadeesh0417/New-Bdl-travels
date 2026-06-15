"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiUsers, HiBriefcase, HiHeart, HiCamera, HiGlobe } from "react-icons/hi";
import { TbPlaneDeparture } from "react-icons/tb";

const services = [
  { icon: TbPlaneDeparture, title: "Airport Transfers", desc: "Pickup & drop from airports across South India" },
  { icon: HiUsers, title: "Family Trips", desc: "Comfortable journeys for family vacations" },
  { icon: HiBriefcase, title: "Corporate Travel", desc: "Executive travel solutions for businesses" },
  { icon: HiHeart, title: "Wedding Transport", desc: "Luxury convoy for your special day" },
  { icon: HiCamera, title: "Tour Packages", desc: "Curated sightseeing experiences" },
  { icon: HiGlobe, title: "Outstation Travel", desc: "Inter-city travel at your convenience" },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0A4DFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive travel services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-[#0A4DFF]/20 hover:shadow-premium transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0A4DFF]/5 flex items-center justify-center mb-5 group-hover:bg-[#0A4DFF]/10 transition-all">
                <service.icon size={28} className="text-[#0A4DFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
