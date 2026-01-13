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
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 bg-dark-card border-2 border-neon-green rounded-2xl p-4 shadow-neon-green backdrop-blur-xl min-w-[280px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neon-green rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-dark-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary">
                    Get in Touch
                  </h3>
                  <p className="text-text-muted text-sm">
                    Choose your preferred method
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-border-subtle hover:bg-neon-orange/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-text-secondary" />
              </button>
            </div>

            {/* Contact Options */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <motion.button
                onClick={openWhatsApp}
                className="w-full flex items-center gap-3 p-3 bg-glass hover:bg-neon-green/10 rounded-xl border border-border-subtle hover:border-neon-green transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center group-hover:bg-neon-green/30 transition-colors">
                  <MessageCircle className="w-5 h-5 text-neon-green" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-text-primary group-hover:text-neon-green transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="text-text-muted text-sm">
                    Start a conversation
                  </div>
                </div>
              </motion.button>

              {/* Phone Call */}
              <motion.button
                onClick={openPhone}
                className="w-full flex items-center gap-3 p-3 bg-glass hover:bg-neon-blue/10 rounded-xl border border-border-subtle hover:border-neon-blue transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors">
                  <Phone className="w-5 h-5 text-neon-blue" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-text-primary group-hover:text-neon-blue transition-colors">
                    Phone Call
                  </div>
                  <div className="text-text-muted text-sm">
                    +20 101 536 2414
                  </div>
                </div>
              </motion.button>

              {/* Email */}
              <motion.button
                onClick={openEmail}
                className="w-full flex items-center gap-3 p-3 bg-glass hover:bg-neon-orange/10 rounded-xl border border-border-subtle hover:border-neon-orange transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 bg-neon-orange/20 rounded-lg flex items-center justify-center group-hover:bg-neon-orange/30 transition-colors">
                  <Mail className="w-5 h-5 text-neon-orange" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-text-primary group-hover:text-neon-orange transition-colors">
                    Email
                  </div>
                  <div className="text-text-muted text-sm">
                    gfeps@yahoo.com
                  </div>
                </div>
              </motion.button>
            </div>

            {/* Status */}
            <div className="mt-4 pt-3 border-t border-border-subtle">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-text-muted text-sm">
                  Available for consultation
                </span>
              </div>
            </div>

            {/* Decorative Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-dark-card border-r-2 border-b-2 border-neon-green transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full bg-neon-green text-dark-primary flex items-center justify-center shadow-neon-green transition-all duration-300 ${
          isOpen ? "bg-neon-orange shadow-neon" : "hover:scale-110"
        }`}
        whileHover={{ scale: isOpen ? 1 : 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isOpen
            ? "0 0 40px rgba(255, 107, 53, 0.6)"
            : [
                "0 0 20px rgba(57, 255, 20, 0.5)",
                "0 0 40px rgba(57, 255, 20, 0.8)",
                "0 0 20px rgba(57, 255, 20, 0.5)",
              ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: isOpen ? 0 : Infinity,
            ease: "easeInOut",
          },
        }}
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
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Dot */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-neon-orange rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-2 h-2 bg-text-primary rounded-full" />
          </motion.div>
        )}

        {/* Pulse Ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-neon-green"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
