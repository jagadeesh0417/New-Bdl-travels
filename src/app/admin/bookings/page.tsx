"use client";

import { useState, useEffect } from "react";

interface Booking {
  id: string;
  name: string;
  vehicle: string;
  total: string;
  payment: string;
  status: string;
  createdAt: string;
}

const paymentLabels: Record<string, string> = {
  upi: "UPI", card: "Card", netbanking: "Net Banking", wallet: "Wallet", cod: "Cash on Pickup",
};

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.bookings || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Bookings</h1>
          <p className="text-gray-500 text-sm mt-1">{bookings.length} total booking(s)</p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading bookings...</div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <div className="text-4xl mb-3">📋</div>
          <h3 className="text-lg font-semibold text-gray-600 mb-1">No Bookings Yet</h3>
          <p className="text-gray-400 text-sm">Bookings from the website will appear here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {bookings.map((b) => (
            <div key={b.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-50">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div>
                  <span className="text-sm font-bold text-[#0F2B46]">{b.id}</span>
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">{b.status}</span>
                </div>
                <span className="text-sm text-gray-400">{b.createdAt ? new Date(b.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : ""}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div><span className="text-gray-400 block text-xs">Customer</span><span className="font-medium">{b.name}</span></div>
                <div><span className="text-gray-400 block text-xs">Vehicle</span><span className="font-medium">{b.vehicle}</span></div>
                <div><span className="text-gray-400 block text-xs">Amount</span><span className="font-bold text-green-600">₹{b.total}</span></div>
                <div><span className="text-gray-400 block text-xs">Payment</span><span className="font-medium">{paymentLabels[b.payment] || b.payment}</span></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
