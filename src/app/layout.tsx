import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Script from "next/script";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const siteName = "Albert Hermosillo · Frontend Developer";
const siteDescription =
  "Frontend developer crafting scalable web and mobile experiences with React, React Native and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Albert Hermosillo",
  },
  description: siteDescription,
  keywords: [
    "frontend",
    "react",
    "react native",
    "next.js",
    "typescript",
    "portfolio",
    "ui",
    "developer",
  ],
  authors: [{ name: "Alberto Hermosillo" }],
  creator: "Alberto Hermosillo",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    siteName,
    description: siteDescription,
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@albertoherms",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alberto Hermosillo",
    url: siteUrl,
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://linkedin.com/in/alberto-hermosillo",
      "https://github.com",
      "https://twitter.com",
    ],
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${firaCode.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </body>
    </html>
  );
}
