"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonials = [
  { name: "Rajesh Kumar", role: "Business Traveler", text: "Exceptional service! The luxury car was spotless and the driver was very professional. Made my business trip to Hyderabad seamless." },
  { name: "Priya Sharma", role: "Family Vacation", text: "We booked a Tempo Traveller for our family trip to Goa. The vehicle was comfortable and the team was very accommodating with our schedule." },
  { name: "Suresh Reddy", role: "Wedding Planner", text: "BDL Travels handled our wedding guest transport flawlessly. 10+ vehicles coordinated perfectly. Highly recommended!" },
  { name: "Anita Patel", role: "Corporate Client", text: "Our company has been using BDL for over 2 years now. Consistent quality, punctual service, and excellent support team." },
  { name: "Vikram Singh", role: "Tourist", text: "The Ooty trip package was incredible. Great vehicle, knowledgeable driver, and beautiful route planning. Will book again!" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="testimonials" ref={ref} className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0A4DFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Trusted by thousands of happy travelers across South India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:shadow-premium transition-all"
              style={{ background: "rgba(245, 247, 250, 0.8)", backdropFilter: "blur(20px)" }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <HiStar key={j} size={18} className="text-[#D4A017]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A4DFF] to-[#D4A017] flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#111827]">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
