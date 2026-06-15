"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) setLoggedIn(true);
  };

  if (loggedIn) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 shadow-premium max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#0A4DFF]/10 flex items-center justify-center mx-auto mb-4">
            <HiShieldCheck size={32} className="text-[#0A4DFF]" />
          </div>
          <h1 className="text-2xl font-bold text-[#111827]">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-1">BDL Travels Management</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 rounded-xl border border-gray-100 focus:border-[#0A4DFF] focus:ring-2 focus:ring-[#0A4DFF]/10 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 rounded-xl border border-gray-100 focus:border-[#0A4DFF] focus:ring-2 focus:ring-[#0A4DFF]/10 outline-none"
          />
          <button
            type="submit"
            className="w-full p-4 bg-[#0A4DFF] text-white font-semibold rounded-xl hover:bg-[#0A4DFF]/90 transition-all"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "vehicles", label: "Vehicles" },
    { id: "packages", label: "Packages" },
    { id: "bookings", label: "Bookings" },
    { id: "gallery", label: "Gallery" },
    { id: "enquiries", label: "Enquiries" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A4DFF] to-[#D4A017] flex items-center justify-center">
                <span className="text-white font-bold text-xs">BDL</span>
              </div>
              <span className="font-semibold text-sm">Admin Panel</span>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-[#0A4DFF] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Vehicles", value: "85", color: "#0A4DFF" },
              { label: "Active Bookings", value: "24", color: "#10b981" },
              { label: "Pending Enquiries", value: "12", color: "#f59e0b" },
              { label: "Total Customers", value: "5,234", color: "#6366f1" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                <div className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab !== "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-sm text-center"
          >
            <div className="text-gray-400 text-lg mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</div>
            <p className="text-gray-400 text-sm">Manage your {activeTab} here. Add, edit, or delete entries.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
