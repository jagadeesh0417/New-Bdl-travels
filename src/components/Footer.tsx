"use client";

import { FaFacebook, FaTwitter, FaGooglePlusG, FaWhatsapp } from "react-icons/fa";
import { scrollToSection, whatsappNumber } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="footer-bdl">
      <div className="footer-bdl-container">
        <div className="footer-bdl-about">
          <p>
            BDL Travels is Bangalore&apos;s premier travel agency, offering a premium fleet of vehicles
            for trips, tours, and corporate travel. We prioritize safety, comfort, and punctuality
            in every journey.
          </p>
        </div>

        <div className="footer-bdl-links">
          <h3>Quick Links</h3>
          <ul>
            <li><button type="button" onClick={() => scrollToSection("hero")}>Home</button></li>
            <li><button type="button" onClick={() => scrollToSection("about")}>About Us</button></li>
            <li><button type="button" onClick={() => scrollToSection("gallery")}>Gallery</button></li>
            <li><button type="button" onClick={() => scrollToSection("services")}>Services</button></li>
            <li><button type="button" onClick={() => scrollToSection("contact")}>Contact Us</button></li>
          </ul>
        </div>

        <div className="footer-bdl-links">
          <h3>Our Services</h3>
          <ul>
            <li>Airport Transfers</li>
            <li>Family Trips</li>
            <li>Corporate Travel</li>
            <li>Wedding Transport</li>
            <li>Outstation Travel</li>
          </ul>
        </div>

        <div className="footer-bdl-brand">
          <div className="logo-circle">
            <span>BDL</span>
          </div>
          <p>&ldquo;Travel Beyond Limits&rdquo;</p>
          <p style={{ fontSize: "12px", opacity: 0.7, marginTop: "4px" }}>
            Yelhanka, Bangalore &ndash; 560064
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Google Plus"><FaGooglePlusG /></a>
            <a href={`https://wa.me/${whatsappNumber}`} aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bdl-bottom">
        &copy; {new Date().getFullYear()} BDL Travels. Design and developed by BDL Team
      </div>
    </footer>
  );
}
