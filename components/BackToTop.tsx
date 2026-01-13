"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ArrowUp } from "lucide-react";

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
            className="relative w-14 h-14 bg-dark-card border-2 border-neon-orange rounded-full flex items-center justify-center shadow-neon transition-all duration-300 group overflow-hidden"
            whileHover={{
              scale: 1.1,
              borderColor: "var(--neon-blue)",
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)",
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
                stroke="rgba(255, 107, 53, 0.2)"
                strokeWidth="2"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="var(--neon-orange)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={163.36} // 2π * 26
                strokeDashoffset={163.36 - (163.36 * scrollProgress) / 100}
                className="transition-all duration-300 group-hover:stroke-neon-blue"
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
              <ArrowUp className="w-6 h-6 text-neon-orange group-hover:text-neon-blue transition-colors" />
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-neon-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Hover Ripple */}
            <motion.div
              className="absolute inset-0 rounded-full border border-neon-orange/50 opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.button>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-dark-card border border-neon-orange/30 rounded-lg backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <div className="text-text-primary font-medium text-sm whitespace-nowrap">
              Back to Top
            </div>
            <div className="text-neon-orange text-xs">
              {Math.round(scrollProgress)}%
            </div>

            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-card border-r border-b border-neon-orange/30 rotate-45" />
          </motion.div>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-neon-orange pointer-events-none"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
