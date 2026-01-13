"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  showAfter?: number;
  smoothScroll?: boolean;
}

const BackToTop: React.FC<BackToTopProps> = ({
  showAfter = 400,
  smoothScroll = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      setScrollProgress(scrollPercent * 100);
      setIsVisible(scrollTop > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    if (smoothScroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 z-50"
          initial={{ opacity: 0, scale: 0, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToTop}
            className="relative w-14 h-14 bg-white border-2 border-navy-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group overflow-hidden hover:bg-navy-50"
            whileHover={{
              scale: 1.1,
              borderColor: "#2563eb",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            {/* Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 56 56"
            >
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="rgba(37, 99, 235, 0.2)"
                strokeWidth="2"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={163.36}
                strokeDashoffset={163.36 - (163.36 * scrollProgress) / 100}
                className="transition-all duration-300"
              />
            </svg>

            {/* Arrow Icon */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="w-6 h-6 text-navy-600 group-hover:text-navy-700 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
