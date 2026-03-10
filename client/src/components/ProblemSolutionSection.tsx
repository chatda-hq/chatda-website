/*
 * Merged Problem + Solution section with enhanced visual effects.
 * Ambient gradient orbs, subtle grid, diagram with glow border.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SOLUTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663286076356/hAc3YyuRHV9HMDHK4pqFrQ/solution-diagram-kTDBzx9xhXZA97aGnsDdeA.webp";

export default function ProblemSolutionSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ backgroundColor: "#0D0D1A" }}
      ref={ref}
    >
      {/* Ambient gradient orbs — stronger */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 550,
          height: 550,
          top: "10%",
          right: "-8%",
          background: "radial-gradient(circle, rgba(0,217,166,0.14) 0%, rgba(0,217,166,0.04) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, 10, 0],
          y: [0, 15, -10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: 450,
          height: 450,
          bottom: "5%",
          left: "-5%",
          background: "radial-gradient(circle, rgba(124,107,240,0.12) 0%, rgba(124,107,240,0.03) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -12, 8, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Horizontal moving gradient band */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(0,217,166,0.15) 30%, rgba(124,107,240,0.15) 70%, transparent 100%)",
        }}
        animate={{ top: ["20%", "80%", "20%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#00D9A6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Problem statement */}
        <motion.p
          className="text-base md:text-lg font-medium max-w-2xl"
          style={{ color: "rgba(255,255,255,0.35)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Your knowledge lives in a dozen tools. Your AI has no idea what your company actually knows.
        </motion.p>

        {/* Integration badges */}
        <motion.div
          className="mt-6 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {["Slack", "Notion", "Google", "Jira", "CRMs"].map((tool) => (
            <span
              key={tool}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                color: "rgba(255,255,255,0.35)",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.02em",
              }}
            >
              {tool}
            </span>
          ))}
        </motion.div>

        {/* Solution headline */}
        <motion.h2
          className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white max-w-4xl"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Chatda is the{" "}
          <span style={{ color: "#00D9A6" }}>memory layer</span>{" "}
          underneath every AI tool you use.
        </motion.h2>

        {/* Brief description */}
        <motion.p
          className="mt-6 text-lg max-w-2xl"
          style={{ color: "rgba(255,255,255,0.45)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          It ingests your scattered data, structures it into a permission-aware knowledge graph, and makes it available for both human search and AI agent consumption.
        </motion.p>

        {/* Architecture diagram with glow effect */}
        <motion.div
          className="mt-16 max-w-4xl relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glow behind diagram */}
          <div
            className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
            style={{
              background: "linear-gradient(135deg, rgba(0,217,166,0.15) 0%, rgba(124,107,240,0.1) 100%)",
            }}
          />
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.02)",
              boxShadow: "0 0 60px rgba(0,217,166,0.04), 0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={SOLUTION_IMG}
              alt="Data flows from enterprise tools like Slack, Notion, Google Drive, Jira, and CRMs into Chatda's knowledge graph, then branches out to human search and AI agent context"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Key differentiator callout */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p
            className="text-sm max-w-xl"
            style={{
              color: "rgba(0, 217, 166, 0.6)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.01em",
            }}
          >
            Not an AI assistant — the knowledge infrastructure that makes every assistant smarter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
