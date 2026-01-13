"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  phoneNumber = "201015362414",
  message = "Hello! I'm interested in learning more about your career development services.",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const openPhone = () => {
    window.open(`tel:+${phoneNumber}`, "_self");
    setIsOpen(false);
  };

  const openEmail = () => {
    window.open("mailto:gfeps@yahoo.com", "_self");
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-20 right-0 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 backdrop-blur-xl min-w-[320px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Let's Connect
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Choose your preferred way to reach out
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Contact Options */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <motion.button
                onClick={openWhatsApp}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-200 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-green-800 transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="text-gray-600 text-sm">
                    Quick response guaranteed
                  </div>
                </div>
              </motion.button>

              {/* Phone Call */}
              <motion.button
                onClick={openPhone}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-200 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                    Phone Call
                  </div>
                  <div className="text-gray-600 text-sm">+20 101 536 2414</div>
                </div>
              </motion.button>

              {/* Email */}
              <motion.button
                onClick={openEmail}
                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl border border-purple-200 hover:border-purple-300 transition-all duration-200 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-purple-800 transition-colors">
                    Email
                  </div>
                  <div className="text-gray-600 text-sm">gfeps@yahoo.com</div>
                </div>
              </motion.button>
            </div>

            {/* Status */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-600 text-sm font-medium">
                  Available for consultation
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-gray-500 to-gray-600"
            : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
        }`}
        whileHover={{ scale: isOpen ? 1 : 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Ring */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
