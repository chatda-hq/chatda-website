/*
 * DESIGN: Neural Cartography
 * Modal overlay with glassmorphism. Clean form with teal accent.
 * Fields: Name, Email, Company, Size, Use Case, Message.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureForm({ isOpen, onClose }: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    companySize: "",
    useCase: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a CRM or API
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      company: "",
      companySize: "",
      useCase: "",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(26, 26, 46, 0.8)", backdropFilter: "blur(4px)" }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg rounded-2xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(26, 26, 46, 0.08)",
            }}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ color: "rgba(26, 26, 46, 0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A2E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26, 26, 46, 0.4)")}
              aria-label="Close form"
            >
              <X size={18} />
            </button>

            {submitted ? (
              /* Success state */
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(46, 205, 167, 0.1)" }}
                >
                  <CheckCircle size={32} style={{ color: "#2ECDA7" }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#1A1A2E" }}>
                  Thank you!
                </h3>
                <p className="text-base mb-6" style={{ color: "rgba(26, 26, 46, 0.6)" }}>
                  We'll be in touch within 24 hours. In the meantime, feel free
                  to explore the rest of the page.
                </p>
                <a
                  href="mailto:hello@chatda.ai"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#7C6BF0" }}
                >
                  Or book a call directly →
                </a>
              </div>
            ) : (
              /* Form */
              <>
                <div className="mb-6">
                  <span className="section-label">Start Your Pilot</span>
                  <h3
                    className="mt-2 text-2xl font-bold"
                    style={{ color: "#1A1A2E" }}
                  >
                    Let's get you started.
                  </h3>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "rgba(26, 26, 46, 0.5)" }}
                  >
                    Fill out the form and our team will reach out within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#1A1A2E" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors"
                      style={{
                        borderColor: "rgba(26, 26, 46, 0.12)",
                        color: "#1A1A2E",
                        backgroundColor: "#F7F8FA",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2ECDA7")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(26, 26, 46, 0.12)")}
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#1A1A2E" }}
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors"
                      style={{
                        borderColor: "rgba(26, 26, 46, 0.12)",
                        color: "#1A1A2E",
                        backgroundColor: "#F7F8FA",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2ECDA7")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(26, 26, 46, 0.12)")}
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#1A1A2E" }}
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors"
                      style={{
                        borderColor: "rgba(26, 26, 46, 0.12)",
                        color: "#1A1A2E",
                        backgroundColor: "#F7F8FA",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2ECDA7")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(26, 26, 46, 0.12)")}
                      placeholder="Your company"
                    />
                  </div>

                  {/* Company Size */}
                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#1A1A2E" }}
                    >
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors appearance-none"
                      style={{
                        borderColor: "rgba(26, 26, 46, 0.12)",
                        color: formData.companySize ? "#1A1A2E" : "rgba(26, 26, 46, 0.4)",
                        backgroundColor: "#F7F8FA",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2ECDA7")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(26, 26, 46, 0.12)")}
                    >
                      <option value="" disabled>Select company size</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="50-200">50–200 employees</option>
                      <option value="200-500">200–500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>

                  {/* Primary Use Case */}
                  <div>
                    <label
                      htmlFor="useCase"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#1A1A2E" }}
                    >
                      Primary Use Case
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors appearance-none"
                      style={{
                        borderColor: "rgba(26, 26, 46, 0.12)",
                        color: formData.useCase ? "#1A1A2E" : "rgba(26, 26, 46, 0.4)",
                        backgroundColor: "#F7F8FA",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2ECDA7")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(26, 26, 46, 0.12)")}
                    >
                      <option value="">Select use case (optional)</option>
                      <option value="enterprise-search">Enterprise Search</option>
                      <option value="ai-agent-context">AI Agent Context</option>
                      <option value="both">Both</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#1A1A2E" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-colors resize-none"
                      style={{
                        borderColor: "rgba(26, 26, 46, 0.12)",
                        color: "#1A1A2E",
                        backgroundColor: "#F7F8FA",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2ECDA7")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(26, 26, 46, 0.12)")}
                      placeholder="Tell us about your needs (optional)"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg text-base font-semibold transition-all duration-200 cta-glow mt-2"
                    style={{ backgroundColor: "#2ECDA7", color: "#1A1A2E" }}
                  >
                    Submit Pilot Request
                  </button>

                  <p
                    className="text-xs text-center mt-3"
                    style={{ color: "rgba(26, 26, 46, 0.4)" }}
                  >
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
