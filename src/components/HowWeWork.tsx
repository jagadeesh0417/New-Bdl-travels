"use client";

import { FaComments, FaSearch, FaCar, FaSmile } from "react-icons/fa";

const steps = [
  { icon: FaComments, title: "Consultation", desc: "Tell us your travel needs, destination, and group size." },
  { icon: FaSearch, title: "Choose Vehicle", desc: "Pick from our premium fleet of cars, Tempo Travellers, or buses." },
  { icon: FaCar, title: "Book & Pay", desc: "Confirm your booking instantly via WhatsApp with easy payment." },
  { icon: FaSmile, title: "Enjoy the Ride", desc: "Sit back and enjoy a comfortable, safe journey with BDL." },
];

export default function HowWeWork() {
  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-heading">How We Work</h2>
        <p className="process-subtext">
          A simple 4-step process to get you on the road
        </p>

        <div className="process-steps max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div className="process-step" key={i}>
              <step.icon className="icon" />
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
