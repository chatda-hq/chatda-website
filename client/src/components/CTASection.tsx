/*
 * DESIGN: Neural Cartography
 * Bold gradient background matching hero. High contrast, centered layout.
 * Two CTAs: Start Your Pilot + Talk to Us.
 */
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663286076356/hAc3YyuRHV9HMDHK4pqFrQ/cta-bg-5vA6DwL5vgYacJ8zHu3Rap.webp";

interface CTASectionProps {
  onOpenForm: () => void;
}

export default function CTASection({ onOpenForm }: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#1A1A2E" }}
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_BG}
          alt=""
          className="w-full h-full object-cover opacity-50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(26,26,46,0.8) 0%, rgba(26,26,46,0.5) 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 text-center">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Ready?</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mt-4 text-3xl sm:text-4xl lg:text-[52px] font-bold leading-tight tracking-tight text-white max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to give your organization{" "}
          <span style={{ color: "#2ECDA7" }}>a brain?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mt-5 text-lg max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Start small, see value fast, scale with confidence. Join the pilot
          program and experience structured enterprise knowledge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={onOpenForm}
            className="px-10 py-4 rounded-lg text-base font-semibold transition-all duration-200 cta-glow"
            style={{ backgroundColor: "#2ECDA7", color: "#1A1A2E" }}
          >
            Start Your Pilot
          </button>
          <a
            href="mailto:hello@chatda.ai"
            className="px-10 py-4 rounded-lg text-base font-medium transition-all duration-200 border inline-flex items-center justify-center"
            style={{
              color: "rgba(255,255,255,0.8)",
              borderColor: "rgba(255,255,255,0.2)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(124, 107, 240, 0.5)";
              e.currentTarget.style.color = "#7C6BF0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
            }}
          >
            Talk to Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
