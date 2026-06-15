"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "hero" },
  { label: "Vehicles", href: "fleet" },
  { label: "Packages", href: "packages" },
  { label: "Services", href: "services" },
  { label: "Gallery", href: "gallery" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#111827] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A4DFF]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A4DFF] to-[#D4A017] flex items-center justify-center">
                <span className="text-white font-bold text-sm">BDL</span>
              </div>
              <div>
                <span className="text-lg font-bold">BDL</span>
                <span className="text-lg font-light text-gray-400 ml-1">Travels</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium vehicle booking for trips, tours & corporate travel.
              Experience luxury and comfort with BDL Travels.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Airport Transfers</li>
              <li className="text-gray-400 text-sm">Family Trips</li>
              <li className="text-gray-400 text-sm">Corporate Travel</li>
              <li className="text-gray-400 text-sm">Wedding Transport</li>
              <li className="text-gray-400 text-sm">Tour Packages</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[FaFacebook, FaInstagram, FaYoutube, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0A4DFF] hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              Nandyal, Andhra Pradesh, India
            </p>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BDL Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
