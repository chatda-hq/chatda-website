/*
 * DESIGN: Neural Cartography
 * Dark navy bg. Logo, nav links, social, contact. "Built in Singapore" badge.
 */
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { label: "Product", href: "#capabilities" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Deployment", href: "#deployment" },
    { label: "About", href: "#trust" },
    { label: "Contact", href: "mailto:hello@chatda.ai" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#12121F" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#2ECDA7" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "#1A1A2E", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  C
                </span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Chatda
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm mb-6"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              The Organizational Brain. Making institutional knowledge
              structured, accessible, and trustworthy — so that everyday teams
              can work at the speed AI now makes possible.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs"
              style={{
                backgroundColor: "rgba(46, 205, 167, 0.08)",
                border: "1px solid rgba(46, 205, 167, 0.15)",
                color: "#2ECDA7",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <MapPinIcon />
              Built in Singapore
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-medium mb-4 tracking-wider"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("mailto") ? (
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#2ECDA7")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#2ECDA7")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4
              className="text-xs font-medium mb-4 tracking-wider"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              LEGAL
            </h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#2ECDA7")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(46, 205, 167, 0.1)";
                  e.currentTarget.style.color = "#2ECDA7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(46, 205, 167, 0.1)";
                  e.currentTarget.style.color = "#2ECDA7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                }}
                aria-label="X / Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            &copy; {new Date().getFullYear()} Chatda. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            hello@chatda.ai
          </p>
        </div>
      </div>
    </footer>
  );
}

function MapPinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
