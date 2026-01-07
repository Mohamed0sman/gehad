/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B3B66',
          50: '#F3F6F9',
          100: '#E6EEF6',
          200: '#BFD7EE',
          300: '#99BFD8',
          400: '#578FBF',
          500: '#2B6BA0',
          600: '#0B4B7A',
          700: '#083856',
          800: '#06283B',
          900: '#041821'
        },
        accent: {
          DEFAULT: '#0FA3A4',
          50: '#ECF9F9',
          100: '#D3F3F3',
          200: '#AEEFEF',
          300: '#7CEAEA',
          400: '#40E0DF',
          500: '#0FA3A4',
          600: '#0C8A8B',
          700: '#0A6A6B',
          800: '#075052',
          900: '#043739'
        },
        neutral: {
          50: '#FAFBFC',
          100: '#F3F4F6',
          200: '#E6E9EE',
          300: '#D1D6DE',
          400: '#A6B0BD',
          500: '#6F7A86',
          600: '#495560',
          700: '#2F3940',
          800: '#1E282E',
          900: '#0F1619'
        },
        emphasis: {
          DEFAULT: '#E7B13A',
          50: '#FEF8EE',
          100: '#FDEFCB',
          200: '#FBDFA3',
          300: '#F7C96A',
          400: '#F2B03D',
          500: '#E7B13A',
          600: '#C6902F',
          700: '#996F23',
          800: '#6E4E18',
          900: '#3B2A0E'
        }
      },
      fontFamily: {
        'cairo': ['var(--font-cairo)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'arabic': ['var(--font-cairo)', 'sans-serif'],
        'english-heading': ['var(--font-playfair)', 'serif'],
        'english-body': ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B3B7C 0%, #00AEEF 50%, #8CC63F 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}