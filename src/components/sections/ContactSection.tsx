"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { phoneNumber, emailAddress, whatsappNumber } from "@/lib/utils";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi BDL Travels! I'm ${form.name}. ${form.message}. Contact: ${form.phone} / ${form.email}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0A4DFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We&apos;re here to help you plan your perfect journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F5F7FA] rounded-3xl p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A4DFF]/10 flex items-center justify-center flex-shrink-0">
                    <HiPhone size={22} className="text-[#0A4DFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Phone</h4>
                    <p className="text-gray-500">{phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A4DFF]/10 flex items-center justify-center flex-shrink-0">
                    <HiMail size={22} className="text-[#0A4DFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Email</h4>
                    <p className="text-gray-500">{emailAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A4DFF]/10 flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp size={22} className="text-[#0A4DFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">WhatsApp</h4>
                    <p className="text-gray-500">{phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A4DFF]/10 flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker size={22} className="text-[#0A4DFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Address</h4>
                    <p className="text-gray-500">Nandyal, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456!2d78.5!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMwJzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BDL Travels Location"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-premium border border-gray-100">
              <h3 className="text-xl font-bold text-[#111827] mb-6">Send us a Message</h3>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <p className="text-gray-600">Message sent! We&apos;ll respond on WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full p-4 rounded-xl border border-gray-100 focus:border-[#0A4DFF] focus:ring-2 focus:ring-[#0A4DFF]/10 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full p-4 rounded-xl border border-gray-100 focus:border-[#0A4DFF] focus:ring-2 focus:ring-[#0A4DFF]/10 outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="w-full p-4 rounded-xl border border-gray-100 focus:border-[#0A4DFF] focus:ring-2 focus:ring-[#0A4DFF]/10 outline-none transition-all"
                  />
                  <textarea
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    required
                    className="w-full p-4 rounded-xl border border-gray-100 focus:border-[#0A4DFF] focus:ring-2 focus:ring-[#0A4DFF]/10 outline-none transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full p-4 bg-[#0A4DFF] text-white font-semibold rounded-xl hover:bg-[#0A4DFF]/90 transition-all cta-pulse flex items-center justify-center gap-2"
                  >
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
