/**
 * Design Tokens System
 * Clean, modern design system for professional website
 * Based on requirements 3.1, 3.2, 2.1
 */

export interface DesignTokens {
  spacing: Record<string, string>;
  typography: {
    fontFamily: {
      primary: string;
      heading: string;
      arabic: string;
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
    lineHeight: Record<string, number>;
  };
  colors: {
    primary: Record<string, string>;
    neutral: Record<string, string>;
    accent: Record<string, string>;
  };
  borderRadius: Record<string, string>;
  boxShadow: Record<string, string>;
  transition: Record<string, string>;
}

export const designTokens: DesignTokens = {
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },
  
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      heading: 'Playfair Display, Georgia, serif',
      arabic: 'Cairo, Noto Sans Arabic, sans-serif',
    },
    fontSize: {
      // Desktop sizes
      'display': '4rem',      // 64px - Hero titles
      'h1': '3rem',           // 48px - Page titles
      'h2': '2.25rem',        // 36px - Section titles
      'h3': '1.75rem',        // 28px - Subsection titles
      'h4': '1.25rem',        // 20px - Component titles
      'body-lg': '1.125rem',  // 18px - Large body text
      'body': '1rem',         // 16px - Regular body text
      'small': '0.875rem',    // 14px - Small text
      'xs': '0.75rem',        // 12px - Extra small text
      
      // Mobile sizes (responsive)
      'display-mobile': '2.5rem',   // 40px
      'h1-mobile': '2rem',          // 32px
      'h2-mobile': '1.75rem',       // 28px
      'h3-mobile': '1.5rem',        // 24px
      'h4-mobile': '1.125rem',      // 18px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.7,
      loose: 2,
    },
  },
  
  colors: {
    primary: {
      // Deep Blue/Navy - Professional & Trustworthy
      '50': '#eff6ff',
      '100': '#dbeafe',
      '200': '#bfdbfe',
      '300': '#93c5fd',
      '400': '#60a5fa',
      '500': '#2563eb',  // Primary brand color
      '600': '#1e3a8a',  // Deep Navy
      '700': '#1e40af',
      '800': '#1e3a8a',
      '900': '#1e3a8a',
    },
    accent: {
      // Warm Orange/Gold - Energy & Motivation
      orange: '#f59e0b',
      'orange-dark': '#ea580c',
      // Teal/Turquoise - Growth & Development
      teal: '#0891b2',
      turquoise: '#06b6d4',
      // Success Green
      green: '#10b981',
      // Warning Amber
      amber: '#f59e0b',
      // Soft Purple for badges
      purple: '#8b5cf6',
    },
    neutral: {
      '25': '#fefefe',
      '50': '#f8fafc',  // Light Gray
      '100': '#f1f5f9', // Light Gray
      '200': '#e2e8f0',
      '300': '#cbd5e1',
      '400': '#94a3b8',
      '500': '#6b7280', // Medium Gray
      '600': '#4b5563',
      '700': '#374151',
      '800': '#1f2937', // Dark Gray
      '900': '#111827', // Dark Gray
    },
    background: {
      white: '#ffffff',
      'light-gray': '#f8fafc',
      'light-gray-alt': '#f1f5f9',
      cream: '#fefce8', // Soft Cream for highlights
    },
  },
  
  borderRadius: {
    none: '0',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    none: '0 0 #0000',
  },
  
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// CSS Custom Properties Generator
export const generateCSSCustomProperties = (): string => {
  const tokens = designTokens;
  
  let css = ':root {\n';
  
  // Spacing tokens
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    css += `  --spacing-${key}: ${value};\n`;
  });
  
  // Typography tokens
  css += `  --font-primary: ${tokens.typography.fontFamily.primary};\n`;
  css += `  --font-heading: ${tokens.typography.fontFamily.heading};\n`;
  css += `  --font-arabic: ${tokens.typography.fontFamily.arabic};\n`;
  
  Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
    css += `  --text-${key}: ${value};\n`;
  });
  
  Object.entries(tokens.typography.fontWeight).forEach(([key, value]) => {
    css += `  --weight-${key}: ${value};\n`;
  });
  
  Object.entries(tokens.typography.lineHeight).forEach(([key, value]) => {
    css += `  --leading-${key}: ${value};\n`;
  });
  
  // Color tokens
  Object.entries(tokens.colors.primary).forEach(([key, value]) => {
    css += `  --color-primary-${key}: ${value};\n`;
  });
  
  Object.entries(tokens.colors.accent).forEach(([key, value]) => {
    css += `  --color-accent-${key}: ${value};\n`;
  });
  
  Object.entries(tokens.colors.neutral).forEach(([key, value]) => {
    css += `  --color-neutral-${key}: ${value};\n`;
  });
  
  // Border radius tokens
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    css += `  --radius-${key}: ${value};\n`;
  });
  
  // Box shadow tokens
  Object.entries(tokens.boxShadow).forEach(([key, value]) => {
    css += `  --shadow-${key}: ${value};\n`;
  });
  
  // Transition tokens
  Object.entries(tokens.transition).forEach(([key, value]) => {
    css += `  --transition-${key}: ${value};\n`;
  });
  
  css += '}\n';
  
  return css;
};

// RTL Support Configuration
export interface RTLConfig {
  direction: 'ltr' | 'rtl';
  language: 'en' | 'ar';
  textAlign: 'left' | 'right';
  marginStart: string;
  marginEnd: string;
  paddingStart: string;
  paddingEnd: string;
}

export const createRTLConfig = (language: 'en' | 'ar'): RTLConfig => ({
  direction: language === 'ar' ? 'rtl' : 'ltr',
  language,
  textAlign: language === 'ar' ? 'right' : 'left',
  marginStart: language === 'ar' ? 'margin-right' : 'margin-left',
  marginEnd: language === 'ar' ? 'margin-left' : 'margin-right',
  paddingStart: language === 'ar' ? 'padding-right' : 'padding-left',
  paddingEnd: language === 'ar' ? 'padding-left' : 'padding-right',
});

// Component Props Interface
export interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

// Text-based alternatives for common icons
export const textAlternatives = {
  // Navigation
  menu: '☰',
  close: '✕',
  arrow: '→',
  arrowLeft: '←',
  arrowRight: '→',
  arrowUp: '↑',
  arrowDown: '↓',
  
  // Actions
  search: 'Search',
  filter: 'Filter',
  sort: 'Sort',
  edit: 'Edit',
  delete: 'Delete',
  save: 'Save',
  cancel: 'Cancel',
  
  // Status
  success: '✓',
  error: '✗',
  warning: '⚠',
  info: 'ℹ',
  
  // Social/Contact
  email: 'Email',
  phone: 'Phone',
  location: 'Location',
  website: 'Website',
  
  // Content
  download: 'Download',
  upload: 'Upload',
  share: 'Share',
  print: 'Print',
  
  // Media
  play: '▶',
  pause: '⏸',
  stop: '⏹',
  
  // Ratings/Feedback
  star: '★',
  heart: '♥',
  like: '👍',
  
  // Language
  language: 'عربي / English',
  arabic: 'عربي',
  english: 'English',
} as const;

export type TextAlternativeKey = keyof typeof textAlternatives;