import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raveena | Business Consulting & Digital Transformation",
  description:
    "Raveena empowers businesses through strategic consulting, intelligent automation, system integration, and cutting-edge digital solutions. Transform your operations and accelerate growth.",
  keywords: [
    "business consulting",
    "digital transformation",
    "process automation",
    "CRM implementation",
    "system integration",
    "web development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
