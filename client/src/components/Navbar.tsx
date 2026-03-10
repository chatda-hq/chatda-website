/*
 * Minimal navbar: Logo (left) | Manifesto + CTA pill (right)
 * Always visible, transparent bg with blur on scroll.
 */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

interface NavbarProps {
  onOpenForm: () => void;
}

export default function Navbar({ onOpenForm }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(18, 18, 30, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
            style={{ backgroundColor: "#00D9A6" }}
          >
            <span
              className="text-sm font-bold"
              style={{ color: "#0D0D1A", fontFamily: "'JetBrains Mono', monospace" }}
            >
              C
            </span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Chatda
          </span>
        </button>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/manifesto")}
            className="text-sm font-medium transition-colors duration-200 hidden sm:block"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            Manifesto
          </button>
          <button
            onClick={onOpenForm}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cta-glow"
            style={{
              backgroundColor: "#00D9A6",
              color: "#0D0D1A",
            }}
          >
            Start Your Pilot
          </button>
        </div>
      </div>
    </nav>
  );
}
