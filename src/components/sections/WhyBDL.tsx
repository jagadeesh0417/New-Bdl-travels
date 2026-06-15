"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiShieldCheck, HiUsers, HiClock, HiTruck } from "react-icons/hi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: HiTruck, value: 100, suffix: "+", label: "Vehicles", color: "#0A4DFF" },
  { icon: HiUsers, value: 5000, suffix: "+", label: "Happy Customers", color: "#D4A017" },
  { icon: HiClock, value: 24, suffix: "/7", label: "Support", color: "#10b981" },
  { icon: HiShieldCheck, value: 10, suffix: "+ Years", label: "Experience", color: "#6366f1" },
];

const features = [
  {
    title: "Premium Fleet",
    desc: "Well-maintained luxury vehicles with professional drivers",
  },
  {
    title: "Best Prices",
    desc: "Competitive rates with no hidden charges & transparent pricing",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock customer service for your peace of mind",
  },
  {
    title: "Safe Travel",
    desc: "GPS tracking, sanitized vehicles, and insured rides",
  },
];

export default function WhyBDL() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0A4DFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Why BDL Travels
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Built for{" "}
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We redefine travel with premium service, reliability, and unmatched comfort
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center p-8 rounded-2xl bg-[#F5F7FA] hover:shadow-premium transition-all"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${stat.color}10` }}>
                <stat.icon size={28} style={{ color: stat.color }} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#111827] mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl border border-gray-100 hover:border-[#0A4DFF]/20 hover:shadow-premium transition-all"
            >
              <h3 className="text-lg font-bold text-[#111827] mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
