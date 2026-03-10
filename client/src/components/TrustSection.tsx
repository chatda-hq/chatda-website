/*
 * DESIGN: Neural Cartography
 * Light surface bg. Founding team credentials, credibility markers.
 * Pre-revenue V1 content with placeholders for future proof points.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, MapPin, ShieldCheck, Plug, Award } from "lucide-react";

const credibilityMarkers = [
  {
    icon: Users,
    title: "Founded by Enterprise Veterans",
    description:
      "Built by Matthew (CEO) and James (CTO) — combining deep enterprise AI expertise with hands-on engineering leadership.",
  },
  {
    icon: MapPin,
    title: "Built in Singapore",
    description:
      "Headquartered in Singapore for the AI-native enterprise. Strategic positioning for Southeast Asian and global government markets.",
  },
  {
    icon: ShieldCheck,
    title: "Governance-First Architecture",
    description:
      "Compliance-ready from day one. Full audit trails, permission-aware queries, and deployment flexibility built into the core — not bolted on.",
  },
  {
    icon: Plug,
    title: "20+ Integrations Supported",
    description:
      "Connect Slack, Notion, Google Workspace, Jira, Confluence, CRMs, and more. One-click connectors with enterprise-grade security.",
  },
];

export default function TrustSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="trust"
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
          <span className="section-label">06 // Trust</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight"
          style={{ color: "#1A1A2E" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trusted by{" "}
          <span style={{ color: "#2ECDA7" }}>forward-thinking teams.</span>
        </motion.h2>

        {/* Credibility grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {credibilityMarkers.map((marker, index) => (
            <motion.div
              key={marker.title}
              className="flex gap-5 p-7 rounded-xl bg-white border transition-all duration-300"
              style={{ borderColor: "rgba(26, 26, 46, 0.06)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(46, 205, 167, 0.08)" }}
              >
                <marker.icon
                  size={22}
                  style={{ color: "#2ECDA7" }}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1A1A2E" }}
                >
                  {marker.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(26, 26, 46, 0.6)" }}
                >
                  {marker.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats / proof points placeholder */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: "20+", label: "Integrations" },
            { value: "SOC 2", label: "Compliance Ready" },
            { value: "3", label: "Deployment Models" },
            { value: "< 2s", label: "Query Response" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5">
              <div
                className="text-3xl lg:text-4xl font-bold"
                style={{ color: "#2ECDA7", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {stat.value}
              </div>
              <div
                className="mt-2 text-sm font-medium"
                style={{ color: "rgba(26, 26, 46, 0.5)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
