"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { siteName, phoneNumber } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Trips", href: "/trips" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolid = !isHome || scrolled;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        padding: showSolid ? "10px 0" : "20px 0",
        transition: "all 0.3s ease",
        background: showSolid
          ? "rgba(10,77,255,0.95)"
          : "transparent",
        backdropFilter: showSolid ? "blur(12px)" : "none",
        WebkitBackdropFilter: showSolid ? "blur(12px)" : "none",
        borderBottom: showSolid ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{
          textDecoration: "none",
          color: "white",
          fontSize: "1.4rem",
          fontWeight: 800,
          letterSpacing: "-0.5px",
        }}>
          {siteName}
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  opacity: pathname === link.href ? 1 : 0.8,
                  borderBottom: pathname === link.href ? "2px solid #D4A017" : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = pathname === link.href ? "1" : "0.8"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={`tel:${phoneNumber}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
          >
            <FaPhone size={14} />
            {phoneNumber}
          </a>

          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.4rem",
              cursor: "pointer",
              display: "none",
            }}
            className="mobile-menu-btn"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            background: "rgba(10,77,255,0.98)",
            backdropFilter: "blur(12px)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                opacity: pathname === link.href ? 1 : 0.8,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          nav > div > div > div:first-child { display: none !important; }
          nav > div > div > a { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
