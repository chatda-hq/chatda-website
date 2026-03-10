/*
 * DESIGN: Neural Cartography
 * Light surface bg, horizontal 3-step process with connecting lines.
 * Sequential illumination on scroll. JetBrains Mono step numbers.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cable, GitBranch, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Cable,
    title: "Connect",
    description:
      "Chatda integrates with your existing tools — Slack, Notion, Google Workspace, Jira, CRMs, and more. One-click connectors. No migration required.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Structure",
    description:
      "Your data is ingested, normalized, and structured into a permission-aware knowledge graph. Entities, relationships, decisions, and context are preserved — not just files.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Activate",
    description:
      "Workers search across all organizational knowledge from one interface. AI agents query Chatda's memory layer for grounded context via API — no manual document uploads, no hallucinated answers.",
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#F7F8FA" }}
      ref={ref}
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">03 // How It Works</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight"
          style={{ color: "#1A1A2E" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Three steps to a{" "}
          <span style={{ color: "#2ECDA7" }}>smarter organization.</span>
        </motion.h2>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-0 w-full h-[2px] z-0">
                  <motion.div
                    className="h-full"
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.3 }}
                    style={{ transformOrigin: "left", backgroundColor: "rgba(46, 205, 167, 0.2)" }}
                  />
                </div>
              )}

              <div className="relative z-10 p-8 lg:p-10">
                {/* Step number */}
                <span
                  className="text-sm font-medium"
                  style={{
                    color: "#2ECDA7",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  STEP {step.number}
                </span>

                {/* Icon */}
                <div
                  className="mt-4 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(46, 205, 167, 0.08)",
                    border: "1px solid rgba(46, 205, 167, 0.15)",
                  }}
                >
                  <step.icon size={26} style={{ color: "#2ECDA7" }} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="mt-5 text-2xl font-bold"
                  style={{ color: "#1A1A2E" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="mt-3 text-base leading-relaxed"
                  style={{ color: "rgba(26, 26, 46, 0.65)" }}
                >
                  {step.description}
                </p>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-2">
                  <div className="w-[2px] h-8" style={{ backgroundColor: "rgba(46, 205, 167, 0.2)" }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
