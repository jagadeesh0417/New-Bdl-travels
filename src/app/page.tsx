"use client";

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import TrustSection from "@/components/TrustSection";
import GallerySection from "@/components/GallerySection";
import VehiclePricing from "@/components/VehiclePricing";
import HowWeWork from "@/components/HowWeWork";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EnquiryPopup from "@/components/EnquiryPopup";
import Footer from "@/components/Footer";

/* BDL Travels - Premium Vehicle Booking - Nandyal */
export default function Home() {
  return (
    <>
      <EnquiryPopup />
      <Navbar />
      <HeroSlider />

      <TrustSection />

      <GallerySection />

      <div id="services">
        <VehiclePricing />
      </div>

      <HowWeWork />
      <VideoSection />
      <ContactSection />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
