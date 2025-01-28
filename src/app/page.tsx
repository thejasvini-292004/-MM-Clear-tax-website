"use client";

import Banner from "./components/Banner";
import Carousel from "./components/Home";
import { FeaturesSection } from "./components/Home";
import { CreateDesign } from "./components/Home"; // Import FeaturesSection properly
import { AboutSection } from "./components/Home";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Banner />
      <Carousel />
      <FeaturesSection />
      <CreateDesign />
      <AboutSection />
      <Footer />
    </div>
  );
}
