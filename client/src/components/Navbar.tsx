/*
 * DESIGN: Neural Cartography — Swiss precision + generative data art
 * Sticky nav appears on scroll past hero. Deep navy bg with teal accent CTA.
 * JetBrains Mono for logo, Inter for nav links.
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenForm: () => void;
}

export default function Navbar({ onOpenForm }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#capabilities" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Deployment", href: "#deployment" },
    { label: "About", href: "#trust" },
  ];

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop sticky nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(26, 26, 46, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#2ECDA7" }}>
              <span className="text-sm font-bold" style={{ color: "#1A1A2E", fontFamily: "'JetBrains Mono', monospace" }}>C</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Chatda</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onOpenForm}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cta-glow"
              style={{
                backgroundColor: "#2ECDA7",
                color: "#1A1A2E",
              }}
            >
              Start Your Pilot
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t" style={{ borderColor: "rgba(46, 205, 167, 0.15)", backgroundColor: "rgba(26, 26, 46, 0.98)" }}>
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-gray-300 hover:text-white py-2 text-base transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile fixed bottom CTA */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 transition-all duration-500 ${
          scrolled ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(26, 26, 46, 0.95)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(46, 205, 167, 0.2)",
        }}
      >
        <button
          onClick={onOpenForm}
          className="w-full py-3 rounded-lg text-sm font-semibold cta-glow"
          style={{ backgroundColor: "#2ECDA7", color: "#1A1A2E" }}
        >
          Start Your Pilot
        </button>
      </div>
    </>
  );
}
