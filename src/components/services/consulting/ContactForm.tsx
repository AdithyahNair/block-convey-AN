import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "arunprasad@blockconvey.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      console.error("Failed to send email:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-brand-light/30"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Let's Build Solutions Together
      </h3>
      <p className="text-gray-600 mb-6">
        Get in touch with our experts to discuss your specific needs and
        challenges.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              placeholder="Your phone number"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              placeholder="Your company name"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            required
          >
            <option value="">Select a service</option>
            <option value="ai">AI Consulting</option>
            <option value="blockchain">Blockchain Consulting</option>
            <option value="security">Security & Compliance</option>
            <option value="implementation">Implementation Support</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            placeholder="Tell us about your project or requirements"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Get in Touch"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm text-center">
            Thank you for your message! We'll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm text-center">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </motion.div>
  );
};
