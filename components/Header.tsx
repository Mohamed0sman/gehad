"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const navigationItems: NavigationItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceDropdownItems = [
    {
      label: "Career Counseling",
      href: "/services/career-counseling",
      description: "Individual career guidance sessions",
    },
    {
      label: "Corporate Training",
      href: "/services/corporate-training",
      description: "Professional development programs",
    },
    {
      label: "Leadership Coaching",
      href: "/services/leadership-coaching",
      description: "Executive coaching solutions",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const handleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-secondary/95 backdrop-blur-xl border-b border-neon-orange/30 shadow-neon"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                className="relative w-12 h-12 rounded-lg bg-gradient-neon p-0.5"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 107, 53, 0.3)",
                    "0 0 40px rgba(255, 107, 53, 0.6)",
                    "0 0 20px rgba(255, 107, 53, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full bg-dark-primary rounded-lg flex items-center justify-center">
                  <span className="text-neon-orange font-display font-black text-xl">
                    GA
                  </span>
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-xl text-text-primary">
                  Gehad Ashraf
                </h1>
                <p className="text-xs text-neon-orange font-medium">
                  NCDA Certified Professional
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label === "Services" ? (
                  <div className="relative">
                    <button
                      className="nav-link flex items-center gap-1 py-2"
                      onClick={() => handleDropdown("services")}
                      onMouseEnter={() => setActiveDropdown("services")}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === "services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === "services" && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-80 bg-dark-card border-2 border-neon-orange/50 rounded-xl shadow-neon backdrop-blur-xl"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-4">
                            {serviceDropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block p-3 rounded-lg hover:bg-neon-orange/10 hover:border-l-4 hover:border-neon-orange transition-all duration-200 group"
                              >
                                <div className="font-semibold text-text-primary group-hover:text-neon-orange">
                                  {dropdownItem.label}
                                </div>
                                <div className="text-sm text-text-muted mt-1">
                                  {dropdownItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={item.href} className="nav-link py-2">
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <motion.button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-glass border border-border-subtle hover:border-neon-blue transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4 text-neon-blue group-hover:text-neon-orange transition-colors" />
              <span className="text-sm font-medium text-text-primary group-hover:text-neon-orange transition-colors">
                {language.toUpperCase()}
              </span>
            </motion.button>

            {/* Contact Info (Desktop) */}
            <div className="hidden xl:flex items-center space-x-4">
              <a
                href="tel:+201015362414"
                className="flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm font-medium">+20 101 536 2414</span>
              </a>
              <div className="w-1 h-6 bg-border-subtle"></div>
              <a
                href="mailto:gfeps@yahoo.com"
                className="flex items-center gap-2 text-text-secondary hover:text-neon-blue transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm font-medium">Get in Touch</span>
              </a>
            </div>

            {/* CTA Button */}
            <motion.button
              className="hidden md:block btn btn-primary px-6 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg bg-glass border border-border-subtle hover:border-neon-orange transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-neon-orange" />
              ) : (
                <Menu className="w-6 h-6 text-text-primary" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-dark-secondary/98 backdrop-blur-xl border-b-2 border-neon-orange/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation */}
              <nav className="space-y-4 mb-8">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 rounded-lg hover:bg-neon-orange/10 hover:border-l-4 hover:border-neon-orange transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-lg font-medium text-text-primary group-hover:text-neon-orange">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="space-y-4 mb-6 p-4 bg-glass rounded-xl border border-border-subtle">
                <h3 className="font-display font-semibold text-lg text-neon-orange mb-4">
                  Get in Touch
                </h3>

                <a
                  href="tel:+201015362414"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-neon-green/10 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-neon-green group-hover:animate-bounce" />
                  <div>
                    <div className="font-medium text-text-primary">Phone</div>
                    <div className="text-sm text-text-muted">
                      +20 101 536 2414
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:gfeps@yahoo.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-neon-blue/10 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-neon-blue group-hover:animate-bounce" />
                  <div>
                    <div className="font-medium text-text-primary">Email</div>
                    <div className="text-sm text-text-muted">
                      gfeps@yahoo.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-neon-purple" />
                  <div>
                    <div className="font-medium text-text-primary">
                      Location
                    </div>
                    <div className="text-sm text-text-muted">Cairo, Egypt</div>
                  </div>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="space-y-4">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-glass border border-border-subtle hover:border-neon-blue transition-all duration-300"
                >
                  <Globe className="w-5 h-5 text-neon-blue" />
                  <span className="font-medium text-text-primary">
                    Switch to {language === "en" ? "Arabic" : "English"}
                  </span>
                </button>

                <motion.button
                  className="w-full btn btn-primary py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
