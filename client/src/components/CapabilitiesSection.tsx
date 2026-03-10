/*
 * Simplified capabilities — 3 cards with enhanced visual effects.
 * Animated icon glows, gradient borders on hover, ambient orbs.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Brain, Lock } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Universal Search",
    description: "One interface to search across every connected tool in your organization.",
    accent: "#00D9A6",
    accentRgba: "0,217,166",
  },
  {
    icon: Brain,
    title: "Institutional Memory",
    description: "Captures entities, relationships, decisions, and the reasoning behind them — building a living map of your organization.",
    accent: "#7C6BF0",
    accentRgba: "124,107,240",
  },
  {
    icon: Lock,
    title: "Permission-Aware",
    description: "Users only see what they are authorised to see.",
    accent: "#00D9A6",
    accentRgba: "0,217,166",
  },
];

export default function CapabilitiesSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section
      className="relative py-32 lg:py-44 overflow-hidden aurora-bg-violet"
      ref={ref}
    >
      {/* Ambient gradient — violet dominant */}
      <motion.div
        className="absolute rounded-full blur-[140px]"
        style={{
          width: 600,
          height: 600,
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(124,107,240,0.12) 0%, rgba(0,217,166,0.04) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Secondary teal orb */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          right: "-5%",
          background: "radial-gradient(circle, rgba(0,217,166,0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -30, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle cross-hatch pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="capGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#7C6BF0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#capGrid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white max-w-3xl"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Built for{" "}
          <span style={{ color: "#7C6BF0" }}>enterprise reality.</span>
        </motion.h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="group relative p-8 md:p-10 rounded-2xl transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.06)",
                borderColor: `rgba(${cap.accentRgba},0.3)`,
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-[0.18] transition-opacity duration-500"
                style={{ backgroundColor: cap.accent }}
              />

              {/* Icon with animated ring */}
              <div className="relative mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center relative z-10"
                  style={{
                    backgroundColor: `rgba(${cap.accentRgba},0.12)`,
                    border: `1px solid rgba(${cap.accentRgba},0.2)`,
                  }}
                >
                  <cap.icon
                    size={26}
                    style={{ color: cap.accent }}
                    strokeWidth={1.5}
                  />
                </div>
                {/* Pulsing ring behind icon */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: `1px solid rgba(${cap.accentRgba},0.2)`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {cap.title}
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
