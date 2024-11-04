import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Credit from "./components/Credit";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-w-7xl pt-20 px-6">
        {" "}
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
        <Credit />
      </div>
    </>
  );
}

export default App;
