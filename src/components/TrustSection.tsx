"use client";

import { FaShieldAlt, FaChartLine, FaUsers, FaCertificate, FaCheckCircle } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";

const benefits = [
  { icon: FaCheckCircle, text: "RTA & Motor Vehicles Department approved" },
  { icon: FaShieldAlt, text: "Fully insured fleet with comprehensive coverage" },
  { icon: FaChartLine, text: "GPS-enabled real-time vehicle tracking" },
  { icon: FaUsers, text: "Verified & trained professional drivers" },
  { icon: FaCertificate, text: "Safety certified & regularly maintained vehicles" },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F8F9FC] py-16 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-white p-10 flex-1 flex flex-col justify-center">
          <div className="text-center mb-5">
            <div className="w-24 h-24 mx-auto bg-[#0A4DFF]/5 rounded-full flex items-center justify-center">
              <GiCommercialAirplane size={48} className="text-[#0A4DFF]" />
            </div>
          </div>
          <h2 className="text-center text-[#0A4DFF] text-2xl font-bold mb-3">
            Government Approved & Fully Insured
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed text-justify">
            BDL Travels is a registered transport provider compliant with all RTA and Motor Vehicles
            Act regulations. Every vehicle in our fleet undergoes rigorous safety inspections and is
            fully insured for passenger protection. Travel with confidence knowing you&apos;re in safe hands.
          </p>
        </div>

        <div className="bg-[#0A4DFF] p-10 flex-1 flex flex-col justify-center">
          <h3 className="text-white text-2xl font-bold mb-6">Why Travel with BDL?</h3>
          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white text-base">
                <item.icon className="text-white text-lg flex-shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
