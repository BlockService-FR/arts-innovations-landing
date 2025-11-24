"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Send, User } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = () => {
    const errors: string[] = [];

    if (!formData.name.trim()) {
      errors.push(t("contact.form.validation.nameRequired"));
    }

    if (!formData.email.trim()) {
      errors.push(t("contact.form.validation.emailRequired"));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push(t("contact.form.validation.emailInvalid"));
    }

    if (!formData.message.trim()) {
      errors.push(t("contact.form.validation.messageRequired"));
    } else if (formData.message.trim().length < 10) {
      errors.push(t("contact.form.validation.messageMinLength"));
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    // Client-side validation
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setSubmitStatus({
        type: "error",
        message: validationErrors.join(" "),
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: t("contact.form.successMessage"),
        });
        // Clear form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        let errorMessage = t("contact.form.errorMessage");

        // Parse specific validation errors from API
        if (errorData.details && Array.isArray(errorData.details)) {
          const apiErrors = errorData.details
            .map((issue: { message: string }) => issue.message)
            .join(" ");
          errorMessage = `${apiErrors} ${t("contact.form.errorFallback")}`;
        } else {
          errorMessage = `${errorMessage} ${t("contact.form.errorFallback")}`;
        }

        setSubmitStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: `${t("contact.form.errorMessage")} ${t(
          "contact.form.errorFallback"
        )}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="w-full 2xl:max-w-[80vw] mx-auto px-8 lg:px-10 py-16 lg:py-20 relative flex flex-col justify-start items-center overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div className="text-center lg:text-left mb-4 lg:mb-10">
          <h2 className="mb-4 lg:mb-6 text-secondary text-balance font-title">
            {t("contact.title")}
          </h2>
          <p className="text-secondary max-w-3xl text-balance font-subtitle">
            {t("contact.subtitle")}
          </p>
        </motion.div>
        <div>
          <div className="flex items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:max-w-[600px] glass-card rounded-2xl p-8 shadow-2xl hover:border-arts-green/50 mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-secondary mb-2 font-text-important"
                    >
                      {t("contact.form.name")} {t("contact.form.required")}
                    </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-arts-green focus:border-transparent text-secondary placeholder-white/30 transition-all duration-300 hover:bg-white/10"
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-secondary mb-2 font-text-important"
                    >
                      {t("contact.form.email")} {t("contact.form.required")}
                    </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-arts-green focus:border-transparent text-secondary placeholder-white/30 transition-all duration-300 hover:bg-white/10"
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-secondary mb-2 font-text-important"
                  >
                    {t("contact.form.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-arts-green focus:border-transparent text-secondary placeholder-white/30 transition-all duration-300 hover:bg-white/10"
                    placeholder={t("contact.form.companyPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-secondary mb-2 font-text-important"
                  >
                    {t("contact.form.message")} {t("contact.form.required")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-arts-green focus:border-transparent text-secondary placeholder-white/30 resize-none transition-all duration-300 hover:bg-white/10"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-button-primary text-button-text font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-button-primary-hover transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-text-important">
                    {isSubmitting
                      ? t("contact.form.sending")
                      : t("contact.form.send")}
                  </span>
                  <Send size={20} />
                </motion.button>

                {/* Success/Error Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
