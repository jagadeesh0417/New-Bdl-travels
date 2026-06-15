"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80",
    box: "Premium Fleet",
    title: "Luxury Vehicles for Every Journey",
  },
  {
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80",
    box: "Comfort on Wheels",
    title: "Travel Beyond Limits with BDL",
  },
  {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
    box: "Reliable Service",
    title: "Your Trusted Travel Partner in Nandyal",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      speed: 1000,
      autoplay: { delay: 5000, disableOnInteraction: false },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
    return () => swiper.destroy();
  }, []);

  return (
    <section id="hero">
      <div className="swiper-hero" ref={swiperRef}>
        <div className="swiper-wrapper">
          {slides.map((slide, i) => (
            <div className="swiper-slide" key={i}>
              <img
                src={slide.image}
                className="slide-image zoom-pan"
                alt={slide.box}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="caption-overlay">
                <div className="caption-box">{slide.box}</div>
                <h2 className="caption-title">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-button-next !text-white !hidden md:!flex" />
        <div className="swiper-button-prev !text-white !hidden md:!flex" />
        <div className="swiper-pagination !bottom-6" />
      </div>
    </section>
  );
}
