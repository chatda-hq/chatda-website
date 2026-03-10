/*
 * DESIGN: Neural Cartography
 * Dark bg with deployment-bg image. 3 deployment cards.
 * Security-focused visual treatment for Private Cloud and On-Premise.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cloud, Server, Shield } from "lucide-react";

const DEPLOYMENT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663286076356/hAc3YyuRHV9HMDHK4pqFrQ/deployment-bg-42HVB9YMUoS4N7N26SVNj9.webp";

const deployments = [
  {
    icon: Cloud,
    title: "Chatda Cloud",
    description: "Fully hosted SaaS. Fastest to onboard. Standard cloud security.",
    bestFor: "SMEs, tech companies comfortable with cloud AI workflows.",
    accent: "#2ECDA7",
  },
  {
    icon: Server,
    title: "Private Cloud",
    description:
      "Deployed in your cloud (GCP, AWS, Azure). You control the infrastructure.",
    bestFor: "Government, regulated industries, data residency requirements.",
    accent: "#7C6BF0",
  },
  {
    icon: Shield,
    title: "On-Premise",
    description:
      "Fully isolated. No external calls. Runs with locally hosted models.",
    bestFor: "Defense, intelligence, highest-security environments.",
    accent: "#7C6BF0",
  },
];

export default function DeploymentSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="deployment"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#1A1A2E" }}
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={DEPLOYMENT_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">05 // Deployment</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Deploy on <span style={{ color: "#2ECDA7" }}>your terms.</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-lg max-w-2xl"
          style={{ color: "rgba(255,255,255,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Same product, your infrastructure, your rules. Choose the deployment
          model that fits your security and compliance requirements.
        </motion.p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {deployments.map((dep, index) => (
            <motion.div
              key={dep.title}
              className="group relative p-8 rounded-xl glass-card-dark transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              whileHover={{
                y: -4,
                boxShadow: `0 12px 40px rgba(0, 0, 0, 0.3)`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                style={{ backgroundColor: dep.accent, opacity: 0.6 }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `${dep.accent}15` }}
              >
                <dep.icon size={22} style={{ color: dep.accent }} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {dep.title}
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {dep.description}
              </p>

              {/* Best for */}
              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="text-xs font-medium"
                  style={{
                    color: dep.accent,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  BEST FOR
                </span>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {dep.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
