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
          className="fixed bottom-6 left-6 z-40"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToTop}
            className="relative w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
            whileHover={{
              scale: 1.1,
              borderColor: "#3b82f6",
              backgroundColor: "#f8fafc",
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            {/* Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="2"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={138.2}
                strokeDashoffset={138.2 - (138.2 * scrollProgress) / 100}
                className="transition-all duration-200"
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
              <ArrowUp className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
