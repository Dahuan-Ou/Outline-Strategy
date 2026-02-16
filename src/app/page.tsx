"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkflowSection from "@/components/WorkflowSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkflowSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
