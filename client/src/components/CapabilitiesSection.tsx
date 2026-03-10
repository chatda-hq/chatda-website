/*
 * DESIGN: Neural Cartography
 * White bg, 2-column grid of 6 feature cards. Glassmorphism hover.
 * Teal icon accents. JetBrains Mono section label.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Plug, Lock, Network, Cloud, ClipboardCheck } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Universal Search",
    description:
      "Search across every connected tool from a single interface. Get answers grounded in your actual institutional data — not generic AI guesses.",
  },
  {
    icon: Plug,
    title: "AI Context API",
    description:
      "Give any AI agent — internal or third-party — instant access to structured organizational context. Reduce token cost, latency, and hallucination.",
  },
  {
    icon: Lock,
    title: "Permission-Aware",
    description:
      "Every query respects your existing access controls. Users only see what they are authorized to see. No permission bypass, ever.",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description:
      "Chatda captures entities, relationships, decisions, and the reasoning behind them — building a living map of your organization's institutional memory.",
  },
  {
    icon: Cloud,
    title: "Deployment Flexibility",
    description:
      "Run on our cloud, your cloud, or fully on-premise. Same product, your infrastructure, your rules. Air-gapped options available.",
  },
  {
    icon: ClipboardCheck,
    title: "Governance & Audit",
    description:
      "Full audit trails for every query and every AI interaction. Know who accessed what, when, and why. Compliance-ready from day one.",
  },
];

export default function CapabilitiesSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">04 // Core Capabilities</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight"
          style={{ color: "#1A1A2E" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Built for{" "}
          <span style={{ color: "#2ECDA7" }}>enterprise reality.</span>
        </motion.h2>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="group relative p-7 rounded-xl border transition-all duration-300"
              style={{
                backgroundColor: "rgba(247, 248, 250, 0.5)",
                borderColor: "rgba(26, 26, 46, 0.06)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 40px rgba(26, 26, 46, 0.08)",
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ backgroundColor: "rgba(46, 205, 167, 0.08)" }}
              >
                <cap.icon
                  size={20}
                  style={{ color: "#2ECDA7" }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1A1A2E" }}
              >
                {cap.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(26, 26, 46, 0.6)" }}
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
