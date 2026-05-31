import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Outline Strategy | Business Process & Systems Advisory",
  description:
    "Outline Strategy helps service businesses design operational systems that work. Clear structure, connected data, and the visibility you need to make better decisions.",
  keywords: [
    "business consulting",
    "operational design",
    "systems architecture",
    "process automation",
    "visibility reporting",
    "digital transformation",
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
        className={`${inter.variable} ${dmSerif.variable} antialiased`}
      >
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
