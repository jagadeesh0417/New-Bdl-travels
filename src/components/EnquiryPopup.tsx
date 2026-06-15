"use client";

import { useEffect, useState } from "react";
import { whatsappNumber } from "@/lib/utils";

export default function EnquiryPopup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", message: "" });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi BDL Travels! I'm ${form.name}. I'm interested in ${form.vehicle}. ${form.message}. Contact: ${form.phone}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setShow(false);
  };

  return (
    <div className={`enquiry-popup ${show ? "show" : ""}`}>
      <button className="close-enquiry" onClick={() => setShow(false)}>
        &times;
      </button>
      <form onSubmit={handleSubmit}>
        <h3>Quick Enquiry</h3>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Vehicle Type (e.g., Car, Bus)"
          required
          value={form.vehicle}
          onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
        />
        <textarea
          rows={3}
          placeholder="Your Message"
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
