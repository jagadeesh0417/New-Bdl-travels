"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Scene3D from "@/components/3d/FloatingVehicles";
import { scrollToSection } from "@/lib/utils";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <Scene3D />

      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A4DFF]/5 border border-[#0A4DFF]/10 text-[#0A4DFF] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#0A4DFF] animate-pulse" />
            Premium Travel Agency in Nandyal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#111827] mb-6 leading-[1.1]"
        >
          Travel Beyond
          <br />
          <span className="text-gradient">Limits</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Premium Vehicle Booking for Trips, Tours & Corporate Travel.
          Experience luxury and comfort with BDL Travels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 px-8 py-4 bg-[#0A4DFF] text-white text-lg font-semibold rounded-full shadow-glow hover:bg-[#0A4DFF]/90 transition-all cta-pulse"
          >
            Book Now
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("fleet")}
            className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-gray-200 text-gray-700 hover:border-[#0A4DFF] hover:text-[#0A4DFF] transition-all"
          >
            Explore Fleet
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-[#0A4DFF]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
