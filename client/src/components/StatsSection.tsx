/*
 * Bento grid of bold stat cards with enhanced visual effects.
 * Animated gradient borders, ambient orbs, subtle grid pattern.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    value: "20+",
    label: "Integrations",
    accent: "#00D9A6",
    accentRgba: "0,217,166",
  },
  {
    value: "<2min",
    label: "Setup Time",
    accent: "#00D9A6",
    accentRgba: "0,217,166",
  },
  {
    value: "100%",
    label: "Permission-Aware",
    accent: "#7C6BF0",
    accentRgba: "124,107,240",
  },
];

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section
      className="relative py-32 lg:py-44 overflow-hidden aurora-bg shimmer-border"
      ref={ref}
    >
      {/* Ambient glow — stronger */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(0,217,166,0.12) 0%, rgba(124,107,240,0.06) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(0,217,166,0.08) 50%, transparent 100%)",
        }}
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative p-8 md:p-10 lg:p-12 rounded-2xl overflow-hidden group"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: `rgba(${stat.accentRgba},0.2)`,
                scale: 1.02,
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.15]"
                style={{ backgroundColor: stat.accent }}
              />

              {/* Bottom-left glow */}
              <div
                className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500"
                style={{ backgroundColor: stat.accent }}
              />

              {/* Number */}
              <motion.div
                className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
                style={{
                  color: stat.accent,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.15,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                {stat.value}
              </motion.div>

              {/* Label */}
              <div
                className="mt-4 text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {stat.label}
              </div>

              {/* Decorative corner line */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path
                    d="M64 0 L64 20 M44 0 L64 0"
                    stroke={stat.accent}
                    strokeWidth="1"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
