/**
 * Text-based alternatives for icons
 * Clean, professional text replacements for icon dependencies
 * Requirements: 2.1 - Remove icon dependencies and prepare text-based alternatives
 */

export const textAlternatives = {
  // Navigation
  menu: '☰',
  close: '✕',
  arrow: '→',
  arrowLeft: '←',
  arrowRight: '→',
  arrowUp: '↑',
  arrowDown: '↓',
  chevronRight: '›',
  chevronLeft: '‹',
  chevronUp: '⌃',
  chevronDown: '⌄',
  
  // Actions
  search: 'Search',
  filter: 'Filter',
  sort: 'Sort',
  edit: 'Edit',
  delete: 'Delete',
  save: 'Save',
  cancel: 'Cancel',
  submit: 'Submit',
  reset: 'Reset',
  
  // Status
  success: '✓',
  error: '✗',
  warning: '⚠',
  info: 'ℹ',
  check: '✓',
  cross: '✗',
  
  // Social/Contact
  email: 'Email',
  phone: 'Phone',
  location: 'Location',
  website: 'Website',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  facebook: 'Facebook',
  instagram: 'Instagram',
  
  // Content
  download: 'Download',
  upload: 'Upload',
  share: 'Share',
  print: 'Print',
  copy: 'Copy',
  paste: 'Paste',
  
  // Media
  play: '▶',
  pause: '⏸',
  stop: '⏹',
  next: '⏭',
  previous: '⏮',
  
  // Ratings/Feedback
  star: '★',
  starEmpty: '☆',
  heart: '♥',
  heartEmpty: '♡',
  like: '👍',
  dislike: '👎',
  
  // Language
  language: 'عربي / English',
  arabic: 'عربي',
  english: 'English',
  
  // Business/Professional
  calendar: 'Calendar',
  clock: 'Time',
  user: 'Profile',
  users: 'Team',
  briefcase: 'Work',
  building: 'Company',
  chart: 'Analytics',
  document: 'Document',
  folder: 'Folder',
  
  // Communication
  message: 'Message',
  chat: 'Chat',
  notification: 'Notification',
  bell: 'Alerts',
  
  // Settings
  settings: 'Settings',
  gear: 'Options',
  preferences: 'Preferences',
  
  // Common UI
  home: 'Home',
  dashboard: 'Dashboard',
  profile: 'Profile',
  logout: 'Logout',
  login: 'Login',
  signup: 'Sign Up',
  
  // Directional
  expand: 'Expand',
  collapse: 'Collapse',
  maximize: 'Maximize',
  minimize: 'Minimize',
  
  // File operations
  file: 'File',
  image: 'Image',
  video: 'Video',
  audio: 'Audio',
  pdf: 'PDF',
  
  // E-commerce
  cart: 'Cart',
  wishlist: 'Wishlist',
  purchase: 'Buy',
  price: 'Price',
  
  // Miscellaneous
  help: 'Help',
  support: 'Support',
  faq: 'FAQ',
  contact: 'Contact',
  about: 'About',
  services: 'Services',
  portfolio: 'Portfolio',
  testimonials: 'Testimonials',
  blog: 'Blog',
  news: 'News',
  
} as const;

export type TextAlternativeKey = keyof typeof textAlternatives;

/**
 * Get text alternative for an icon
 * @param key - The icon key
 * @param fallback - Fallback text if key not found
 * @returns Text alternative or fallback
 */
export function getTextAlternative(key: TextAlternativeKey, fallback?: string): string {
  return textAlternatives[key] || fallback || key;
}

/**
 * Create a text-based button without icons
 * @param text - Button text
 * @param variant - Button style variant
 * @returns Button configuration object
 */
export interface TextButtonConfig {
  text: string;
  variant: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
}

export function createTextButton(config: TextButtonConfig): TextButtonConfig {
  return {
    size: 'md',
    fullWidth: false,
    disabled: false,
    ...config,
  };
}

/**
 * Navigation items without icons
 */
export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Language switcher without icons
 */
export interface LanguageOption {
  code: 'en' | 'ar';
  label: string;
  nativeLabel: string;
}

export const languageOptions: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'عربي' },
];

/**
 * Social links without icons (text-based)
 */
export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { platform: 'linkedin', url: '#', label: 'LinkedIn' },
  { platform: 'twitter', url: '#', label: 'Twitter' },
  { platform: 'email', url: 'mailto:', label: 'Email' },
];

/**
 * Contact methods without icons
 */
export interface ContactMethod {
  type: string;
  value: string;
  label: string;
  href?: string;
}

export const contactMethods: ContactMethod[] = [
  { 
    type: 'email', 
    value: 'contact@gehadashraf.com', 
    label: 'Email',
    href: 'mailto:contact@gehadashraf.com'
  },
  { 
    type: 'phone', 
    value: '+1 (555) 123-4567', 
    label: 'Phone',
    href: 'tel:+15551234567'
  },
  { 
    type: 'location', 
    value: 'Professional Services Worldwide', 
    label: 'Location'
  },
];

/**
 * Service features without icons
 */
export interface ServiceFeature {
  title: string;
  description: string;
  highlight?: boolean;
}

export const serviceFeatures: ServiceFeature[] = [
  {
    title: 'Career Development',
    description: 'Professional career guidance and development strategies',
    highlight: true,
  },
  {
    title: 'Skills Assessment',
    description: 'Comprehensive evaluation of professional skills and competencies',
  },
  {
    title: 'Strategic Planning',
    description: 'Long-term career planning and goal setting',
  },
  {
    title: 'Professional Coaching',
    description: 'One-on-one coaching sessions for career advancement',
    highlight: true,
  },
];

/**
 * Utility function to create clean, text-based UI elements
 */
export class TextBasedUI {
  static createButton(text: string, variant: 'primary' | 'secondary' | 'accent' = 'primary'): string {
    return `btn btn-${variant}`;
  }
  
  static createNavigation(items: NavItem[]): NavItem[] {
    return items.map(item => ({
      ...item,
      // Ensure no icon properties
    }));
  }
  
  static createCard(title: string, content: string): { title: string; content: string } {
    return { title, content };
  }
  
  static createList(items: string[]): string[] {
    return items;
  }
}

/**
 * Accessibility helpers for text-based UI
 */
export const accessibilityLabels = {
  navigation: 'Main navigation',
  languageSwitcher: 'Switch language',
  menu: 'Menu',
  close: 'Close',
  search: 'Search',
  submit: 'Submit form',
  reset: 'Reset form',
  previous: 'Previous page',
  next: 'Next page',
  home: 'Go to homepage',
  contact: 'Contact information',
  social: 'Social media links',
} as const;

export type AccessibilityLabelKey = keyof typeof accessibilityLabels;