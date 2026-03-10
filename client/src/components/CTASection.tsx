/*
 * Final CTA — minimal, bold. Single "Start Your Pilot" button.
 * Uses "organization" instead of "org".
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
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ backgroundColor: "#0D0D1A" }}
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_BG}
          alt=""
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0,217,166,0.06) 0%, rgba(13,13,26,0.95) 65%)",
          }}
        />
      </div>

      <div className="container relative z-10 text-center">
        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ready to give your organization{" "}
          <span style={{ color: "#00D9A6" }}>a brain?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mt-5 text-lg max-w-md mx-auto"
          style={{ color: "rgba(255,255,255,0.4)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Start small, see value fast, scale with confidence.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={onOpenForm}
            className="px-10 py-4 rounded-full text-base font-semibold transition-all duration-200 cta-glow"
            style={{ backgroundColor: "#00D9A6", color: "#0D0D1A" }}
          >
            Start Your Pilot
          </button>
        </motion.div>
      </div>
    </section>
  );
}
