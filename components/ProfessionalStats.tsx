"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Clock,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Briefcase,
  Star,
} from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2.5,
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
      className="counter font-display text-5xl md:text-6xl font-black text-neon-orange animate-glow"
    >
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const ProfessionalStats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const stats = [
    {
      icon: Users,
      number: 12000,
      suffix: "+",
      label: "Professionals Trained",
      description: "Career development impact across MENA region",
      color: "neon-orange",
    },
    {
      icon: Clock,
      number: 10400,
      suffix: "+",
      label: "Training Hours",
      description: "Delivered across various programs and workshops",
      color: "neon-blue",
    },
    {
      icon: BookOpen,
      number: 1000,
      suffix: "+",
      label: "Coaching Sessions",
      description: "One-on-one career guidance and mentoring",
      color: "neon-purple",
    },
    {
      icon: TrendingUp,
      number: 95,
      suffix: "%",
      label: "Success Rate",
      description: "Client satisfaction and goal achievement",
      color: "neon-green",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "NCDA Certified",
      subtitle: "Career Service Provider",
      color: "neon-orange",
    },
    {
      icon: Star,
      title: "GCDF Credential",
      subtitle: "Global Career Development",
      color: "neon-blue",
    },
    {
      icon: Briefcase,
      title: "10+ Years",
      subtitle: "Professional Experience",
      color: "neon-purple",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      subtitle: "Approach & Methodology",
      color: "neon-green",
    },
  ];

  const trustedOrganizations = [
    { name: "IDITA", logo: "🏢" },
    { name: "NTI", logo: "🎓" },
    { name: "DEPI", logo: "💻" },
    { name: "Universities", logo: "🏫" },
    { name: "NGOs", logo: "🤝" },
    { name: "NCDA", logo: "🏆" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-orange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-black mb-6"
          >
            <span className="gradient-text">Evidence-Based</span>
            <br />
            <span className="text-text-primary">Career Development</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Transforming careers through data-driven insights, proven
            frameworks, and measurable outcomes that create lasting professional
            growth.
          </motion.p>
        </motion.div>

        {/* Main Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`p-8 bg-glass rounded-2xl border-2 border-border-subtle hover:border-${stat.color} transition-all duration-500 text-center relative overflow-hidden`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-xl bg-${stat.color}/20 flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                  </motion.div>
                </div>

                {/* Counter */}
                <div className="mb-4">
                  <Counter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2 + index * 0.5}
                  />
                </div>

                {/* Label */}
                <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-text-muted leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-blue rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Credentials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-display font-bold text-center text-text-primary mb-12"
          >
            Professional <span className="text-neon-orange">Excellence</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                className="group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6 bg-glass rounded-xl border border-border-subtle hover:border-neon-orange transition-all duration-300 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-${achievement.color}/20 flex items-center justify-center`}
                  >
                    <achievement.icon
                      className={`w-6 h-6 text-${achievement.color}`}
                    />
                  </div>
                  <h4 className="font-display font-semibold text-lg text-text-primary mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-text-muted text-sm">
                    {achievement.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trusted Organizations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-display font-semibold text-text-primary mb-8"
          >
            Trusted by Leading Organizations
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            {trustedOrganizations.map((org, index) => (
              <motion.div
                key={org.name}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-glass rounded-xl border border-border-subtle group-hover:border-neon-blue flex items-center justify-center mb-3 transition-all duration-300">
                  <span className="text-2xl">{org.logo}</span>
                </div>
                <span className="text-text-muted group-hover:text-neon-blue transition-colors text-sm font-medium">
                  {org.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16">
            <motion.button
              className="btn btn-primary px-8 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Programs
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
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
    </section>
  );
};

export default ProfessionalStats;
