/*
 * Deployment section — 3 detailed cards with "Best For" descriptions.
 * Reverted to the previous draft's more informative card style.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cloud, Server, Shield } from "lucide-react";

const DEPLOY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663286076356/hAc3YyuRHV9HMDHK4pqFrQ/deployment-bg-aMjJyLxqDPbKCWPNHNjjVN.webp";

const deployments = [
  {
    icon: Cloud,
    title: "Cloud SaaS",
    description:
      "Fully hosted and managed by Chatda. Zero infrastructure overhead — just connect your tools and go.",
    bestFor: "Teams that want the fastest path to value with minimal IT involvement.",
    accent: "#00D9A6",
    accentRgba: "0,217,166",
  },
  {
    icon: Server,
    title: "Private Cloud",
    description:
      "Deployed within your own cloud environment (AWS, GCP, Azure). You control the infrastructure, we manage the software.",
    bestFor: "Organizations with data residency requirements or existing cloud investments.",
    accent: "#7C6BF0",
    accentRgba: "124,107,240",
  },
  {
    icon: Shield,
    title: "On-Premise",
    description:
      "Fully isolated deployment behind your firewall. Air-gapped option available. Zero external network calls.",
    bestFor: "Regulated industries (finance, defense, healthcare) with strict data sovereignty needs.",
    accent: "#7C6BF0",
    accentRgba: "124,107,240",
  },
];

export default function DeploymentSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section
      id="about"
      className="relative py-32 lg:py-44 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={DEPLOY_BG}
          alt=""
          className="w-full h-full object-cover opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0A0A16 0%, rgba(10,10,22,0.88) 40%, rgba(10,10,22,0.88) 60%, #0D0D1A 100%)",
          }}
        />
      </div>

      {/* Animated teal sweep */}
      <motion.div
        className="absolute rounded-full blur-[160px] pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(0,217,166,0.08) 0%, transparent 70%)",
        }}
        animate={{
          left: ["-10%", "110%"],
          top: ["20%", "60%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10">
        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white max-w-3xl"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Deploy on{" "}
          <span style={{ color: "#00D9A6" }}>your terms.</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-lg max-w-2xl"
          style={{ color: "rgba(255,255,255,0.4)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Choose the deployment model that fits your security posture and compliance requirements.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {deployments.map((dep, index) => (
            <motion.div
              key={dep.title}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: `rgba(${dep.accentRgba},0.2)`,
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: dep.accent }}
              />

              <div className="p-8 lg:p-9">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: `rgba(${dep.accentRgba},0.08)`,
                    border: `1px solid rgba(${dep.accentRgba},0.12)`,
                  }}
                >
                  <dep.icon
                    size={26}
                    style={{ color: dep.accent }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {dep.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {dep.description}
                </p>

                {/* Best For */}
                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{
                      color: dep.accent,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Best For
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {dep.bestFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
