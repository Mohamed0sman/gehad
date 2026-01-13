import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "./design-system.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Gehad Ashraf - Career Development Professional | NCDA Certified",
    template: "%s | Gehad Ashraf",
  },
  description:
    "NCDA Certified Career Development Professional specializing in evidence-based coaching, strategic career design, and professional development. Transform your career with proven strategies.",
  keywords: [
    "Career Development",
    "NCDA Certified",
    "Career Coaching",
    "Professional Development",
    "Career Counseling",
    "Career Transition",
    "Leadership Development",
    "Executive Coaching",
    "Career Strategy",
    "Professional Growth",
    "Career Consultant",
    "Job Search Strategy",
    "Career Planning",
  ],
  authors: [{ name: "Gehad Ashraf" }],
  creator: "Gehad Ashraf",
  publisher: "Gehad Ashraf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gehadashraf.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gehadashraf.com",
    title: "Gehad Ashraf - Career Development Professional | NCDA Certified",
    description:
      "NCDA Certified Career Development Professional. Transform your career with evidence-based strategies and expert guidance.",
    siteName: "Gehad Ashraf",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gehad Ashraf - Career Development Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gehad Ashraf - Career Development Professional",
    description:
      "NCDA Certified Career Development Professional specializing in evidence-based coaching",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${poppins.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
