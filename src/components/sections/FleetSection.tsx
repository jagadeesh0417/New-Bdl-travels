"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineUsers, HiOutlineTruck, HiOutlineBriefcase } from "react-icons/hi";
import { LuCar, LuBus } from "react-icons/lu";
import { BsBox } from "react-icons/bs";

const fleet = [
  { name: "Luxury Cars", icon: LuCar, desc: "Premium sedans & SUVs for executive travel", color: "#0A4DFF", count: "25+" },
  { name: "SUVs & MUVs", icon: BsBox, desc: "Spacious vehicles for family & group trips", color: "#6366f1", count: "20+" },
  { name: "Tempo Traveller", icon: HiOutlineUsers, desc: "Comfortable 12-18 seater for groups", color: "#D4A017", count: "15+" },
  { name: "Mini Bus", icon: HiOutlineTruck, desc: "21-35 seater for events & tours", color: "#10b981", count: "10+" },
  { name: "Luxury Bus", icon: LuBus, desc: "Premium sleeper & semi-sleeper coaches", color: "#f59e0b", count: "8+" },
  { name: "Corporate Fleet", icon: HiOutlineBriefcase, desc: "Dedicated fleet for corporate accounts", color: "#ef4444", count: "12+" },
];

export default function FleetSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fleet" ref={ref} className="relative py-24 px-4 bg-[#F5F7FA] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0A4DFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Fleet
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Premium Vehicle Collection
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choose from our extensive fleet of well-maintained vehicles for every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-premium hover:shadow-glow transition-all duration-500 cursor-pointer border border-gray-100/50"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                style={{ background: `${vehicle.color}10` }}
              >
                <vehicle.icon size={32} style={{ color: vehicle.color }} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">{vehicle.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{vehicle.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-400">Available</span>
                <span className="text-lg font-bold" style={{ color: vehicle.color }}>
                  {vehicle.count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
