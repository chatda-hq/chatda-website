/*
 * Lead capture modal — dark theme, green accent, clean form.
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

  const inputStyle = {
    borderColor: "rgba(255,255,255,0.08)",
    color: "#FFFFFF",
    backgroundColor: "rgba(255,255,255,0.04)",
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
            style={{ backgroundColor: "rgba(8, 8, 26, 0.85)", backdropFilter: "blur(8px)" }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg rounded-2xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            style={{
              backgroundColor: "#141428",
              border: "1px solid rgba(255,255,255,0.06)",
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
              style={{ color: "rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              aria-label="Close form"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(0, 217, 166, 0.1)" }}
                >
                  <CheckCircle size={32} style={{ color: "#00D9A6" }} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Thank you!
                </h3>
                <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  We'll be in touch within 24 hours.
                </p>
                <a
                  href="mailto:hello@chatda.ai"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#00D9A6" }}
                >
                  Or reach out directly →
                </a>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Start Your Pilot
                  </h3>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    We'll reach out within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium mb-1.5 text-white"
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
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#00D9A6")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1.5 text-white"
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
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#00D9A6")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-1.5 text-white"
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
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#00D9A6")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                      placeholder="Your company"
                    />
                  </div>

                  {/* Company Size */}
                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-medium mb-1.5 text-white"
                    >
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors appearance-none"
                      style={{
                        ...inputStyle,
                        color: formData.companySize ? "#FFFFFF" : "rgba(255,255,255,0.35)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#00D9A6")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
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
                      className="block text-sm font-medium mb-1.5 text-white"
                    >
                      Primary Use Case
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors appearance-none"
                      style={{
                        ...inputStyle,
                        color: formData.useCase ? "#FFFFFF" : "rgba(255,255,255,0.35)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#00D9A6")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
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
                      className="block text-sm font-medium mb-1.5 text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors resize-none"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#00D9A6")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                      placeholder="Tell us about your needs (optional)"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-base font-semibold transition-all duration-200 cta-glow mt-2"
                    style={{ backgroundColor: "#00D9A6", color: "#0D0D1A" }}
                  >
                    Submit Pilot Request
                  </button>

                  <p
                    className="text-xs text-center mt-3"
                    style={{ color: "rgba(255,255,255,0.25)" }}
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
