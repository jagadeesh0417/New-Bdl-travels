"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiArrowRight, HiCheck } from "react-icons/hi";

const steps = [
  { label: "Pickup", field: "pickup", placeholder: "Enter pickup location" },
  { label: "Destination", field: "destination", placeholder: "Enter destination" },
  { label: "Vehicle", field: "vehicle", placeholder: "Select vehicle type", options: ["Car", "SUV", "Tempo Traveller", "Mini Bus", "Luxury Bus"] },
  { label: "Date", field: "date", type: "date" },
  { label: "Passengers", field: "passengers", placeholder: "Number of passengers" },
];

export default function BookingSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const next = () => {
    const s = steps[step];
    if (!form[s.field]) return;
    if (step < steps.length - 1) setStep(step + 1);
    else {
      const msg = `Hi BDL Travels! I want to book a trip.%0APickup: ${form.pickup}%0ADestination: ${form.destination}%0AVehicle: ${form.vehicle}%0ADate: ${form.date}%0APassengers: ${form.passengers}`;
      window.open(`https://wa.me/919123456789?text=${msg}`, "_blank");
      setDone(true);
    }
  };

  return (
    <section id="booking" ref={ref} className="relative py-24 px-4 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#0A4DFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Book Your Ride
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Ready to Travel?
          </h2>
          <p className="text-gray-500 text-lg">
            Book in 30 seconds. Get confirmation instantly on WhatsApp.
          </p>
        </motion.div>

        {done ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-12 bg-white rounded-3xl shadow-premium"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <HiCheck size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">Booking Initiated!</h3>
            <p className="text-gray-500">Check WhatsApp for confirmation.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="bg-white rounded-3xl p-8 shadow-premium"
          >
            <div className="flex items-center justify-between mb-8">
              {steps.map((s, i) => (
                <div key={s.field} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    i <= step ? "bg-[#0A4DFF] text-white" : "bg-gray-100 text-gray-400"
                  }`}>
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-1 w-8 sm:w-16 mx-1 rounded transition-all ${
                      i < step ? "bg-[#0A4DFF]" : "bg-gray-100"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <label className="block text-sm font-semibold text-gray-600 mb-3">{steps[step].label}</label>
              {"options" in steps[step] ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {steps[step].options!.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => update(steps[step].field, opt)}
                      className={`p-4 rounded-xl text-sm font-medium border transition-all ${
                        form[steps[step].field] === opt
                          ? "border-[#0A4DFF] bg-[#0A4DFF]/5 text-[#0A4DFF]"
                          : "border-gray-100 text-gray-600 hover:border-gray-200"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type={("type" in steps[step] ? steps[step].type : "text") || "text"}
                  placeholder={steps[step].placeholder}
                  value={form[steps[step].field] || ""}
                  onChange={(e) => update(steps[step].field, e.target.value)}
                  className="w-full p-4 rounded-xl border border-gray-100 focus:border-[#0A4DFF] focus:ring-2 focus:ring-[#0A4DFF]/10 outline-none transition-all text-gray-700"
                />
              )}
            </motion.div>

            <button
              onClick={next}
              className="w-full flex items-center justify-center gap-2 p-4 bg-[#0A4DFF] text-white font-semibold rounded-xl hover:bg-[#0A4DFF]/90 transition-all cta-pulse"
            >
              {step < steps.length - 1 ? "Next" : "Book via WhatsApp"}
              <HiArrowRight />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
