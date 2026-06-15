"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80",
  "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="relative py-24 px-4 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0A4DFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Our Fleet in Action
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A glimpse of our premium vehicles and memorable journeys
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-premium cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
