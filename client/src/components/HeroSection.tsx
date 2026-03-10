/*
 * DESIGN: Neural Cartography
 * Full viewport hero with dark gradient bg, node-graph image on right.
 * Asymmetric 60/40 layout. Headline left-aligned. Teal accent CTA.
 */
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663286076356/hAc3YyuRHV9HMDHK4pqFrQ/hero-bg-9mdLkjkooNm5eC4gTLEj3j.webp";

interface HeroSectionProps {
  onOpenForm: () => void;
}

export default function HeroSection({ onOpenForm }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#1A1A2E" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(26,26,46,0.95) 0%, rgba(26,26,46,0.7) 40%, rgba(26,26,46,0.3) 100%)",
          }}
        />
      </div>

      {/* Floating nodes decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: "15%", y: "20%", size: 6, delay: 0 },
          { x: "25%", y: "70%", size: 4, delay: 1.5 },
          { x: "70%", y: "15%", size: 8, delay: 0.8 },
          { x: "85%", y: "60%", size: 5, delay: 2.2 },
          { x: "50%", y: "80%", size: 3, delay: 1 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: node.x,
              top: node.y,
              width: node.size,
              height: node.size,
              backgroundColor: "#2ECDA7",
              boxShadow: "0 0 12px rgba(46, 205, 167, 0.6)",
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 py-20 lg:py-0">
        <div className="max-w-3xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">The Organizational Brain</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-6 text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.08] tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your organization's knowledge,{" "}
            <span style={{ color: "#2ECDA7" }}>structured for AI.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg lg:text-xl leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.7)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Chatda connects your scattered enterprise data into a structured,
            permission-aware memory layer — so your people find answers instantly
            and your AI agents act with real context.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={onOpenForm}
              className="px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200 cta-glow"
              style={{ backgroundColor: "#2ECDA7", color: "#1A1A2E" }}
            >
              Start Your Pilot
            </button>
            <button
              onClick={() => {
                document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-lg text-base font-medium transition-all duration-200 border"
              style={{
                color: "rgba(255,255,255,0.8)",
                borderColor: "rgba(255,255,255,0.2)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(46, 205, 167, 0.5)";
                e.currentTarget.style.color = "#2ECDA7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.8)";
              }}
            >
              See How It Works
            </button>
          </motion.div>

          {/* Tech credibility */}
          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              INTEGRATES WITH
            </span>
            <div className="flex items-center gap-4">
              {["Slack", "Notion", "Google", "Jira", "CRMs"].map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} style={{ color: "rgba(255,255,255,0.3)" }} />
      </motion.div>
    </section>
  );
}
