"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // TODO: Integrate with your email service (e.g., Mailchimp, ConvertKit, etc.)
    // For now, this is a placeholder
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-soft-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-purple-100">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-soft-blue-500 rounded-full flex items-center justify-center">
              <Download className="w-10 h-10 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Download Career Clarity Framework
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get your free guide to designing a career that truly fits. Evidence-based framework used by thousands of professionals.
            </p>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 text-gray-900"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-soft-blue-600 hover:from-purple-700 hover:to-soft-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Downloading..." : "Download Free"}
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 text-green-600"
              >
                <Check className="w-6 h-6" />
                <span className="text-lg font-semibold">Check your email for the download link!</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;
