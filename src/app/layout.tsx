import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import { Preloader } from "@/components/ui/Preloader";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anasnazir.dev"),
  title: {
    default: "Anas Nazir — Full-Stack Developer & Software Engineer",
    template: "%s · Anas Nazir",
  },
  description:
    "Full-Stack Developer & Software Engineer crafting high-performance web platforms, custom APIs, database design, and AI-powered solutions. Built with Next.js, React, Laravel & Python.",
  keywords: [
    "Anas Nazir",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Laravel",
    "Python",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anas Nazir — Full-Stack Developer & Software Engineer",
    description:
      "High-performance web platforms, custom APIs, database design, and AI-powered solutions.",
    url: "https://anasnazir.dev",
    siteName: "Anas Nazir Portfolio",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Anas Nazir — Full-Stack Engineer & Backend Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Nazir — Full-Stack Developer",
    description:
      "High-performance web platforms, custom APIs, database design, and AI-powered solutions.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <Preloader />
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
