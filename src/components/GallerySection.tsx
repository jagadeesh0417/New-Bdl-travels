"use client";

import { useState } from "react";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80", alt: "Luxury car fleet", category: "cars" },
  { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80", alt: "Premium sedan", category: "cars" },
  { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80", alt: "SUV vehicle", category: "cars" },
  { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80", alt: "Tempo traveller", category: "tempo" },
  { src: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=400&q=80", alt: "Mini bus", category: "buses" },
  { src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80", alt: "Luxury bus interior", category: "buses" },
  { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", alt: "Sports car", category: "cars" },
  { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80", alt: "Bus fleet", category: "buses" },
  { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80", alt: "Luxury car", category: "cars" },
  { src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80", alt: "SUV", category: "cars" },
];

const categories = [
  { value: "all", label: "ALL" },
  { value: "cars", label: "CARS" },
  { value: "tempo", label: "TEMPO" },
  { value: "buses", label: "BUSES" },
];

export default function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery">
      <div className="section-header-blue">
        <h2>OUR FLEET GALLERY</h2>
        <div className="section-underline" />
      </div>

      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`filter-btn ${filter === cat.value ? "active" : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="sr-only">BDL Travels fleet gallery showcasing our premium vehicles for hire in Nandyal</p>

      <div className="gallery-grid max-w-7xl mx-auto">
        {filtered.map((item, i) => (
          <div key={i} className="gallery-item">
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              onClick={() => setLightbox(item.src)}
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-5 right-8 text-white text-4xl cursor-pointer bg-none border-none"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <img src={lightbox} alt="Gallery preview" />
        </div>
      )}
    </section>
  );
}
