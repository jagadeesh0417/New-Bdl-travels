"use client";

import { useState, useMemo, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { allTrips } from "@/lib/trip-data";
import { rentals } from "@/lib/rental-data";
import { siteName, whatsappNumber } from "@/lib/utils";
import { FaWhatsapp, FaCreditCard, FaMobileAlt, FaUniversity, FaWallet, FaMoneyBillWave } from "react-icons/fa";

const paymentMethods = [
  { id: "upi", label: "UPI", icon: <FaMobileAlt /> },
  { id: "card", label: "Credit / Debit Card", icon: <FaCreditCard /> },
  { id: "netbanking", label: "Net Banking", icon: <FaUniversity /> },
  { id: "wallet", label: "Wallets", icon: <FaWallet /> },
  { id: "cod", label: "Cash on Pickup", icon: <FaMoneyBillWave /> },
];

function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tripSlug = searchParams.get("trip");
  const rentalSlug = searchParams.get("rental");

  const trip = useMemo(() => allTrips.find((t) => t.slug === tripSlug), [tripSlug]);
  const rental = useMemo(() => rentals.find((r) => r.slug === rentalSlug), [rentalSlug]);

  const [form, setForm] = useState({
    name: "", mobile: "", email: "", pickup: "", drop: "", pickupDate: "", returnDate: "",
    vehicle: trip?.title || rental?.name || "", passengers: "1", requests: "",
  });
  const [payment, setPayment] = useState("upi");
  const [submitting, setSubmitting] = useState(false);

  const bookingId = useMemo(() => `AKR${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`, []);

  const totalPrice = useMemo(() => {
    const base = trip?.price || rental?.dailyPrice || "₹0";
    const num = parseInt(base.replace(/[^0-9]/g, ""), 10) || 0;
    return num + Math.round(num * 0.05);
  }, [trip, rental]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const msg = `Booking Request - ${siteName}
ID: ${bookingId}
Name: ${form.name}
Mobile: ${form.mobile}
Vehicle: ${form.vehicle}
Pickup: ${form.pickup}
Drop: ${form.drop}
Dates: ${form.pickupDate} to ${form.returnDate}
Passengers: ${form.passengers}
Total: ₹${totalPrice}
Payment: ${payment}
Requests: ${form.requests}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");

    setTimeout(() => {
      router.push(`/booking/confirmation?id=${bookingId}&name=${encodeURIComponent(form.name)}&vehicle=${encodeURIComponent(form.vehicle)}&total=${totalPrice}&payment=${payment}`);
    }, 500);
  }, [form, payment, totalPrice, bookingId, router]);

  return (
    <section className="section-padding" style={{ paddingTop: "120px" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 className="section-title">Book Your {trip ? "Trip" : "Rental"}</h1>
          <div className="gold-underline" />
        </motion.div>

        {(trip || rental) && (
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "30px", flexWrap: "wrap" }}>
            <span style={{ background: "#0A4DFF10", padding: "8px 16px", borderRadius: "10px", fontSize: "0.9rem" }}>
              {trip ? `Trip: ${trip.title} (${trip.duration})` : `Vehicle: ${rental!.name}`}
            </span>
            <span style={{ background: "#05966910", padding: "8px 16px", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 700, color: "#059669" }}>
              Total: ₹{totalPrice}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="grid-2" style={{ gap: "16px", marginBottom: "16px" }}>
            <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="contact-form" style={{ padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none" }} />
            <input type="tel" placeholder="Mobile Number *" required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} style={{ padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none" }} />
          </div>
          <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ width: "100%", padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none", marginBottom: "16px" }} />
          <div className="grid-2" style={{ gap: "16px", marginBottom: "16px" }}>
            <input type="text" placeholder="Pickup Location *" required value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} style={{ padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none" }} />
            <input type="text" placeholder="Drop Location *" required value={form.drop} onChange={(e) => setForm({ ...form, drop: e.target.value })} style={{ padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none" }} />
          </div>
          <div className="grid-2" style={{ gap: "16px", marginBottom: "16px" }}>
            <input type="date" placeholder="Pickup Date *" required value={form.pickupDate} onChange={(e) => setForm({ ...form, pickupDate: e.target.value })} style={{ padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none" }} />
            <input type="date" placeholder="Return Date *" required value={form.returnDate} onChange={(e) => setForm({ ...form, returnDate: e.target.value })} style={{ padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none" }} />
          </div>
          <div className="grid-2" style={{ gap: "16px", marginBottom: "16px" }}>
            <input type="text" placeholder="Vehicle (pre-filled)" value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })} style={{ padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none" }} />
            <select value={form.passengers} onChange={(e) => setForm({ ...form, passengers: e.target.value })} style={{ padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none" }}>
              {[1,2,3,4,5,6,7,8,9,10,15,20,25,30,40,50].map((n) => <option key={n} value={n}>{n} Passenger{n > 1 ? "s" : ""}</option>)}
            </select>
          </div>
          <textarea rows={3} placeholder="Special Requests (optional)" value={form.requests} onChange={(e) => setForm({ ...form, requests: e.target.value })} style={{ width: "100%", padding: "14px 18px", border: "1px solid #E5E7EB", borderRadius: "12px", fontSize: "0.9rem", outline: "none", marginBottom: "16px", resize: "vertical" }} />

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>Payment Method</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px" }}>
              {paymentMethods.map((pm) => (
                <button key={pm.id} type="button" onClick={() => setPayment(pm.id)} style={{
                  display: "flex", alignItems: "center", gap: "8px", padding: "12px", borderRadius: "12px", border: payment === pm.id ? "2px solid #0A4DFF" : "1px solid #E5E7EB",
                  background: payment === pm.id ? "#0A4DFF10" : "white", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600, color: "#374151", transition: "all 0.3s",
                }}>
                  <span style={{ color: "#0A4DFF" }}>{pm.icon}</span> {pm.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ background: "#F8F9FC", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>Booking Summary</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>Vehicle</span><span style={{ fontWeight: 600 }}>{form.vehicle}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>Duration</span><span style={{ fontWeight: 600 }}>{form.pickupDate && form.returnDate ? `${Math.max(1, Math.round((new Date(form.returnDate).getTime() - new Date(form.pickupDate).getTime()) / 86400000))} day(s)` : "—"}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>Base Price</span><span style={{ fontWeight: 600 }}>₹{parseInt((trip?.price || rental?.dailyPrice || "₹0").replace(/[^0-9]/g, "")) || 0}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>Taxes (5%)</span><span style={{ fontWeight: 600 }}>₹{Math.round((parseInt((trip?.price || rental?.dailyPrice || "₹0").replace(/[^0-9]/g, "")) || 0) * 0.05)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #E5E7EB", paddingTop: "8px" }}>
                <span style={{ fontWeight: 700 }}>Total Amount</span><span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#059669" }}>₹{totalPrice}</span>
              </div>
            </div>
          </div>

          <button type="submit" disabled={submitting} className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "16px" }}>
            {submitting ? "Processing..." : <> <FaWhatsapp /> Confirm Booking via WhatsApp</>}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function Booking() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="section-padding" style={{ textAlign: "center", paddingTop: "150px" }}>Loading...</div>}>
        <BookingForm />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
