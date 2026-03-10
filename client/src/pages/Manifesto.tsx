/*
 * Manifesto page — visionary, long-form editorial.
 * Singapore's AI landscape → the gap → Chatda's mission & vision.
 * Design: dark bg, generous whitespace, large serif-like headings,
 * pull-quotes, and subtle ambient effects matching the landing page.
 */
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export default function Manifesto() {
  const [formOpen, setFormOpen] = useState(false);
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0D1A" }}>
      <Navbar onOpenForm={() => setFormOpen(true)} />
      <LeadCaptureForm isOpen={formOpen} onClose={() => setFormOpen(false)} />

      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full blur-[160px]"
          style={{
            width: 600,
            height: 600,
            top: "5%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(0,217,166,0.06) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -30, 15, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-[120px]"
          style={{
            width: 400,
            height: 400,
            bottom: "20%",
            left: "-5%",
            background: "radial-gradient(circle, rgba(124,107,240,0.04) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <article className="relative z-10 pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">

          {/* Back link */}
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm mb-16 group"
            style={{ color: "rgba(255,255,255,0.35)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          >
            <ArrowLeft size={16} />
            Back to home
          </motion.button>

          {/* Title */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            <span
              className="text-xs uppercase tracking-[0.2em] block mb-6"
              style={{
                color: "#00D9A6",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Our Manifesto
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-white"
            >
              The age of AI bilingualism{" "}
              <span style={{ color: "#00D9A6" }}>has arrived.</span>
            </h1>
          </motion.div>

          {/* Opening context */}
          <motion.div
            className="mt-14"
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
          >
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Singapore has declared its ambition: every worker should be AI bilingual. Their mother tongue is their domain expertise. AI is the second language. This is not a slogan. It is national policy, backed by billions in investment, aggressive training targets, and a government that has staked its economic future on making this real.
            </p>
          </motion.div>

          {/* The landscape */}
          <motion.div
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-8"
            >
              A nation betting on AI
            </h2>
            <div className="space-y-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p className="text-base md:text-lg leading-relaxed">
                Under the National AI Strategy 2.0, Singapore is committing over S$1 billion to AI research and development through 2030. The target is bold: grow the AI practitioner base from 4,500 to 15,000. The SkillsFuture initiative aims for 75% of the workforce to adopt AI tools in their daily work. Budget 2026 introduced 400% tax deductions on AI spending through the Enterprise Innovation Scheme, signalling that this is not optional — it is the direction of the economy.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                The infrastructure is being laid. The training programmes are being funded. The tools are being distributed. Every signal from government says the same thing: learn AI, use AI, transform with AI.
              </p>
            </div>
          </motion.div>

          {/* The quote */}
          <motion.blockquote
            className="my-20 py-10 relative"
            style={{
              borderLeft: "2px solid #00D9A6",
              paddingLeft: "2rem",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <p
              className="text-xl md:text-2xl leading-relaxed italic font-medium text-white"
            >
              "We want AI bilingual talents — their mother tongue is their domain expertise; AI is the second language."
            </p>
            <cite
              className="block mt-4 text-sm not-italic"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              — Minister Josephine Teo, on Singapore's AI workforce vision
            </cite>
          </motion.blockquote>

          {/* The gap */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-8"
            >
              But there is a missing piece.
            </h2>
            <div className="space-y-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p className="text-base md:text-lg leading-relaxed">
                You can train every employee to use AI. You can give them the best models in the world. But if those models cannot access what your organization actually knows — its decisions, its context, its institutional memory — then AI remains a general-purpose tool producing general-purpose answers.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Today, enterprise knowledge is scattered across dozens of tools. Slack threads, Notion wikis, Google Drive folders, Jira tickets, CRM records. Each tool holds a fragment. None holds the whole picture. And no AI system can see across all of them while respecting who should see what.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                The bottleneck is not model intelligence. It is not worker willingness. It is structured access to institutional knowledge. Without it, AI bilingualism is a promise that cannot be kept.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="my-20 flex items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
          >
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#00D9A6", opacity: 0.4 }}
            />
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
          </motion.div>

          {/* Our mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <span
              className="text-xs uppercase tracking-[0.2em] block mb-4"
              style={{
                color: "#7C6BF0",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Our Mission
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-8"
            >
              Bridge the gap between advancing AI and the organizations trying to use it.
            </h2>
            <div className="space-y-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p className="text-base md:text-lg leading-relaxed">
                Chatda exists because we believe the most important infrastructure for the AI era has not been built yet. Not better models. Not more features. The memory layer — the system that captures what an organization knows, structures it for both humans and machines, and serves it with the right permissions at the right time.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We are building the connective tissue between Singapore's AI ambition and the organizational reality on the ground. When the government trains workers to be AI bilingual, Chatda ensures they have something meaningful to be bilingual about — their own company's knowledge, decisions, and context.
              </p>
            </div>
          </motion.div>

          {/* Our vision */}
          <motion.div
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <span
              className="text-xs uppercase tracking-[0.2em] block mb-4"
              style={{
                color: "#7C6BF0",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Our Vision
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-8"
            >
              Every organization has a living internal brain.
            </h2>
            <div className="space-y-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p className="text-base md:text-lg leading-relaxed">
                We see a future where institutional knowledge compounds over time instead of eroding. Where AI agents operate with full context and clear governance. Where any employee can access the collective intelligence of their organization as naturally as asking a colleague.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                This is not about building another search tool or another AI assistant. It is about building the foundational memory substrate that makes every tool, every assistant, and every worker more effective — because they finally have access to what the organization actually knows.
              </p>
            </div>
          </motion.div>

          {/* Why now, why Singapore */}
          <motion.div
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-8"
            >
              Why now. Why Singapore.
            </h2>
            <div className="space-y-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p className="text-base md:text-lg leading-relaxed">
                Three forces are converging. The government is pushing for an AI bilingual workforce through NAIS 2.0 and SkillsFuture — but training without organizational context means workers cannot apply what they learn. Budget 2026's Enterprise Innovation Scheme and PSG grants are accelerating enterprise AI adoption — but adoption stalls without memory infrastructure. And Singapore's commitment to trusted AI through AI Verify and PDPA compliance demands permission-aware, auditable systems — not black-box tools.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Singapore is small enough to move fast and ambitious enough to set the standard. The category for AI-native memory infrastructure is being defined right now. We believe it will be defined here.
              </p>
            </div>
          </motion.div>

          {/* The march */}
          <motion.div
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-8"
            >
              What we are building towards.
            </h2>
            <div className="space-y-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p className="text-base md:text-lg leading-relaxed">
                We start with the memory layer — ingesting scattered enterprise data, structuring it into a permission-aware system, and making it available for both human search and AI agent consumption. This is the foundation.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                From there, we build governance — audit trails, access controls, and the trust infrastructure that regulated industries require before they will let AI near their data. Trust is not a feature. It is the prerequisite.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                And ultimately, we enable true AI bilingualism — where the right task reaches the right AI tool with the right context, and every worker in the organization can leverage the collective intelligence that has been built over years, not just the documents they happen to remember.
              </p>
            </div>
          </motion.div>

          {/* Closing statement */}
          <motion.div
            className="mt-24 pt-16 relative"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <p
              className="text-xl md:text-2xl leading-relaxed font-medium text-white"
            >
              The internet needed DNS. Databases needed SQL. AI agents need a memory layer.
            </p>
            <p
              className="mt-6 text-lg"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              We are building it.
            </p>

            {/* CTA */}
            <div className="mt-12">
              <button
                onClick={() => setFormOpen(true)}
                className="px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 cta-glow"
                style={{ backgroundColor: "#00D9A6", color: "#0D0D1A" }}
              >
                Start Your Pilot
              </button>
            </div>

            {/* Built in Singapore badge */}
            <p
              className="mt-16 text-xs"
              style={{
                color: "rgba(255,255,255,0.2)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Built in Singapore
            </p>
          </motion.div>

        </div>
      </article>
    </div>
  );
}
