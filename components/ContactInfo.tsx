"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button";

export default function ContactInfo() {
  const { language, isRTL } = useLanguage();
  const t = (en: string, ar: string) => (language === "ar" ? ar : en);

  const copy = {
    title: {
      en: "Get in Touch",
      ar: "تواصل معي",
    },
    subtitle: {
      en: "Ready to take the next step in your career journey? Let's connect.",
      ar: "هل أنت مستعد لاتخاذ الخطوة التالية في رحلتك المهنية؟ دعنا نتواصل.",
    },
    workingHoursTitle: {
      en: "Working Hours",
      ar: "ساعات العمل",
    },
  };

  const contactMethods = [
    {
      type: "phone",
      title: t("Call Me", "اتصل بي"),
      info: "+20 10 15362414",
      description: t(
        "Direct phone calls for urgent matters",
        "مكالمات هاتفية مباشرة للأمور العاجلة",
      ),
      action: "tel:+201015362414",
      accent: "emerald",
    },
    {
      type: "whatsapp",
      title: t("WhatsApp", "واتساب"),
      info: "+20 10 15362414",
      description: t(
        "Quick messaging and voice calls",
        "رسائل سريعة ومكالمات صوتية",
      ),
      action: "https://wa.me/201015362414",
      accent: "primary",
    },
    {
      type: "email",
      title: t("Email", "البريد الإلكتروني"),
      info: "gfeps@yahoo.com",
      description: t(
        "Professional inquiries and detailed discussions",
        "الاستفسارات المهنية والمناقشات التفصيلية",
      ),
      action: "mailto:gfeps@yahoo.com",
      accent: "cyan",
    },
    {
      type: "location",
      title: t("Location", "الموقع"),
      info: t("Cairo, Egypt", "القاهرة، مصر"),
      description: t(
        "Available for in-person meetings",
        "متاح للقاءات الشخصية",
      ),
      action: "#",
      accent: "gold",
    },
  ];

  const workingHours = [
    {
      day: t("Sunday - Thursday", "الأحد - الخميس"),
      hours: t("9:00 AM - 6:00 PM", "9:00 صباحاً - 6:00 مساءً"),
      available: true,
    },
    {
      day: t("Friday", "الجمعة"),
      hours: t("10:00 AM - 4:00 PM", "10:00 صباحاً - 4:00 مساءً"),
      available: true,
    },
    {
      day: t("WhatsApp Support", "دعم واتساب"),
      hours: t("Available 24/7", "متاح 24/7"),
      available: true,
    },
  ];

  const getAccentClasses = (accent: string) => {
    switch (accent) {
      case "primary":
        return {
          text: "text-primary-600",
          bg: "bg-primary-50",
          border: "border-primary-200",
        };
      case "emerald":
        return {
          text: "text-emerald-600",
          bg: "bg-emerald-50",
          border: "border-emerald-200",
        };
      case "cyan":
        return {
          text: "text-cyan-600",
          bg: "bg-cyan-50",
          border: "border-cyan-200",
        };
      case "gold":
        return {
          text: "text-amber-600",
          bg: "bg-amber-50",
          border: "border-amber-200",
        };
      default:
        return {
          text: "text-primary-600",
          bg: "bg-primary-50",
          border: "border-primary-200",
        };
    }
  };

  const socialLinks = [
    {
      name: t("Facebook", "فيسبوك"),
      url: "https://facebook.com/gehad.ashraf",
      label: "FB",
      color: "hover:text-blue-600",
    },
    {
      name: t("Instagram", "إنستغرام"),
      url: "https://instagram.com/gehad.ashraf",
      label: "IG",
      color: "hover:text-pink-600",
    },
    {
      name: t("LinkedIn", "لينكد إن"),
      url: "https://linkedin.com/in/gehad-ashraf",
      label: "LI",
      color: "hover:text-blue-700",
    },
    {
      name: t("TikTok", "تيك توك"),
      url: "https://tiktok.com/@gehad.ashraf",
      label: "TT",
      color: "hover:text-black",
    },
  ];

  const copy2 = {
    workingHoursTitle: {
      en: "Working Hours",
      ar: "ساعات العمل",
    },
    socialTitle: {
      en: "Follow Me",
      ar: "تابعني",
    },
    tipsTitle: {
      en: "Contact Tips",
      ar: "نصائح التواصل",
    },
    urgentNote: {
      en: "For urgent matters, WhatsApp is the fastest way to reach me",
      ar: "للأمور العاجلة، واتساب هو أسرع طريقة للوصول إلي",
    },
    emergencyTitle: {
      en: "Emergency Support",
      ar: "الدعم الطارئ",
    },
    emergencyDesc: {
      en: "Need immediate assistance? Contact me directly via WhatsApp",
      ar: "تحتاج مساعدة فورية؟ تواصل معي مباشرة عبر واتساب",
    },
    emergencyButton: {
      en: "Emergency Contact",
      ar: "اتصال طارئ",
    },
  };

  const tips = [
    t("Be specific about your career goals", "كن محدداً حول أهدافك المهنية"),
    t("Prepare questions about programs", "حضر أسئلة حول البرامج"),
    t("Share your background briefly", "شارك خلفيتك المهنية باختصار"),
    t("Mention your preferred meeting time", "اذكر وقت الاجتماع المفضل لديك"),
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.action.startsWith("http") ? "_blank" : "_self"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center cursor-pointer ${isRTL ? "font-cairo" : ""}`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 ${getAccentClasses(method.accent).bg} ${getAccentClasses(method.accent).border} border-2 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                <span
                  className={`text-2xl font-bold ${getAccentClasses(method.accent).text}`}
                >
                  {method.type === "phone"
                    ? "📞"
                    : method.type === "whatsapp"
                      ? "💬"
                      : method.type === "email"
                        ? "✉️"
                        : "📍"}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                {method.title}
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-3 font-primary">
                {method.info}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-primary">
                {method.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Working Hours & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`bg-white rounded-3xl shadow-xl p-8 ${isRTL ? "font-cairo" : ""}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading">
                {t(copy2.workingHoursTitle.en, copy2.workingHoursTitle.ar)}
              </h3>
            </div>

            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <span className="font-semibold text-gray-900 font-primary">
                    {schedule.day}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-primary">
                      {schedule.hours}
                    </span>
                    {schedule.available && (
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <p className="text-sm text-green-800 font-semibold text-center font-primary">
                {t(copy2.urgentNote.en, copy2.urgentNote.ar)}
              </p>
            </div>
          </motion.div>

          {/* Social Media & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Media */}
            <div
              className={`bg-white rounded-3xl shadow-xl p-8 ${isRTL ? "font-cairo" : ""}`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading">
                  {t(copy2.socialTitle.en, copy2.socialTitle.ar)}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${social.color}`}
                  >
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-xs font-bold">
                      {social.label}
                    </div>
                    <span className="font-semibold font-heading">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div
              className={`bg-gradient-to-br from-blue-600 to-primary-600 rounded-3xl shadow-xl p-8 text-white ${isRTL ? "font-cairo" : ""}`}
            >
              <h3 className="text-2xl font-bold mb-6 font-heading">
                {t(copy2.tipsTitle.en, copy2.tipsTitle.ar)}
              </h3>

              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-primary">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white/90 font-primary">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            className={`bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200 max-w-2xl mx-auto ${isRTL ? "font-cairo" : ""}`}
          >
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
              {t(copy2.emergencyTitle.en, copy2.emergencyTitle.ar)}
            </h3>
            <p className="text-gray-600 mb-4 font-primary">
              {t(copy2.emergencyDesc.en, copy2.emergencyDesc.ar)}
            </p>
            <motion.a
              href={`https://wa.me/201015362414?text=${encodeURIComponent(t("I need urgent career consultation", "أحتاج استشارة مهنية عاجلة"))}`}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 font-primary"
            >
              <span>
                {t(copy2.emergencyButton.en, copy2.emergencyButton.ar)}
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
