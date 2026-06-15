"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="w-20 h-20 mx-auto relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#0A4DFF]/20" />
                <div className="absolute inset-1 rounded-full border-2 border-transparent border-t-[#0A4DFF] animate-spin" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#0A4DFF] to-[#D4A017] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BDL</span>
                </div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold text-[#111827] mb-2"
            >
              BDL Travels
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[#6B7280] text-sm mb-8"
            >
              Premium Travel Solutions
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1.5, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-[#0A4DFF] to-[#D4A017] rounded-full"
              style={{ width: 200, margin: "0 auto", transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
