/*
 * DESIGN: Neural Cartography
 * White bg, centered text + data flow diagram image.
 * Moment of clarity — tension shifts to relief.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SOLUTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663286076356/hAc3YyuRHV9HMDHK4pqFrQ/solution-diagram-kTDBzx9xhXZA97aGnsDdeA.webp";

export default function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="solution" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">02 // The Solution</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-center max-w-4xl mx-auto"
          style={{ color: "#1A1A2E" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Meet Chatda. The organizational brain{" "}
          <span style={{ color: "#2ECDA7" }}>your enterprise has been missing.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg leading-relaxed text-center max-w-2xl mx-auto"
          style={{ color: "rgba(26, 26, 46, 0.65)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Chatda ingests your scattered enterprise data, structures it into a
          permission-aware memory layer, and makes it available for both human
          search and AI agent consumption.
        </motion.p>

        {/* Diagram */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(26, 26, 46, 0.08)" }}>
            <img
              src={SOLUTION_IMG}
              alt="Data flows from enterprise tools like Slack, Notion, Google Drive, Jira, and CRMs into Chatda's knowledge graph, then branches out to human search and AI agent context"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Key differentiator */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div
            className="inline-block px-6 py-4 rounded-xl"
            style={{ backgroundColor: "rgba(46, 205, 167, 0.06)", border: "1px solid rgba(46, 205, 167, 0.15)" }}
          >
            <p
              className="text-base font-medium"
              style={{ color: "#1A1A2E", fontFamily: "'JetBrains Mono', monospace", fontSize: "14px" }}
            >
              Chatda is not an AI assistant. It's the knowledge layer underneath
              every AI tool you already use — making all of them smarter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
