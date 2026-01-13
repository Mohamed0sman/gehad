"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Button from "@/components/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { en: "Home", ar: "الرئيسية", href: "/" },
    { en: "About", ar: "من أنا", href: "/about" },
    { en: "Programs", ar: "البرامج", href: "/programs" },
    { en: "Blog", ar: "المدونة", href: "/blog" },
    { en: "Contact", ar: "اتصل بي", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  const copy = {
    name: {
      en: "Gehad Ashraf",
      ar: "جهاد أشرف",
    },
    role: {
      en: "Career Development Professional",
      ar: "أخصائية تطوير المسارات المهنية",
    },
    cta: {
      en: "Book Now",
      ar: "احجز الآن",
    },
    menu: {
      open: { en: "Menu", ar: "القائمة" },
      close: { en: "Close", ar: "إغلاق" },
    },
  };

  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  const navigateTo = (href: string) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-neutral-100"
          : "bg-white/90 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Professional Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold font-heading text-neutral-900 group-hover:text-brand-primary-600 transition-colors duration-300">
                {t(copy.name.en, copy.name.ar)}
              </h1>
              <p className="text-xs tracking-wide text-brand-primary-600 font-semibold uppercase">
                {t(copy.role.en, copy.role.ar)}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-brand-primary-700 bg-brand-primary-50 shadow-sm"
                    : "text-neutral-700 hover:text-brand-primary-600 hover:bg-neutral-50"
                }`}
              >
                {t(item.en, item.ar)}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-primary-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher variant="light" />
            <Button
              href="/booking"
              variant="primary"
              size="md"
              className="shadow-md hover:shadow-lg"
            >
              {t(copy.cta.en, copy.cta.ar)}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? t(copy.menu.close.en, copy.menu.close.ar)
                : t(copy.menu.open.en, copy.menu.open.ar)
            }
          >
            <div
              className={`w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-neutral-700 my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
            ></div>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-neutral-200 shadow-2xl animate-fade-in">
            <div className="container mx-auto py-6">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => navigateTo(item.href)}
                    className={`block w-full text-left px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-brand-primary-700 bg-brand-primary-50"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-brand-primary-600"
                    }`}
                  >
                    {t(item.en, item.ar)}
                  </button>
                ))}
                <div className="pt-6 mt-6 border-t border-neutral-200 flex flex-col space-y-4">
                  <Button
                    href="/booking"
                    variant="primary"
                    className="w-full shadow-md"
                  >
                    {t(copy.cta.en, copy.cta.ar)}
                  </Button>
                  <div className="flex justify-center">
                    <LanguageSwitcher variant="light" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
