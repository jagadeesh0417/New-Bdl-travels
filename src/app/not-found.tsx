"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl font-bold text-[#111827] mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex px-8 py-4 bg-[#0A4DFF] text-white font-semibold rounded-full hover:bg-[#0A4DFF]/90 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
