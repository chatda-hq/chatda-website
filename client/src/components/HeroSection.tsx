/*
 * Enhanced hero — animated grid lines, floating orbs with trails,
 * gradient mesh, and dynamic particle field for visual richness.
 */
import { motion } from "framer-motion";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663286076356/hAc3YyuRHV9HMDHK4pqFrQ/hero-bg-9mdLkjkooNm5eC4gTLEj3j.webp";

interface HeroSectionProps {
  onOpenForm: () => void;
}

export default function HeroSection({ onOpenForm }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0D0D1A" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 45%, rgba(13,13,26,0.5) 0%, rgba(13,13,26,0.88) 65%)",
          }}
        />
      </div>

      {/* Animated gradient mesh orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large teal orb — top right */}
        <motion.div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: 500,
            height: 500,
            top: "-10%",
            right: "-5%",
            background: "radial-gradient(circle, rgba(0,217,166,0.12) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Violet orb — bottom left */}
        <motion.div
          className="absolute rounded-full blur-[80px]"
          style={{
            width: 400,
            height: 400,
            bottom: "5%",
            left: "10%",
            background: "radial-gradient(circle, rgba(124,107,240,0.08) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -25, 15, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.92, 1.05, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small teal orb — mid */}
        <motion.div
          className="absolute rounded-full blur-[60px]"
          style={{
            width: 200,
            height: 200,
            top: "50%",
            right: "25%",
            background: "radial-gradient(circle, rgba(0,217,166,0.06) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00D9A6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Floating nodes with glow trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: "10%", y: "22%", size: 6, delay: 0, dur: 6 },
          { x: "25%", y: "70%", size: 4, delay: 1.2, dur: 7 },
          { x: "68%", y: "15%", size: 8, delay: 0.5, dur: 5.5 },
          { x: "85%", y: "50%", size: 5, delay: 2, dur: 8 },
          { x: "50%", y: "80%", size: 4, delay: 0.8, dur: 6.5 },
          { x: "38%", y: "12%", size: 5, delay: 1.5, dur: 7.5 },
          { x: "78%", y: "75%", size: 3, delay: 0.3, dur: 9 },
          { x: "15%", y: "48%", size: 3, delay: 2.5, dur: 6 },
          { x: "60%", y: "40%", size: 4, delay: 1.8, dur: 7 },
          { x: "92%", y: "28%", size: 3, delay: 0.7, dur: 8.5 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: node.x,
              top: node.y,
              width: node.size,
              height: node.size,
              backgroundColor: i % 3 === 0 ? "#7C6BF0" : "#00D9A6",
              boxShadow: `0 0 ${node.size * 4}px ${
                i % 3 === 0 ? "rgba(124,107,240,0.5)" : "rgba(0,217,166,0.5)"
              }`,
            }}
            animate={{
              y: [0, -18, 8, -10, 0],
              x: [0, 8, -5, 12, 0],
              opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
              scale: [1, 1.3, 0.8, 1.2, 1],
            }}
            transition={{
              duration: node.dur,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connecting lines between some nodes */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.line
            x1="10%" y1="22%" x2="25%" y2="70%"
            stroke="rgba(0,217,166,0.06)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="68%" y1="15%" x2="85%" y2="50%"
            stroke="rgba(0,217,166,0.05)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.line
            x1="38%" y1="12%" x2="60%" y2="40%"
            stroke="rgba(124,107,240,0.05)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.line
            x1="50%" y1="80%" x2="78%" y2="75%"
            stroke="rgba(0,217,166,0.04)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </svg>
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your organization's knowledge,{" "}
            <span style={{ color: "#00D9A6" }}>structured for AI.</span>
          </motion.h1>

          {/* Short description */}
          <motion.p
            className="mt-6 text-lg md:text-xl max-w-xl"
            style={{ color: "rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            One memory layer for your people and your AI agents.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <button
              onClick={onOpenForm}
              className="px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 cta-glow"
              style={{ backgroundColor: "#00D9A6", color: "#0D0D1A" }}
            >
              Start Your Pilot
            </button>
          </motion.div>


        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0D0D1A 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
