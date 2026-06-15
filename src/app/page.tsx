"use client";

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import TrustSection from "@/components/TrustSection";
import GallerySection from "@/components/GallerySection";
import VehicleProduct from "@/components/VehicleProduct";
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

      {/* Vehicle Products */}
      <div id="services">
        <VehicleProduct
          title="Premium Cars"
          subtitle="Luxury Sedans & SUVs for Executive Travel"
          description="Experience unparalleled comfort with our premium car fleet. From luxury sedans to spacious SUVs, every vehicle is meticulously maintained with plush interiors, climate control, and professional chauffeurs. Perfect for business travel, airport transfers, and special occasions."
          mainImage="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
          thumbnails={[
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&q=80",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&q=80",
          ]}
          whatsappMessage="Hi BDL Travels! I am interested to know more about your Premium Cars."
        />
      </div>

      <VehicleProduct
        title="Tempo Traveller"
        subtitle="Spacious Group Travel with Comfort"
        description="Our Tempo Travellers are the perfect choice for group outings, family trips, and corporate events. With 12 to 18 seats, push-back recliners, ample legroom, and entertainment systems, your journey will be as enjoyable as the destination. Air-conditioned and driven by experienced professionals."
        mainImage="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
        thumbnails={[
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&q=80",
          "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=200&q=80",
          "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=200&q=80",
          "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=200&q=80",
        ]}
        whatsappMessage="Hi BDL Travels! I am interested to know more about your Tempo Traveller."
        altBg
      />

      <VehicleProduct
        title="Luxury Buses"
        subtitle="Premium Coaches for Large Groups & Events"
        description="Our luxury bus fleet includes well-maintained sleeper and semi-sleeper coaches ideal for long-distance travel, wedding transport, and corporate off-sites. Features include push-back seats, onboard entertainment, reading lights, charging points, and strict adherence to safety standards."
        mainImage="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80"
        thumbnails={[
          "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=200&q=80",
          "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=200&q=80",
          "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=200&q=80",
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&q=80",
        ]}
        whatsappMessage="Hi BDL Travels! I am interested to know more about your Luxury Buses."
      />

      <VehiclePricing />

      <HowWeWork />
      <VideoSection />
      <ContactSection />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
