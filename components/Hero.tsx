"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronDown,
  ArrowRight,
  Zap,
  Target,
  Brain,
  Award,
} from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(
          easeOutQuart * (end - startCount) + startCount,
        );

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [inView, end, duration]);

  return (
    <span
      ref={ref}
      className="counter font-display text-4xl md:text-5xl font-black text-neon-orange animate-glow"
    >
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector("#professional-stats");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight"
              style={{
                background:
                  "linear-gradient(135deg, #ff6b35, #00d4ff, #b845ed)",
                backgroundSize: "200% 200%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Career Development
              <br />
              <span className="text-neon-orange animate-glow">Reimagined</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-text-secondary mb-4 font-medium"
              variants={itemVariants}
            >
              Where data meets human potential - Designing careers that truly
              fit
            </motion.p>
          </motion.div>

          {/* Professional Badges */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Award, text: "NCDA Certified", color: "neon-orange" },
                {
                  icon: Brain,
                  text: "10+ Years Experience",
                  color: "neon-blue",
                },
                { icon: Target, text: "Evidence-Based", color: "neon-purple" },
                { icon: Zap, text: "Future-Ready", color: "neon-green" },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 bg-glass border border-border-subtle rounded-full"
                  whileHover={{
                    scale: 1.05,
                    borderColor: `var(--neon-${badge.color})`,
                    boxShadow: `0 0 20px var(--neon-${badge.color})`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <badge.icon className={`w-4 h-4 text-neon-${badge.color}`} />
                  <span className="text-sm font-medium text-text-primary">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                className="btn btn-primary px-8 py-4 text-lg font-semibold relative group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="btn btn-secondary px-8 py-4 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.button>
            </div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div variants={itemVariants} id="professional-stats">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: 12, suffix: "K+", label: "Happy Clients" },
                { number: 10, suffix: "+", label: "Years Experience" },
                { number: 1, suffix: "K+", label: "Coaching Sessions" },
                { number: 95, suffix: "%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-glass rounded-2xl border border-border-subtle hover:border-neon-orange transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255, 107, 53, 0.2)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="mb-2">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <p className="text-text-muted mb-4 font-medium">
              Discover Evidence-Based Career Development
            </p>
            <motion.button
              onClick={scrollToNext}
              className="p-3 rounded-full border-2 border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-dark-primary transition-all duration-300 group"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-neon-blue/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
