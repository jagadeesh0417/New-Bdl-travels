"use client";

import { whatsappNumber } from "@/lib/utils";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hi%20AKRADHI%20Travels!%20I%20want%20to%20know%20more%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Chat on WhatsApp"
    >
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
        alt="WhatsApp"
      />
    </a>
  );
}
