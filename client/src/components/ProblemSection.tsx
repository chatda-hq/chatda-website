/*
 * DESIGN: Neural Cartography
 * Light bg (#F7F8FA), 4 problem cards with glassmorphism, teal icons.
 * Cards connect via animated teal lines on scroll.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Layers, Brain, ShieldAlert, Cpu } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Fragmented Knowledge",
    description:
      "Your data lives in Slack, Notion, Drive, Jira, and a dozen other tools. Each one searches its own silo. The connections between them are lost.",
  },
  {
    icon: Brain,
    title: "Context-Blind AI",
    description:
      "Your AI tools give generic answers because they have zero understanding of your company's policies, decisions, history, or people.",
  },
  {
    icon: ShieldAlert,
    title: "Untrustable Outputs",
    description:
      "Without grounding in real institutional data, every AI response needs manual verification. You can't scale what you can't trust.",
  },
  {
    icon: Cpu,
    title: "Not Built for AI",
    description:
      "Your systems were designed for humans browsing files — not for AI agents that need structured, permissioned, real-time context.",
  },
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="problem"
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
          <span className="section-label">01 // The Problem</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight"
          style={{ color: "#1A1A2E" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your knowledge is scattered.{" "}
          <span style={{ color: "#7C6BF0" }}>Your AI is guessing.</span>
        </motion.h2>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="group relative p-8 rounded-xl bg-white border transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: "rgba(26, 26, 46, 0.06)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(46, 205, 167, 0.1)" }}
              >
                <problem.icon size={22} style={{ color: "#2ECDA7" }} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1A1A2E" }}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(26, 26, 46, 0.65)" }}
              >
                {problem.description}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: "#2ECDA7" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
