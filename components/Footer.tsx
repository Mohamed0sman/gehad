"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button";

export default function Footer() {
  const { language, isRTL } = useLanguage();
  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  const copy = {
    brand: {
      name: { en: "Gehad Ashraf", ar: "جهاد أشرف" },
      tagline: {
        en: "Career Development Professional",
        ar: "أخصائية تطوير المسارات المهنية",
      },
      description: {
        en: "Empowering professionals across the MENA region with evidence-based career development strategies and transformative guidance.",
        ar: "تمكين المحترفين في منطقة الشرق الأوسط وشمال أفريقيا من خلال استراتيجيات تطوير مهني قائمة على الأدلة وإرشاد تحويلي.",
      },
    },
    sections: {
      quickLinks: { en: "Quick Links", ar: "روابط سريعة" },
      services: { en: "Services", ar: "الخدمات" },
      contact: { en: "Get in Touch", ar: "تواصل معنا" },
      follow: { en: "Follow Me", ar: "تابعني" },
    },
    cta: {
      title: {
        en: "Ready to Transform Your Career?",
        ar: "هل أنت مستعد لتحويل مسارك المهني؟",
      },
      subtitle: {
        en: "Book your consultation today",
        ar: "احجز استشارتك اليوم",
      },
      button: { en: "Book Consultation", ar: "احجز استشارة" },
    },
    copyright: {
      en: "© 2024 Gehad Ashraf. All rights reserved.",
      ar: "© 2024 جهاد أشرف. جميع الحقوق محفوظة.",
    },
  };

  const navigation = {
    main: [
      { en: "Home", ar: "الرئيسية", href: "/" },
      { en: "About", ar: "من أنا", href: "/about" },
      { en: "Programs", ar: "البرامج", href: "/programs" },
      { en: "Blog", ar: "المدونة", href: "/blog" },
      { en: "Contact", ar: "اتصل بي", href: "/contact" },
    ],
    services: [
      {
        en: "Career Coaching",
        ar: "التوجيه المهني",
        href: "/programs#coaching",
      },
      {
        en: "Professional Development",
        ar: "التطوير المهني",
        href: "/programs#development",
      },
      {
        en: "Leadership Training",
        ar: "تدريب القيادة",
        href: "/programs#leadership",
      },
      {
        en: "Corporate Programs",
        ar: "البرامج المؤسسية",
        href: "/programs#corporate",
      },
    ],
    social: [
      {
        name: "WhatsApp",
        href: "https://wa.me/201015362414",
        label: "WhatsApp",
        icon: "💬",
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/gehad-ashraf",
        label: "LinkedIn",
        icon: "💼",
      },
      {
        name: "Facebook",
        href: "https://facebook.com/gehad.ashraf",
        label: "Facebook",
        icon: "📘",
      },
      {
        name: "Instagram",
        href: "https://instagram.com/gehad.ashraf",
        label: "Instagram",
        icon: "📷",
      },
    ],
  };

  return (
    <footer
      className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary-500 to-transparent"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-primary-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-primary-400/3 rounded-full blur-3xl"></div>
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 border-b border-neutral-800">
        <div className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              {t(copy.cta.title.en, copy.cta.title.ar)}
            </h3>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              {t(copy.cta.subtitle.en, copy.cta.subtitle.ar)}
            </p>
            <Button
              href="/booking"
              variant="primary"
              size="lg"
              className="shadow-xl hover:shadow-2xl"
            >
              {t(copy.cta.button.en, copy.cta.button.ar)}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">
                {t(copy.brand.name.en, copy.brand.name.ar)}
              </h3>
              <p className="text-brand-primary-400 font-semibold text-lg tracking-wide">
                {t(copy.brand.tagline.en, copy.brand.tagline.ar)}
              </p>
            </div>

            <p className="text-neutral-300 leading-relaxed font-primary mb-8 text-lg max-w-md">
              {t(copy.brand.description.en, copy.brand.description.ar)}
            </p>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4 text-lg">
                {t(copy.sections.follow.en, copy.sections.follow.ar)}
              </h4>
              <div className="flex flex-wrap gap-3">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-neutral-800 hover:bg-brand-primary-600 rounded-xl transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-semibold text-neutral-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-bold text-lg mb-6 font-heading">
              {t(copy.sections.quickLinks.en, copy.sections.quickLinks.ar)}
            </h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-neutral-300 hover:text-brand-primary-400 transition-all duration-300 font-primary"
                  >
                    <span className="w-2 h-2 bg-brand-primary-500 rounded-full mr-3 rtl:mr-0 rtl:ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {t(item.en, item.ar)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-bold text-lg mb-6 font-heading">
              {t(copy.sections.services.en, copy.sections.services.ar)}
            </h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-neutral-300 hover:text-brand-primary-400 transition-all duration-300 font-primary"
                  >
                    <span className="w-2 h-2 bg-brand-primary-500 rounded-full mr-3 rtl:mr-0 rtl:ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {t(item.en, item.ar)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-12">
              <h4 className="text-white font-bold text-lg mb-6 font-heading">
                {t(copy.sections.contact.en, copy.sections.contact.ar)}
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:gfeps@yahoo.com"
                  className="flex items-center text-neutral-300 hover:text-brand-primary-400 transition-colors font-primary group"
                >
                  <span className="text-brand-primary-400 mr-3 rtl:mr-0 rtl:ml-3">
                    ✉
                  </span>
                  gfeps@yahoo.com
                </a>
                <a
                  href="tel:+201015362414"
                  className="flex items-center text-neutral-300 hover:text-brand-primary-400 transition-colors font-primary group"
                >
                  <span className="text-brand-primary-400 mr-3 rtl:mr-0 rtl:ml-3">
                    📞
                  </span>
                  +20 10 15362414
                </a>
                <div className="flex items-center text-neutral-400 font-primary">
                  <span className="text-brand-primary-400 mr-3 rtl:mr-0 rtl:ml-3">
                    📍
                  </span>
                  {t("Cairo, Egypt", "القاهرة، مصر")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-neutral-800/50 bg-gradient-to-r from-neutral-950 to-neutral-900">
        <div className="container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-neutral-400 font-primary text-center md:text-left">
              <span className="text-sm">
                {t(copy.copyright.en, copy.copyright.ar)}
              </span>
              <div className="mt-2 flex items-center justify-center md:justify-start space-x-4 rtl:space-x-reverse text-xs">
                <span className="inline-flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>
                    {t("Available for consultation", "متاح للاستشارة")}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-xs text-neutral-400 font-primary">
                <Link
                  href="/privacy"
                  className="hover:text-brand-primary-400 transition-colors"
                >
                  {t("Privacy Policy", "سياسة الخصوصية")}
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-brand-primary-400 transition-colors"
                >
                  {t("Terms", "الشروط والأحكام")}
                </Link>
              </div>

              {/* Professional Badge */}
              <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 bg-brand-primary-600/20 rounded-full border border-brand-primary-500/30">
                <div className="w-2 h-2 bg-brand-primary-400 rounded-full"></div>
                <span className="text-xs font-semibold text-brand-primary-300">
                  {t("NCDA Certified", "معتمد من NCDA")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
