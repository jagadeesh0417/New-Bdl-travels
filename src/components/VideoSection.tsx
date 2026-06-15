"use client";

import { scrollToSection } from "@/lib/utils";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-bg">
        <iframe
          src="https://www.youtube.com/embed/7FWFZtWgLPk?autoplay=1&mute=1&loop=1&playlist=7FWFZtWgLPk&controls=0&showinfo=0&rel=0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="BDL Travels Experience"
        />
      </div>

      <div className="video-overlay" />

      <div className="video-content">
        <h1>Experience Premium Travel with BDL</h1>
        <button
          onClick={() => scrollToSection("contact")}
          className="video-cta"
        >
          Book Your Ride
        </button>
      </div>
    </section>
  );
}
