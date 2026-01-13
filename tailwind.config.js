/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        arabic: ["Cairo", "Noto Sans Arabic", "sans-serif"],
      },
      colors: {
        // Professional Primary Colors
        navy: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb",
          600: "#1e3a8a",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#1e3a8a",
        },
        // Warm Orange/Gold
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f59e0b",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        // Teal/Turquoise
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        turquoise: {
          500: "#06b6d4",
          600: "#0891b2",
        },
        // Success Green
        success: {
          500: "#10b981",
          600: "#059669",
        },
        // Soft Purple - Calm Professional
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        // Soft Blue - Calm Professional
        "soft-blue": {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Neutral Colors
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        // Background Colors
        background: {
          white: "#ffffff",
          "light-gray": "#f8fafc",
          "light-gray-alt": "#f1f5f9",
          cream: "#fefce8",
        },
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(135deg, #ff6b35, #ff007f)",
        "gradient-dark": "linear-gradient(135deg, #0a0a0a, #111111)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 212, 255, 0.1))",
        "gradient-text": "linear-gradient(135deg, #ff6b35, #00d4ff)",
        starfield: `
          radial-gradient(2px 2px at 20px 30px, #00ffff, transparent),
          radial-gradient(2px 2px at 40px 70px, #ff6b35, transparent),
          radial-gradient(1px 1px at 90px 40px, #ff007f, transparent),
          radial-gradient(1px 1px at 130px 80px, #00d4ff, transparent),
          radial-gradient(2px 2px at 160px 30px, #39ff14, transparent),
          #0a0a0a
        `,
      },
      boxShadow: {
        neon: "0 0 20px #ff6b35, 0 0 40px #ff6b35, 0 0 60px #ff6b35",
        "neon-blue": "0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff",
        "neon-purple": "0 0 20px #b845ed, 0 0 40px #b845ed, 0 0 60px #b845ed",
        "neon-green": "0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 60px #39ff14",
        card: "0 8px 32px rgba(0, 0, 0, 0.5)",
        elevated: "0 16px 64px rgba(0, 0, 0, 0.7)",
        glow: "0 0 30px rgba(255, 107, 53, 0.3)",
        "glow-blue": "0 0 30px rgba(0, 212, 255, 0.3)",
        "glow-strong": "0 0 50px rgba(255, 107, 53, 0.5)",
      },
      dropShadow: {
        neon: "0 0 20px #ff6b35",
        "neon-blue": "0 0 20px #00d4ff",
        "text-glow": "0 0 10px rgba(255, 255, 255, 0.5)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "fade-in-left": "fadeInLeft 0.8s ease forwards",
        "fade-in-right": "fadeInRight 0.8s ease forwards",
        glow: "glow 2s ease-in-out infinite",
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        starfield: "starfield 20s linear infinite",
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "spin-slow": "spin 3s linear infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 10px #ff6b35, 0 0 20px #ff6b35, 0 0 30px #ff6b35",
          },
          "50%": {
            textShadow: "0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35",
          },
        },
        pulseNeon: {
          "0%, 100%": {
            boxShadow: "0 0 20px #ff6b35",
          },
          "50%": {
            boxShadow: "0 0 40px #ff6b35, 0 0 60px #ff6b35",
          },
        },
        borderGlow: {
          "0%, 100%": {
            borderColor: "#ff6b35",
            boxShadow: "0 0 20px rgba(255, 107, 53, 0.3)",
          },
          "50%": {
            borderColor: "#00d4ff",
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
          },
        },
        starfield: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100px)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      screens: {
        xs: "475px",
        "3xl": "1680px",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      lineHeight: {
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "5/4": "5 / 4",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1200: "1200ms",
      },
      blur: {
        "4xl": "72px",
        "5xl": "96px",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-neon": {
          color: theme("colors.neon.orange"),
          textShadow: `0 0 10px ${theme("colors.neon.orange")}`,
        },
        ".text-neon-blue": {
          color: theme("colors.neon.blue"),
          textShadow: `0 0 10px ${theme("colors.neon.blue")}`,
        },
        ".text-neon-purple": {
          color: theme("colors.neon.purple"),
          textShadow: `0 0 10px ${theme("colors.neon.purple")}`,
        },
        ".text-glow": {
          textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
        },
        ".border-neon": {
          borderColor: theme("colors.neon.orange"),
        },
        ".border-neon-blue": {
          borderColor: theme("colors.neon.blue"),
        },
        ".bg-glass": {
          backgroundColor: "rgba(20, 20, 20, 0.8)",
          backdropFilter: "blur(10px)",
        },
        ".bg-glass-strong": {
          backgroundColor: "rgba(21, 21, 21, 0.95)",
          backdropFilter: "blur(20px)",
        },
        ".gradient-text": {
          background: theme("backgroundImage.gradient-text"),
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        ".hover-lift": {
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: theme("boxShadow.elevated"),
          },
        },
        ".hover-glow": {
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: theme("boxShadow.glow"),
          },
        },
        ".card-glass": {
          backgroundColor: "rgba(21, 21, 21, 0.9)",
          border: `1px solid ${theme("colors.border.subtle")}`,
          backdropFilter: "blur(10px)",
          borderRadius: theme("borderRadius.2xl"),
        },
        ".btn-neon": {
          background: theme("backgroundImage.gradient-neon"),
          color: theme("colors.text.primary"),
          boxShadow: theme("boxShadow.neon"),
          border: `2px solid ${theme("colors.neon.orange")}`,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px) scale(1.02)",
            boxShadow: "0 0 30px #ff6b35, 0 0 60px #ff6b35, 0 0 90px #ff6b35",
          },
        },
        ".btn-ghost": {
          backgroundColor: "transparent",
          color: theme("colors.text.primary"),
          border: `2px solid ${theme("colors.border.default")}`,
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: theme("colors.neon.orange"),
            color: theme("colors.neon.orange"),
            boxShadow: "0 0 20px rgba(255, 107, 53, 0.3)",
          },
        },
        ".nav-link": {
          position: "relative",
          color: theme("colors.text.secondary"),
          fontWeight: theme("fontWeight.medium"),
          transition: "all 0.3s ease",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "50%",
            width: "0",
            height: "2px",
            background: theme("colors.neon.orange"),
            transition: "all 0.3s ease",
            transform: "translateX(-50%)",
          },
          "&:hover": {
            color: theme("colors.neon.orange"),
            textShadow: "0 0 10px rgba(255, 107, 53, 0.5)",
            "&::after": {
              width: "80%",
              boxShadow: `0 0 10px ${theme("colors.neon.orange")}`,
            },
          },
        },
        ".glass-morphism": {
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
