import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import ShowcaseSection from "./components/ShowcaseSection";
import FeatureSection from "./components/FeatureSection";
import StatsSection from "./components/StatsSection";
import TestimonialSection from "./components/TestimonialSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductCarousel />
        <ShowcaseSection />
        <FeatureSection />
        <StatsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
