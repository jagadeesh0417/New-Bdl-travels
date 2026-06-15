"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappNumber } from "@/lib/utils";

interface VehicleProductProps {
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  thumbnails: string[];
  whatsappMessage: string;
  altBg?: boolean;
  headingColor?: string;
}

export default function VehicleProduct({
  title,
  subtitle,
  description,
  mainImage,
  thumbnails,
  whatsappMessage,
  altBg = false,
}: VehicleProductProps) {
  const [activeImg, setActiveImg] = useState(mainImage);

  return (
    <section className={`vehicle-section ${altBg ? "vehicle-section-alt" : ""}`}>
      <div className="vehicle-left">
        <div className="vehicle-text">
          <h4>{title}</h4>
          <h2>{subtitle}</h2>
          <p>{description}</p>
          <div className="thumbnails-row">
            {thumbnails.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt={`${title} view ${i + 1}`}
                className={activeImg === thumb ? "active-thumb" : ""}
                onClick={() => setActiveImg(thumb)}
              />
            ))}
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="vehicle-right">
        <img src={activeImg} alt={subtitle} className="vehicle-main-image" />
      </div>
    </section>
  );
}
